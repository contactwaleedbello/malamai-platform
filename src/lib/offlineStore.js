/**
 * offlineStore.js - Client-Side Offline Storage Utility for Malamai Circle
 * 
 * PRD Reference:
 * - Section 5.3 (F3. Save to this phone)
 * - Section 2.5 (Shared-phone handling)
 * 
 * Rules & Invariants:
 * - F3-01: Saved items live in browser storage on the phone, not on the server.
 * - F3-02: Saved items belong to the member session and clear at sign-out on a shared phone.
 * - F3-03: Storage quota limits handled gracefully ("This phone could not save the file. You can still open it online.").
 * - Atomicity: Part-saved items are strictly disallowed. Save fully or not at all.
 */

const STORAGE_KEYS = {
  INDEX: "mc_saved_items_index",
  CONTENTS: "mc_saved_items_content",
  QUOTA_SIMULATION: "mc_simulate_quota_exceeded"
};

// In-memory fallback for Node.js test environment or when window/localStorage is unavailable
let memoryIndex = [];
let memoryContents = {};
let simulateQuotaFlag = false;

function isBrowser() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

/**
 * Get internal storage index
 */
function readIndex() {
  if (!isBrowser()) {
    return [...memoryIndex];
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.INDEX);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Could not read saved index from localStorage:", err);
    return [];
  }
}

/**
 * Write internal storage index
 */
function writeIndex(index) {
  if (!isBrowser()) {
    memoryIndex = [...index];
    return;
  }
  localStorage.setItem(STORAGE_KEYS.INDEX, JSON.stringify(index));
}

/**
 * Get cached item content payload
 */
function readContent(id) {
  if (!isBrowser()) {
    return memoryContents[id] || null;
  }
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.CONTENTS}_${id}`);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn(`Could not read cached content for ${id}:`, err);
    return null;
  }
}

/**
 * Write cached item content payload
 */
function writeContent(id, content) {
  if (!isBrowser()) {
    memoryContents[id] = content;
    return;
  }
  localStorage.setItem(`${STORAGE_KEYS.CONTENTS}_${id}`, JSON.stringify(content));
}

/**
 * Remove cached item content payload
 */
function deleteContent(id) {
  if (!isBrowser()) {
    delete memoryContents[id];
    return;
  }
  localStorage.removeItem(`${STORAGE_KEYS.CONTENTS}_${id}`);
}

/**
 * Toggle or check test quota exceeded simulation
 */
export function simulateQuotaExceeded(shouldFail = true) {
  simulateQuotaFlag = !!shouldFail;
  if (isBrowser()) {
    if (shouldFail) {
      localStorage.setItem(STORAGE_KEYS.QUOTA_SIMULATION, "true");
    } else {
      localStorage.removeItem(STORAGE_KEYS.QUOTA_SIMULATION);
    }
  }
}

export function isSimulatingQuotaExceeded() {
  if (isBrowser()) {
    return localStorage.getItem(STORAGE_KEYS.QUOTA_SIMULATION) === "true";
  }
  return simulateQuotaFlag;
}

/**
 * Save an item atomically to local offline storage.
 * 
 * Atomicity validation:
 * For questions: requires id, title, body, and replies array.
 * For resources: requires id, title, and file_url or source_choice.
 * 
 * @param {Object} item - Item to be saved
 * @returns {Promise<{success: boolean, error?: string, item?: Object}>}
 */
export async function saveItem(item) {
  if (!item || !item.id || !item.title) {
    return {
      success: false,
      error: "Cannot save incomplete item. Missing ID or title."
    };
  }

  // Atomicity guard: disallow half-saved items (PRD Section 5.3)
  const isQuestion = item.type === "question" || item.id.startsWith("q_");
  const isResource = item.type === "resource" || item.id.startsWith("res_");

  if (isQuestion) {
    if (!item.body || typeof item.body !== "string" || item.body.trim().length === 0) {
      return {
        success: false,
        error: "Part-saved question rejected. Full question body is required."
      };
    }
    if (!Array.isArray(item.replies)) {
      return {
        success: false,
        error: "Part-saved question rejected. Replies list must be provided for offline reading."
      };
    }
  } else if (isResource) {
    if (!item.subject && !item.file_url) {
      return {
        success: false,
        error: "Part-saved resource rejected. Resource metadata is required."
      };
    }
  }

  // Quota Exceeded Simulation or Actual Check
  if (isSimulatingQuotaExceeded()) {
    return {
      success: false,
      error: "This phone could not save the file. You can still open it online."
    };
  }

  const itemId = item.id;
  const itemType = isQuestion ? "question" : "resource";
  const now = new Date().toISOString();

  const summaryRecord = {
    id: itemId,
    type: itemType,
    title: item.title,
    subject: item.subject || "General",
    classLevel: item.classLevel || item.class_level || "General",
    language: item.language || "English",
    savedAt: now,
    authorName: item.author_first_name || item.uploader_first_name || (item.author ? item.author.firstName : "Teacher"),
    authorState: item.author_state || item.uploader_state || (item.author ? item.author.state : "Kaduna")
  };

  const detailedPayload = {
    ...item,
    savedAt: now
  };

  try {
    // Atomic write step 1: write payload
    writeContent(itemId, detailedPayload);

    // Atomic write step 2: update index
    const index = readIndex();
    const existingIdx = index.findIndex(i => i.id === itemId);
    if (existingIdx >= 0) {
      index[existingIdx] = summaryRecord;
    } else {
      index.unshift(summaryRecord);
    }
    writeIndex(index);

    return {
      success: true,
      item: summaryRecord
    };
  } catch (err) {
    // If browser throws DOMException QUOTA_EXCEEDED_ERR or NS_ERROR_DOM_QUOTA_REACHED
    // Clean up to ensure atomicity
    deleteContent(itemId);
    return {
      success: false,
      error: "This phone could not save the file. You can still open it online."
    };
  }
}

export const saveItemToPhone = saveItem;

/**
 * Retrieve all saved item summaries sorted by savedAt descending
 * @returns {Promise<Array>}
 */
export async function getSavedItems() {
  const index = readIndex();
  return index.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
}

/**
 * Retrieve the full offline payload for a specific item
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getSavedItemById(id) {
  if (!id) return null;
  return readContent(id);
}

/**
 * Check if a specific item is already saved
 * @param {string} id
 * @returns {Promise<boolean>}
 */
export async function isItemSaved(id) {
  if (!id) return false;
  const index = readIndex();
  return index.some(i => i.id === id);
}

/**
 * Remove a single saved item and its offline content
 * @param {string} id
 * @returns {Promise<boolean>}
 */
export async function removeSavedItem(id) {
  if (!id) return false;
  const index = readIndex();
  const updated = index.filter(i => i.id !== id);
  writeIndex(updated);
  deleteContent(id);
  return true;
}

/**
 * Clear all saved items and offline content from this phone
 * @returns {Promise<boolean>}
 */
export async function clearAllSavedItems() {
  const index = readIndex();
  for (const item of index) {
    deleteContent(item.id);
  }
  writeIndex([]);
  return true;
}

/**
 * Handle user sign-out according to PRD Section 2.5 & Rule F3-02:
 * "Saved items belong to the signed-in member and clear at sign-out on a shared phone."
 * 
 * @param {boolean} isSharedPhone - Whether the active session is marked as shared phone
 * @returns {Promise<{purged: boolean, count: number}>}
 */
export async function handleSignOut(isSharedPhone = false) {
  if (isSharedPhone) {
    const index = readIndex();
    const count = index.length;
    await clearAllSavedItems();
    return { purged: true, count };
  }
  return { purged: false, count: 0 };
}
