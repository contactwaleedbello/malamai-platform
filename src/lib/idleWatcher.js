/**
 * idleWatcher.js - Shared Phone Auto-Signout Idle Watcher
 * 
 * PRD Reference: Section 2.5 (Shared-phone notes)
 * "At sign-in the person can tick 'This is a shared phone,' which signs them out after a short idle time.
 *  Saved items belong to the signed-in member and clear at sign-out."
 */

import { handleSignOut } from "./offlineStore.js";
import { signOut } from "./data.js";

let idleTimer = null;
let isWatching = false;
let configuredTimeoutMs = 5 * 60 * 1000; // 5 minutes default
let onSignOutCallback = null;

function resetTimer() {
  if (!isWatching) return;
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(triggerIdleSignOut, configuredTimeoutMs);
}

export async function triggerIdleSignOut() {
  stopIdleWatcher();
  try {
    // Purge saved items from shared phone
    await handleSignOut(true);
    await signOut();
  } catch (err) {
    console.error("Error during idle sign out:", err);
  }

  if (typeof onSignOutCallback === "function") {
    onSignOutCallback();
  } else if (typeof window !== "undefined") {
    // Redirect to join or home with notice
    window.location.href = "/join?signed_out=shared_phone_idle";
  }
}

export function initIdleWatcher(options = {}) {
  if (typeof window === "undefined") return;

  const isShared = options.isSharedPhone ?? (localStorage.getItem("mc_is_shared_phone") === "true");
  if (!isShared) {
    stopIdleWatcher();
    return;
  }

  configuredTimeoutMs = options.timeoutMs || 5 * 60 * 1000;
  onSignOutCallback = options.onSignOut || null;
  isWatching = true;

  const events = ["touchstart", "mousedown", "keydown", "scroll"];
  events.forEach(evt => {
    window.addEventListener(evt, resetTimer, { passive: true });
  });

  resetTimer();
}

export function stopIdleWatcher() {
  isWatching = false;
  if (idleTimer) {
    clearTimeout(idleTimer);
    idleTimer = null;
  }
}
