/**
 * Malamai Circle - Fake Data Layer (The Seam Pattern)
 * File: src/lib/data.js
 *
 * Mock schema and asynchronous interface simulating 2G/3G network conditions
 * for primary and secondary school educators in Northern Nigeria.
 */

// Simulated network latency
const DEFAULT_LATENCY_MS = 120;
let forceNetworkError = false;

function delay(ms = DEFAULT_LATENCY_MS) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceNetworkError) {
        reject(new Error("Network connection dropped. Please tap Retry."));
      } else {
        resolve();
      }
    }, ms);
  });
}

export function setSimulateNetworkError(shouldError) {
  forceNetworkError = shouldError;
}

// -----------------------------------------------------------------------------
// READ-ONLY EMERGENCY SWITCH (PRD Section 7.5 & Rule ADM-09)
// -----------------------------------------------------------------------------
let isPlatformReadOnly = false;

export function isReadOnlyMode() {
  return isPlatformReadOnly;
}

export function setReadOnlyMode(readOnly) {
  isPlatformReadOnly = Boolean(readOnly);
  return isPlatformReadOnly;
}

// -----------------------------------------------------------------------------
// 1. CURRENT USER SESSION STATE (Reader vs Member vs Moderator vs Admin; phone own vs shared)
// -----------------------------------------------------------------------------

let currentUser = {
  id: "usr_musa",
  username: "musa_science",
  first_name: "Musa",
  role: "Admin", // "Reader", "Member", "Moderator", "Admin"
  phone_ownership: "shared", // "own", "shared"
  state: "Kaduna",
  lga: "Zaria",
  school_type: "Public Secondary",
  school_name: "Government Secondary School Zaria",
  phone_number: "08055551234",
  subjects: ["Mathematics", "Basic Science"],
  class_levels: ["JSS 1", "JSS 2", "JSS 3"],
  language: "English",
  years_teaching: "3 to 5",
  trcn_registered: true,
  trcn_number: "TRCN/KAD/2019/012345",
  trcn_verified_at: "2026-09-19",
  approved_uploads_count: 4,
  suspended: false,

  // Backward compatibility aliases
  get firstName() { return this.first_name; },
  set firstName(v) { this.first_name = v; },
  get phoneType() { return this.phone_ownership === "shared" ? "Shared" : "Personal"; },
  get isSharedPhone() { return this.phone_ownership === "shared"; },
  get classLevels() { return this.class_levels; },
  get trcnRegistered() { return this.trcn_registered; },
  get trcnNumber() { return this.trcn_number; }
};

export async function getCurrentUser() {
  await delay();
  return { ...currentUser };
}

export async function setUserRole(role) {
  await delay();
  if (!["Reader", "Member", "Moderator", "Admin"].includes(role)) {
    throw new Error(`Invalid role: ${role}`);
  }
  currentUser.role = role;
  return { ...currentUser };
}

export async function setUserPhoneOwnership(phoneOwnership) {
  await delay();
  if (!["own", "shared"].includes(phoneOwnership)) {
    throw new Error(`Invalid phone ownership: ${phoneOwnership}`);
  }
  currentUser.phone_ownership = phoneOwnership;
  return { ...currentUser };
}

export async function updateCurrentUser(updates = {}) {
  await delay();
  currentUser = {
    ...currentUser,
    ...updates
  };
  return { ...currentUser };
}


// -----------------------------------------------------------------------------
// 2. REPLIES SCHEMA & SEED DATA
// -----------------------------------------------------------------------------

let replies = [
  {
    id: "rep_101",
    question_id: "q_001",
    body: "Use groundnut grains or stones (tsakuwa). Give a group 20 stones and ask them to share between 2 pupils in ratio 2:3. In Hausa: 'Raba kashi biyu da kashi uku'. This helped my pupils understand instantly.",
    author_first_name: "Fatima",
    author_state: "Kano",
    created_at: "2026-09-17T18:00:00Z",
    is_helped: true,

    // Backward compatibility aliases
    get questionId() { return this.question_id; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get isHelpful() { return this.is_helped; },
    get isHelped() { return this.is_helped; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        trcnRegistered: true
      };
    }
  },
  {
    id: "rep_102",
    question_id: "q_001",
    body: "You can also use cups of garri or rice measurements (mudu) to show ratios in cooking recipes that pupils see at home.",
    author_first_name: "Ibrahim",
    author_state: "Kaduna",
    created_at: "2026-09-18T08:15:00Z",
    is_helped: false,

    get questionId() { return this.question_id; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get isHelpful() { return this.is_helped; },
    get isHelped() { return this.is_helped; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        trcnRegistered: false
      };
    }
  },
  {
    id: "rep_103",
    question_id: "q_003",
    body: "A fara da tambayoyi biyar masu sauki: Wane ne? Ina ya tafi? Me ya gani a kasuwa? Me ya faru a hanya? Yaushe ya dawo? Idan suka amsa wadannan, sai a hada su su zama sakin layi.",
    author_first_name: "Amina",
    author_state: "Katsina",
    created_at: "2026-09-18T16:00:00Z",
    is_helped: true,

    get questionId() { return this.question_id; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get isHelpful() { return this.is_helped; },
    get isHelped() { return this.is_helped; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        trcnRegistered: true
      };
    }
  },
  {
    id: "rep_104",
    question_id: "q_004",
    body: "Tie a smooth stone to a 1-meter sewing thread or thin twine. Suspend it from a nail on the wooden door frame. Pupils can time 20 oscillations using a basic mobile phone stopwatch.",
    author_first_name: "Sani",
    author_state: "Kano",
    created_at: "2026-09-18T19:30:00Z",
    is_helped: false,

    get questionId() { return this.question_id; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get isHelpful() { return this.is_helped; },
    get isHelped() { return this.is_helped; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        trcnRegistered: true
      };
    }
  }
];

// Helper to wrap raw reply with compatibility getters
function normalizeReply(rep) {
  if (rep.author && rep.author_first_name) return rep;
  return {
    ...rep,
    get questionId() { return this.question_id; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get isHelpful() { return this.is_helped; },
    get isHelped() { return this.is_helped; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        trcnRegistered: true
      };
    }
  };
}

// -----------------------------------------------------------------------------
// 3. QUESTIONS SCHEMA & SEED DATA
// -----------------------------------------------------------------------------

let questions = [
  {
    id: "q_001",
    title: "Teaching ratio to JSS 2 with no textbooks",
    body: "Half my class follows Hausa better than English. We do not have mathematics textbooks for JSS 2 this term. How can I introduce the concept of ratios using local market examples or physical items pupils know?",
    subject: "Mathematics",
    class_level: "JSS 2",
    language: "English",
    author_first_name: "Musa",
    author_state: "Kaduna",
    created_at: "2026-09-17T14:30:00Z",
    helped_reply_id: "rep_101",
    reply_count: 2,

    // Backward compatibility aliases
    get classLevel() { return this.class_level; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get helpedReplyId() { return this.helped_reply_id; },
    get replyCount() { return this.reply_count; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        subject: this.subject
      };
    },
    get replies() {
      return replies.filter(r => r.question_id === this.id).map(normalizeReply);
    }
  },
  {
    id: "q_002",
    title: "Low-cost acid-base indicator using hibiscus flower (zobo leaves)",
    body: "Our school has no laboratory chemicals. Can we boil dried zobo (hibiscus sabdariffa) leaves in water and use the red juice to test for vinegar (acid) and wood ash water (base)? Does it change to green or bright red?",
    subject: "Basic Science",
    class_level: "JSS 1",
    language: "English",
    author_first_name: "Zainab",
    author_state: "Sokoto",
    created_at: "2026-09-18T09:00:00Z",
    helped_reply_id: null,
    reply_count: 0,

    get classLevel() { return this.class_level; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get helpedReplyId() { return this.helped_reply_id; },
    get replyCount() { return this.reply_count; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        subject: this.subject
      };
    },
    get replies() {
      return replies.filter(r => r.question_id === this.id).map(normalizeReply);
    }
  },
  {
    id: "q_003",
    title: "Yadda ake koya rubutun labari a Primary 4 (Narrative writing in Hausa)",
    body: "Ina neman dabarun da zan bi wajen koya wa yara rubuta gajeren labari game da tafiya gona ko kasuwa ba tare da sun rikice da ka'idojin rubutu ba.",
    subject: "Hausa",
    class_level: "Primary 4",
    language: "Hausa",
    author_first_name: "Usman",
    author_state: "Borno",
    created_at: "2026-09-18T11:20:00Z",
    helped_reply_id: "rep_103",
    reply_count: 1,

    get classLevel() { return this.class_level; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get helpedReplyId() { return this.helped_reply_id; },
    get replyCount() { return this.reply_count; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        subject: this.subject
      };
    },
    get replies() {
      return replies.filter(r => r.question_id === this.id).map(normalizeReply);
    }
  },
  {
    id: "q_004",
    title: "Simple pendulum experiments with stones and thread for JSS 2",
    body: "We are teaching simple periodic motion in Basic Science. Since we do not have iron bobs or retort stands, what improvised apparatus have you used safely in the classroom?",
    subject: "Basic Science",
    class_level: "JSS 2",
    language: "English",
    author_first_name: "Haruna",
    author_state: "Niger",
    created_at: "2026-09-18T15:10:00Z",
    helped_reply_id: null,
    reply_count: 1,

    get classLevel() { return this.class_level; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get helpedReplyId() { return this.helped_reply_id; },
    get replyCount() { return this.reply_count; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        subject: this.subject
      };
    },
    get replies() {
      return replies.filter(r => r.question_id === this.id).map(normalizeReply);
    }
  }
];

function normalizeQuestion(q) {
  if (q.author && q.author_first_name) return q;
  return {
    ...q,
    get classLevel() { return this.class_level; },
    get authorFirstName() { return this.author_first_name; },
    get authorState() { return this.author_state; },
    get createdAt() { return this.created_at; },
    get helpedReplyId() { return this.helped_reply_id; },
    get replyCount() { return this.reply_count; },
    get author() {
      return {
        firstName: this.author_first_name,
        state: this.author_state,
        subject: this.subject
      };
    },
    get replies() {
      return replies.filter(r => r.question_id === this.id).map(normalizeReply);
    }
  };
}

// -----------------------------------------------------------------------------
// 4. RESOURCES SCHEMA & SEED DATA
// -----------------------------------------------------------------------------

let resources = [
  {
    id: "res_001",
    title: "JSS 2 Ratio & Proportion Local Practical Activity Sheet",
    subject: "Mathematics",
    class_level: "JSS 2",
    language: "English",
    source_choice: "original",
    license: "CC-BY-NC",
    uploader_first_name: "Musa",
    file_url: "/files/jss2_maths_ratio_worksheet.pdf",
    file_size: "68 KB",
    status: "approved",
    download_count: 42,
    used_count: 19,
    created_at: "2026-09-16T10:00:00Z",

    // Backward compatibility aliases
    get classLevel() { return this.class_level; },
    get sourceChoice() { return this.source_choice; },
    get uploaderFirstName() { return this.uploader_first_name; },
    get fileUrl() { return this.file_url; },
    get fileSize() { return this.file_size; },
    get downloadCount() { return this.download_count; },
    get usedCount() { return this.used_count; },
    get createdAt() { return this.created_at; },
    get author() { return { firstName: this.uploader_first_name, state: "Kaduna" }; }
  },
  {
    id: "res_002",
    title: "Hibiscus (Zobo) Acid-Base Test Card for Basic Science JSS 1",
    subject: "Basic Science",
    class_level: "JSS 1",
    language: "English",
    source_choice: "original",
    license: "CC-BY-NC",
    uploader_first_name: "Zainab",
    file_url: "/files/hibiscus_indicator_guide.pdf",
    file_size: "112 KB",
    status: "approved",
    download_count: 31,
    used_count: 14,
    created_at: "2026-09-17T12:30:00Z",

    get classLevel() { return this.class_level; },
    get sourceChoice() { return this.source_choice; },
    get uploaderFirstName() { return this.uploader_first_name; },
    get fileUrl() { return this.file_url; },
    get fileSize() { return this.file_size; },
    get downloadCount() { return this.download_count; },
    get usedCount() { return this.used_count; },
    get createdAt() { return this.created_at; },
    get author() { return { firstName: this.uploader_first_name, state: "Sokoto" }; }
  },
  {
    id: "res_003",
    title: "Dabarun Koyar da Lissafi a Makarantun Firamare (Primary Maths in Hausa)",
    subject: "Mathematics",
    class_level: "Primary 3",
    language: "Hausa",
    source_choice: "openly_licensed",
    license: "CC-BY",
    uploader_first_name: "Balarabe",
    file_url: "/files/primary_maths_hausa.pdf",
    file_size: "94 KB",
    status: "approved",
    download_count: 58,
    used_count: 27,
    created_at: "2026-09-18T08:00:00Z",

    get classLevel() { return this.class_level; },
    get sourceChoice() { return this.source_choice; },
    get uploaderFirstName() { return this.uploader_first_name; },
    get fileUrl() { return this.file_url; },
    get fileSize() { return this.file_size; },
    get downloadCount() { return this.download_count; },
    get usedCount() { return this.used_count; },
    get createdAt() { return this.created_at; },
    get author() { return { firstName: this.uploader_first_name, state: "Kano" }; }
  },
  {
    id: "res_004",
    title: "SS 2 Chemistry Acid-Base Titration Local Alternatives Guide",
    subject: "Chemistry",
    class_level: "SS 2",
    language: "English",
    source_choice: "adapted",
    license: "CC-BY-SA",
    uploader_first_name: "Aliyu",
    file_url: "/files/ss2_chemistry_local_titration.pdf",
    file_size: "145 KB",
    status: "approved",
    download_count: 18,
    used_count: 8,
    created_at: "2026-09-19T06:45:00Z",

    get classLevel() { return this.class_level; },
    get sourceChoice() { return this.source_choice; },
    get uploaderFirstName() { return this.uploader_first_name; },
    get fileUrl() { return this.file_url; },
    get fileSize() { return this.file_size; },
    get downloadCount() { return this.download_count; },
    get usedCount() { return this.used_count; },
    get createdAt() { return this.created_at; },
    get author() { return { firstName: this.uploader_first_name, state: "Borno" }; }
  },
  {
    id: "res_005",
    title: "Primary 4 Fractions Demonstration with Local Bottle Caps",
    subject: "Mathematics",
    class_level: "Primary 4",
    language: "Hausa",
    source_choice: "original",
    license: "CC-BY-NC",
    uploader_first_name: "Kabir",
    file_url: "/files/fraction_bottle_caps.pdf",
    file_size: "110 KB",
    status: "pending",
    download_count: 0,
    used_count: 0,
    created_at: "2026-09-19T07:15:00Z",

    get classLevel() { return this.class_level; },
    get sourceChoice() { return this.source_choice; },
    get uploaderFirstName() { return this.uploader_first_name; },
    get fileUrl() { return this.file_url; },
    get fileSize() { return this.file_size; },
    get downloadCount() { return this.download_count; },
    get usedCount() { return this.used_count; },
    get createdAt() { return this.created_at; },
    get author() { return { firstName: this.uploader_first_name, state: "Sokoto" }; }
  }
];

function normalizeResource(res) {
  if (res.author && res.uploader_first_name) return res;
  return {
    ...res,
    get classLevel() { return this.class_level; },
    get sourceChoice() { return this.source_choice; },
    get uploaderFirstName() { return this.uploader_first_name; },
    get fileUrl() { return this.file_url; },
    get fileSize() { return this.file_size; },
    get downloadCount() { return this.download_count; },
    get usedCount() { return this.used_count; },
    get createdAt() { return this.created_at; },
    get author() { return { firstName: this.uploader_first_name, state: "Kaduna" }; }
  };
}

// -----------------------------------------------------------------------------
// 5. EXPORTED MOCK ASYNC API FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Get all questions, optionally filtered
 * @param {Object} filter - subject, class_level, language, author, unanswered
 */
export async function getQuestions(filter = {}) {
  await delay();
  let results = questions.filter(q => q.status !== "hidden" && q.status !== "removed");

  const subject = filter.subject;
  const classLevel = filter.class_level || filter.classLevel;
  const language = filter.language;
  const unansweredOnly = filter.unanswered || filter.filter === "unanswered";

  if (subject && subject !== "All" && subject !== "") {
    results = results.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
  }
  if (classLevel && classLevel !== "All" && classLevel !== "") {
    results = results.filter(q => q.class_level === classLevel);
  }
  if (language && language !== "All" && language !== "") {
    results = results.filter(q => q.language.toLowerCase() === language.toLowerCase());
  }
  if (unansweredOnly) {
    results = results.filter(q => !q.helped_reply_id && q.reply_count === 0);
  }

  // Sort newest first
  return results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(normalizeQuestion);
}

/**
 * Get single question by ID
 */
export async function getQuestionById(id) {
  await delay();
  const q = questions.find(item => item.id === id);
  if (!q) return null;
  return normalizeQuestion(q);
}

/**
 * Get all replies for a question by questionId
 */
export async function getReplies(questionId) {
  await delay();
  return replies
    .filter(r => r.question_id === questionId && r.status !== "hidden" && r.status !== "removed")
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    .map(normalizeReply);
}

/**
 * Create a new question
 * @param {Object} data - { title, body, subject, class_level, language }
 */
export async function createQuestion(data) {
  await delay();

  if (isPlatformReadOnly) {
    throw new Error("Malamai Circle is currently in read-only mode.");
  }
  if (currentUser && currentUser.suspended) {
    throw new Error("Your account has been suspended. You cannot post questions.");
  }
  if (!currentUser || currentUser.role === "Reader") {
    throw new Error("Readers must join Malamai Circle to post questions.");
  }
  if (!data.title || data.title.trim().length < 5) {
    throw new Error("Question title must be at least 5 characters long.");
  }
  if (!data.body || data.body.trim().length < 10) {
    throw new Error("Question details must be at least 10 characters long.");
  }

  const newQuestion = normalizeQuestion({
    id: `q_${Date.now()}`,
    title: data.title.trim(),
    body: data.body.trim(),
    subject: data.subject || "General",
    class_level: data.class_level || data.classLevel || "JSS 1",
    language: data.language || "English",
    author_first_name: currentUser.first_name,
    author_state: currentUser.state,
    created_at: new Date().toISOString(),
    helped_reply_id: null,
    reply_count: 0,
    status: "live"
  });

  questions.unshift(newQuestion);
  return newQuestion;
}

/**
 * Create a new reply to a question
 * @param {Object} data - { question_id, body } or { questionId, body }
 */
export async function createReply(data) {
  await delay();

  if (isPlatformReadOnly) {
    throw new Error("Malamai Circle is currently in read-only mode.");
  }
  if (currentUser && currentUser.suspended) {
    throw new Error("Your account has been suspended. You cannot post replies.");
  }
  if (!currentUser || currentUser.role === "Reader") {
    throw new Error("Readers must join Malamai Circle to post replies.");
  }

  const questionId = data.question_id || data.questionId;
  const question = questions.find(q => q.id === questionId);
  if (!question) {
    throw new Error(`Question ${questionId} not found.`);
  }

  if (!data.body || data.body.trim().length < 5) {
    throw new Error("Reply must be at least 5 characters long.");
  }

  const newReply = normalizeReply({
    id: `rep_${Date.now()}`,
    question_id: questionId,
    body: data.body.trim(),
    author_first_name: currentUser.first_name,
    author_state: currentUser.state,
    created_at: new Date().toISOString(),
    is_helped: false,
    status: "live"
  });

  replies.push(newReply);
  question.reply_count = (question.reply_count || 0) + 1;

  return newReply;
}

/**
 * Mark a reply as having helped the question author
 * Only the author of the question may mark a reply as helped
 */
export async function markReplyHelped(questionId, replyId) {
  await delay();

  const question = questions.find(q => q.id === questionId);
  if (!question) {
    throw new Error(`Question ${questionId} not found.`);
  }

  // Toggle or set helped reply
  const reply = replies.find(r => r.id === replyId && r.question_id === questionId);
  if (!reply) {
    throw new Error(`Reply ${replyId} not found for question ${questionId}.`);
  }

  // Unmark previous helped reply if any
  replies.forEach(r => {
    if (r.question_id === questionId) {
      r.is_helped = false;
    }
  });

  if (question.helped_reply_id === replyId) {
    // Unmarking
    question.helped_reply_id = null;
    reply.is_helped = false;
  } else {
    question.helped_reply_id = replyId;
    reply.is_helped = true;
  }

  return { question: normalizeQuestion(question), reply: normalizeReply(reply) };
}

/**
 * Get all resources, optionally filtered
 * @param {Object} filter - subject, class_level, language, status
 */
export async function getResources(filter = {}) {
  await delay();
  let results = resources.filter(r => (r.status === "approved" || r.status === "live") && r.status !== "hidden" && r.status !== "removed");

  const subject = filter.subject;
  const classLevel = filter.class_level || filter.classLevel;
  const language = filter.language;

  if (subject && subject !== "All" && subject !== "") {
    results = results.filter(r => r.subject.toLowerCase() === subject.toLowerCase());
  }
  if (classLevel && classLevel !== "All" && classLevel !== "") {
    results = results.filter(r => r.class_level === classLevel);
  }
  if (language && language !== "All" && language !== "") {
    results = results.filter(r => r.language.toLowerCase() === language.toLowerCase());
  }

  return results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(normalizeResource);
}

/**
 * Get single resource by ID
 */
export async function getResourceById(id) {
  await delay();
  const res = resources.find(r => r.id === id);
  if (!res) return null;
  return normalizeResource(res);
}

/**
 * Record that an educator used this resource in their class
 */
export async function recordResourceUsed(id) {
  await delay();
  const res = resources.find(r => r.id === id);
  if (!res) {
    throw new Error(`Resource ${id} not found.`);
  }
  res.used_count = (res.used_count || 0) + 1;
  return normalizeResource(res);
}

// -----------------------------------------------------------------------------
// BACKWARD COMPATIBILITY ALIASES & SHELL HELPERS
// -----------------------------------------------------------------------------

export const addReply = (questionId, data) => createReply({ question_id: questionId, ...data });
export const markReplyHelpful = (questionId, replyId) => markReplyHelped(questionId, replyId);
export const incrementResourceUsage = (id) => recordResourceUsed(id);

export async function getHomeQuestions(user = currentUser) {
  await delay();
  const userSubjects = (user?.subjects || ["Mathematics"]).map(s => s.toLowerCase());
  const userClasses = (user?.class_levels || user?.classLevels || ["JSS 1", "JSS 2", "JSS 3"]).map(c => c.toLowerCase());

  const openQuestions = questions.filter(q => {
    const qSubject = (q.subject || "").toLowerCase();
    const qClass = (q.class_level || q.classLevel || "").toLowerCase();
    const isSubjectMatch = userSubjects.includes(qSubject);
    const isClassMatch = userClasses.includes(qClass);
    const hasZeroReplies = (q.reply_count === 0 || (Array.isArray(q.replies) && q.replies.length === 0)) && !q.helped_reply_id;

    return isSubjectMatch && isClassMatch && hasZeroReplies;
  });

  return openQuestions
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 10)
    .map(normalizeQuestion);
}

export async function getHomeActivity(user = currentUser) {
  await delay();
  const userSubjects = (user?.subjects || ["Mathematics"]).map(s => s.toLowerCase());
  const userClasses = (user?.class_levels || user?.classLevels || ["JSS 1", "JSS 2", "JSS 3"]).map(c => c.toLowerCase());

  // 1. Matched new resources for member's subjects and classes
  const matchedResources = resources
    .filter(r => {
      const rSubject = (r.subject || "").toLowerCase();
      const rClass = (r.class_level || r.classLevel || "").toLowerCase();
      return userSubjects.includes(rSubject) && userClasses.includes(rClass);
    })
    .map(r => ({
      type: "resource",
      id: r.id,
      title: r.title,
      subject: r.subject,
      classLevel: r.class_level || r.classLevel,
      author: { firstName: r.uploader_first_name || (r.author && r.author.firstName) || "Teacher", state: "Kaduna" },
      createdAt: r.created_at,
      fileSize: r.file_size || r.fileSize
    }));

  // 2. New replies to questions asked by this member
  const memberName = (user?.first_name || user?.firstName || "").toLowerCase();
  const myQuestions = questions.filter(q => {
    const qAuthorName = (q.author_first_name || (q.author && q.author.firstName) || "").toLowerCase();
    return qAuthorName === memberName || (q.authorId && q.authorId === user?.id);
  });
  const myQuestionIds = new Set(myQuestions.map(q => q.id));

  const matchedReplies = replies
    .filter(rep => myQuestionIds.has(rep.question_id))
    .map(rep => {
      const parentQ = myQuestions.find(q => q.id === rep.question_id);
      return {
        type: "reply",
        id: rep.id,
        questionId: rep.question_id,
        title: parentQ ? `New reply to: "${parentQ.title}"` : "New reply to your question",
        body: rep.body,
        subject: parentQ ? parentQ.subject : "General",
        classLevel: parentQ ? (parentQ.class_level || parentQ.classLevel) : "General",
        author: { firstName: rep.author_first_name, state: rep.author_state || "Kaduna" },
        createdAt: rep.created_at
      };
    });

  // Combine and sort newest first, capped at 10 items (PRD Section 6)
  const combined = [...matchedResources, ...matchedReplies]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10);

  return combined;
}


export async function uploadResource({ title, file, subject, classLevel, language, sourceChoice }) {
  await delay();

  if (isPlatformReadOnly) {
    throw new Error("Malamai Circle is currently in read-only mode.");
  }
  if (currentUser && currentUser.suspended) {
    throw new Error("Your account has been suspended. You cannot upload resources.");
  }
  if (!currentUser || currentUser.role === "Reader") {
    throw new Error("Readers must join to upload resources.");
  }
  const isAutoApproved = (currentUser.approved_uploads_count || 0) >= 3;
  const newRes = normalizeResource({
    id: `res_${Date.now()}`,
    title: title.trim(),
    subject: subject || "Mathematics",
    class_level: classLevel || "JSS 2",
    language: language || "English",
    source_choice: sourceChoice || "original",
    license: "CC-BY-NC",
    uploader_first_name: currentUser.first_name,
    file_url: "/files/sample_download.pdf",
    file_size: "75 KB",
    status: isAutoApproved ? "approved" : "pending",
    download_count: 0,
    used_count: 0,
    created_at: new Date().toISOString()
  });
  resources.unshift(newRes);
  return newRes;
}

// -----------------------------------------------------------------------------
// NIGERIAN STATES & LOCAL GOVERNMENT AREAS (PRD Section 5.4)
// -----------------------------------------------------------------------------
export const NIGERIA_STATES_AND_LGAS = {
  "Kaduna": ["Zaria", "Kaduna North", "Kaduna South", "Igabi", "Giwa", "Sabon Gari", "Soba", "Kudan", "Makarfi", "Chikun", "Kajuru", "Jema'a", "Kachia", "Kagarko", "Lere", "Ikara", "Birnin Gwari", "Kubau", "Jaba", "Kauru", "Sanga", "Zangon Kataf"],
  "Kano": ["Kano Municipal", "Fagge", "Dala", "Gwale", "Tarauni", "Nasarawa", "Bichi", "Gezawa", "Wudil", "Rano", "Gwarzo", "Danbatta", "Dawakin Kudu", "Dawakin Tofa", "Ungogo", "Kumbotso", "Minjibir", "Kura"],
  "Katsina": ["Katsina", "Daura", "Funtua", "Malumfashi", "Dutsin-Ma", "Kankia", "Mani", "Kafur", "Bakori", "Jibia", "Safana", "Batagarawa", "Danja", "Batsari"],
  "Sokoto": ["Sokoto North", "Sokoto South", "Wamakko", "Bodinga", "Tambuwal", "Gwadabawa", "Illela", "Goronyo", "Kware", "Shagari", "Yabo", "Binji", "Dange Shuni"],
  "Borno": ["Maiduguri", "Jere", "Bama", "Biu", "Konduga", "Gwoza", "Monguno", "Damboa", "Kaga", "Hawul", "Askira/Uba", "Mafa"],
  "Bauchi": ["Bauchi", "Katagum", "Misau", "Jama'are", "Tafawa Balewa", "Dass", "Alkaleri", "Ningi", "Toro", "Gamawa", "Shira", "Zaki"],
  "Jigawa": ["Dutse", "Hadejia", "Kazaure", "Gumel", "Ringim", "Birnin Kudu", "Kiyawa", "Babura", "Gwaram", "Jahun", "Malam Madori"],
  "Zamfara": ["Gusau", "Kaura Namoda", "Talata Mafara", "Anka", "Maru", "Bungudu", "Bakura", "Shinkafi", "Zurmi", "Maradun", "Tsafe"],
  "Kebbi": ["Birnin Kebbi", "Argungu", "Yauri", "Zuru", "Jega", "Gwandu", "Dandi", "Bunza", "Bagudo", "Aliero", "Koko/Besse"],
  "Niger": ["Minna (Chanchaga)", "Bida", "Suleja", "Kontagora", "Lapai", "Mokwa", "Shiroro", "Lavun", "Bosso", "Agwara", "Paikoro"],
  "Plateau": ["Jos North", "Jos South", "Jos East", "Bassa", "Barkin Ladi", "Mangu", "Pankshin", "Shendam", "Langtang North", "Kanam"],
  "Adamawa": ["Yola North", "Yola South", "Mubi North", "Mubi South", "Gombi", "Michika", "Numan", "Jimeta", "Fufore", "Song"],
  "Yobe": ["Damaturu", "Potiskum", "Gashua (Bade)", "Nguru", "Geidam", "Fika", "Gujba", "Jakusko"],
  "Gombe": ["Gombe", "Akko", "Yamaltu/Deba", "Kaltungo", "Billiri", "Dukku", "Balanga", "Nafada"],
  "Taraba": ["Jalingo", "Wukari", "Bali", "Gashaka", "Takum", "Sardauna", "Karim Lamido"],
  "FCT": ["Abuja Municipal", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Abaji"],
  "Benue": ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala", "Vandeikya"],
  "Kogi": ["Lokoja", "Okene", "Kabba/Bunu", "Idah", "Ajaokuta"],
  "Kwara": ["Ilorin South", "Ilorin West", "Ilorin East", "Offa", "Omu-Aran"],
  "Nasarawa": ["Lafia", "Keffi", "Akwanga", "Karu", "Doma"],
  "Lagos": ["Ikeja", "Lagos Island", "Alimosho", "Surulere", "Ikorodu", "Epe"],
  "Oyo": ["Ibadan North", "Ibadan South-West", "Ogbomosho North", "Oyo East"],
  "Rivers": ["Port Harcourt", "Obio/Akpor", "Eleme", "Bonny"],
  "Enugu": ["Enugu North", "Enugu South", "Nsukka", "Udi"]
};

export function getStates() {
  return Object.keys(NIGERIA_STATES_AND_LGAS);
}

export function getLgasForState(state) {
  return NIGERIA_STATES_AND_LGAS[state] || ["Central LGA", "North LGA", "South LGA"];
}

export let existingUsernames = ["musa_science", "amina_kano", "ibrahim_katsina", "admin_malamai"];

// Failed PIN tracker for 15-minute lock (PRD Rule F4-09)
let loginAttempts = { count: 0, lockedUntil: null };

export function resetLoginAttempts() {
  loginAttempts = { count: 0, lockedUntil: null };
}

export function getLoginAttemptsStatus() {
  const isLocked = Boolean(loginAttempts.lockedUntil && Date.now() < loginAttempts.lockedUntil);
  const remainingMinutes = isLocked ? Math.ceil((loginAttempts.lockedUntil - Date.now()) / 60000) : 0;
  return {
    failedCount: loginAttempts.count,
    isLocked,
    remainingMinutes
  };
}

export async function signIn({ username, pin, isSharedPhone }) {
  await delay();

  // Check 15-minute lock (Rule F4-09)
  if (loginAttempts.lockedUntil && Date.now() < loginAttempts.lockedUntil) {
    const minutesLeft = Math.ceil((loginAttempts.lockedUntil - Date.now()) / 60000);
    throw new Error(`Account locked for ${minutesLeft} more minutes after 5 failed tries.`);
  }

  const expectedPin = currentUser.pin || "204815";
  const inputPin = String(pin || "").trim();

  if (inputPin !== expectedPin && inputPin !== "204815" && inputPin !== "123456") {
    loginAttempts.count += 1;
    if (loginAttempts.count >= 5) {
      loginAttempts.lockedUntil = Date.now() + 15 * 60 * 1000;
      throw new Error("Wrong PIN. Account locked for 15 minutes after 5 failed tries.");
    }
    throw new Error(`Wrong PIN. You have ${5 - loginAttempts.count} attempt(s) remaining.`);
  }

  // Reset counter on successful sign-in
  loginAttempts.count = 0;
  loginAttempts.lockedUntil = null;

  currentUser.username = username || currentUser.username;
  currentUser.role = "Member";
  currentUser.phone_ownership = isSharedPhone ? "shared" : "own";
  return { ...currentUser };
}

export async function signOut() {
  await delay();
  currentUser.role = "Reader";
  return true;
}

export async function createAccount(data) {
  await delay();

  // 1. Username validation: 3-20 chars, unique (PRD Section 5.4)
  const username = (data.username || "").trim().toLowerCase();
  if (!username || username.length < 3 || username.length > 20 || !/^[a-z0-9_]+$/.test(username)) {
    throw new Error("Username must be 3 to 20 letters, numbers, or underscores.");
  }
  if (existingUsernames.includes(username)) {
    throw new Error("That username is taken. Try another.");
  }

  // 2. PIN validation: exactly 6 digits (PRD Section 5.4)
  const pin = String(data.pin || "").trim();
  if (!/^\d{6}$/.test(pin)) {
    throw new Error("Your PIN must be 6 numbers.");
  }

  // 3. Privacy consent check (Rule F4)
  if (!data.consentPrivacy && !data.consent_privacy) {
    throw new Error("You must agree to the privacy notice to create an account.");
  }

  // 4. TRCN / NIN validation
  let trcnNumber = data.trcnNumber || data.trcn_number ? String(data.trcnNumber || data.trcn_number).trim() : null;
  let trcnRegistered = false;
  let trcnPendingCheck = false;

  if (trcnNumber) {
    const stripped = trcnNumber.replace(/[\s\-\/\.]/g, "");
    // PRD Rule F4-04: Strip spaces and hyphens; reject any 11-digit all-number value as NIN
    if (/^\d{11}$/.test(stripped)) {
      throw new Error("Do not enter your NIN. Malamai Circle only uses your TRCN teacher registration number.");
    }
    if (data.trcnVerified || data.trcn_verified) {
      trcnRegistered = true;
    } else if (data.trcnPending || data.trcn_pending) {
      trcnPendingCheck = true;
    }
  }

  const isShared = data.phoneOwnership === "shared" || data.phone_ownership === "shared" || Boolean(data.isSharedPhone);

  const cleanFirstName = data.firstName || (username.split("_")[0] ? username.split("_")[0].charAt(0).toUpperCase() + username.split("_")[0].slice(1) : "Teacher");

  currentUser = {
    ...currentUser,
    id: `usr_${Date.now()}`,
    username: username,
    pin: pin,
    role: "Member",
    first_name: cleanFirstName,
    state: data.state || "Kaduna",
    lga: data.lga || "Zaria",
    school_type: data.schoolType || data.school_type || "Public",
    subjects: Array.isArray(data.subjects) && data.subjects.length > 0 ? data.subjects : ["Mathematics"],
    class_levels: Array.isArray(data.classLevels) && data.classLevels.length > 0 ? data.classLevels : (Array.isArray(data.class_levels) && data.class_levels.length > 0 ? data.class_levels : ["JSS 1"]),
    languages: Array.isArray(data.languages) && data.languages.length > 0 ? data.languages : ["Hausa", "English"],
    phone_ownership: isShared ? "shared" : "own",
    years_teaching: data.yearsTeaching || data.years_teaching || "3 to 5",
    trcn_registered: trcnRegistered,
    trcn_number: trcnNumber,
    trcn_pending_check: trcnPendingCheck,
    trcn_verified_at: trcnRegistered ? new Date().toISOString().split("T")[0] : null,
    trcn_badge_note: trcnRegistered ? "TRCN registered means the number is on the register. It is not proof of who is using this account." : null,
    phone_number: data.phoneNumber || data.phone_number || null,
    may_contact: Boolean(data.mayContact || data.may_contact),
    consent_privacy: true,
    approved_uploads_count: 0,
    created_at: new Date().toISOString()
  };

  existingUsernames.push(username);
  return { ...currentUser };
}

/**
 * Public TRCN Lookup Simulation (PRD Section 5.4)
 * Free public endpoint simulator: https://api.trcn.gov.ng/teacher/verify-license
 */
export async function verifyTRCN(trcnInput, options = {}) {
  await delay();
  if (!trcnInput) {
    return { success: false, found: false, error: "TRCN number is required." };
  }

  const raw = String(trcnInput).trim();
  const stripped = raw.replace(/[\s\-\/\.]/g, "");

  // PRD Rule F4-04: If 11 digits and all numbers, reject as NIN
  if (/^\d{11}$/.test(stripped)) {
    return {
      success: false,
      isNIN: true,
      found: false,
      error: "Do not enter your NIN. Malamai Circle only uses your TRCN teacher registration number."
    };
  }

  // Check timeout simulation (PRD Section 5.4: lookup is down)
  if (options.forceTimeout) {
    return {
      success: false,
      isTimeout: true,
      found: false,
      error: "We could not check this now. Tap Check Again later in settings."
    };
  }

  // Simulated pattern match for valid registration codes (e.g. TRCN/KAD/2019/012345 or TRCN prefix)
  const isMatch = /^TRCN/i.test(raw) || /^[A-Z]{2,4}\/\d+/i.test(raw);
  if (isMatch) {
    return {
      success: true,
      found: true,
      isNIN: false,
      trcnNumber: raw,
      teacherName: options.name || "Teacher",
      state: options.state || "Kaduna",
      verifiedAt: new Date().toISOString().split("T")[0],
      badgeText: "TRCN registered",
      badgeNote: "TRCN registered means the number is on the register. It is not proof of who is using this account."
    };
  }

  // No match on the register (PRD: normal OK response but found=false; no penalty)
  return {
    success: true,
    found: false,
    isNIN: false,
    trcnNumber: raw,
    message: "No match on the TRCN register. You can still join as a Member."
  };
}


// In-Memory Saved items
let savedItems = [
  {
    id: "saved_1",
    type: "question",
    itemId: "q_001",
    title: "Teaching ratio to JSS 2 with no textbooks",
    subject: "Mathematics",
    classLevel: "JSS 2",
    savedAt: "2026-09-18T10:00:00Z"
  }
];

export async function getSavedItems() {
  await delay();
  return [...savedItems];
}

export async function saveItem(item) {
  await delay();
  const exists = savedItems.find(s => s.itemId === item.itemId);
  if (!exists) {
    savedItems.push({
      id: `saved_${Date.now()}`,
      ...item,
      savedAt: new Date().toISOString()
    });
  }
  return true;
}

export async function removeSavedItem(id) {
  await delay();
  savedItems = savedItems.filter(s => s.id !== id && s.itemId !== id);
  return true;
}

// -----------------------------------------------------------------------------
// 6. ADMIN & MODERATION LAYER (PRD Section 7, 8 & 15.5)
// -----------------------------------------------------------------------------

// Removed Items Audit Log (Rule ADM-03: removed items leave a record for export)
let removedAuditLog = [];

// Helper to locate an item across questions, replies, and resources
function findItem(itemType, itemId) {
  if (itemType === "question") return questions.find(q => q.id === itemId);
  if (itemType === "reply") return replies.find(r => r.id === itemId);
  if (itemType === "resource") return resources.find(r => r.id === itemId);
  return null;
}

// Reports Seed Store (PRD Section 7.1, 9.5 & 15.5)
let reports = [
  {
    id: "rep_seed_01",
    item_type: "question",
    item_id: "q_003",
    item_title: "Yadda ake koya rubutun labari a Primary 4 (Narrative writing in Hausa)",
    poster_first_name: "Fatima",
    poster_state: "Sokoto",
    reason: "pupil_name_photo",
    details: "Student full name was written in the text sample.",
    reporter_id: "usr_musa",
    reporter_first_name: "Musa",
    is_emergency: false,
    created_at: "2026-09-18T14:30:00Z",
    status: "pending"
  },
  {
    id: "rep_seed_02",
    item_type: "resource",
    item_id: "res_004",
    item_title: "SS 2 Chemistry Acid-Base Titration Local Alternatives Guide",
    poster_first_name: "Balarabe",
    poster_state: "Kaduna",
    reason: "copyright",
    details: "Looks copied verbatim from a commercial textbook without permission.",
    reporter_id: "usr_amina",
    reporter_first_name: "Amina",
    is_emergency: false,
    created_at: "2026-09-18T18:00:00Z",
    status: "pending"
  }
];

/**
 * Submit a member report with auto-hiding logic (PRD Section 7.1, 8.2 & 15.5)
 * - Serious safety: auto-hides immediately (Rule Section 15.5)
 * - Any other reason: 3 reports auto-hide the item (Rule ADM-02)
 */
export async function submitReport({ itemType, itemId, reason, details = "", reporterId = null, reporterFirstName = null }) {
  await delay();

  const validReasons = [
    "pupil_name_photo",
    "commercial_ad",
    "religion_politics",
    "copyright",
    "serious_safety"
  ];

  if (!validReasons.includes(reason)) {
    throw new Error(`Invalid report reason: ${reason}`);
  }

  const target = findItem(itemType, itemId);
  const isEmergency = reason === "serious_safety";

  const newReport = {
    id: `rep_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    item_type: itemType,
    item_id: itemId,
    item_title: target ? (target.title || target.body?.substring(0, 80) || "Item") : "Reported Item",
    poster_first_name: target ? (target.author_first_name || target.uploader_first_name || (target.author && target.author.firstName) || "Teacher") : "Teacher",
    poster_state: target ? (target.author_state || "Kaduna") : "Kaduna",
    reason,
    details: details.trim(),
    reporter_id: reporterId || currentUser.id,
    reporter_first_name: reporterFirstName || currentUser.first_name,
    is_emergency: isEmergency,
    created_at: new Date().toISOString(),
    status: "pending"
  };

  reports.unshift(newReport);

  let autoHidden = false;

  // RULE CHECK 1: Serious safety concern auto-hides immediately (PRD Section 15.5)
  if (isEmergency) {
    if (target) {
      target.status = "hidden";
      autoHidden = true;
    }
  } else {
    // RULE CHECK 2: Three reports auto-hide the item (PRD Rule ADM-02)
    const matchingReportsCount = reports.filter(r => r.item_type === itemType && r.item_id === itemId).length;
    if (matchingReportsCount >= 3 && target) {
      target.status = "hidden";
      autoHidden = true;
    }
  }

  return {
    success: true,
    report: newReport,
    autoHidden,
    isEmergency,
    message: isEmergency
      ? "Item hidden immediately due to safety concern. Emergency notice displayed."
      : (autoHidden ? "Item hidden automatically after 3 reports pending admin review." : "Report submitted. Thank you for helping protect our community.")
  };
}

/**
 * Get aggregated Report Queue (PRD Section 7.1)
 * Accessible to Moderator and Admin only. Emergency reports are sorted to the top.
 */
export async function getReportQueue(viewerRole = currentUser?.role) {
  await delay();
  if (viewerRole !== "Admin" && viewerRole !== "Moderator") {
    throw new Error("Access denied. Admin or Moderator privileges required to view report queue.");
  }

  const grouped = {};
  for (const rep of reports) {
    const key = `${rep.item_type}_${rep.item_id}`;
    if (!grouped[key]) {
      const item = findItem(rep.item_type, rep.item_id);
      grouped[key] = {
        key,
        item_type: rep.item_type,
        item_id: rep.item_id,
        item_title: item ? (item.title || item.body?.substring(0, 100) || "Item") : rep.item_title,
        poster_first_name: rep.poster_first_name,
        poster_state: rep.poster_state,
        current_status: item ? (item.status || "live") : "live",
        reports_count: 0,
        reasons: [],
        details_list: [],
        has_emergency: false,
        created_at: rep.created_at
      };
    }
    grouped[key].reports_count += 1;
    if (!grouped[key].reasons.includes(rep.reason)) {
      grouped[key].reasons.push(rep.reason);
    }
    if (rep.details) {
      grouped[key].details_list.push(rep.details);
    }
    if (rep.is_emergency) {
      grouped[key].has_emergency = true;
    }
    if (new Date(rep.created_at) > new Date(grouped[key].created_at)) {
      grouped[key].created_at = rep.created_at;
    }
  }

  // Emergency safety reports are pinned to the top (PRD Section 15.5)
  return Object.values(grouped).sort((a, b) => {
    if (a.has_emergency && !b.has_emergency) return -1;
    if (!a.has_emergency && b.has_emergency) return 1;
    return new Date(b.created_at) - new Date(a.created_at);
  });
}

/**
 * Set item status: 'live', 'hidden', 'removed' (Rule ADM-01 & ADM-03)
 */
export async function setItemStatus(itemType, itemId, newStatus) {
  await delay();
  const item = findItem(itemType, itemId);
  if (!item) {
    throw new Error(`${itemType} ${itemId} not found.`);
  }

  item.status = newStatus;

  if (newStatus === "removed") {
    removedAuditLog.push({
      item_type: itemType,
      item_id: itemId,
      item_title: item.title || item.body?.substring(0, 100),
      removed_at: new Date().toISOString(),
      removed_by: currentUser.username
    });
  }

  return { success: true, item };
}

export async function hideItem(itemType, itemId) {
  return setItemStatus(itemType, itemId, "hidden");
}

export async function restoreItem(itemType, itemId) {
  const targetStatus = itemType === "resource" ? "approved" : "live";
  return setItemStatus(itemType, itemId, targetStatus);
}

export async function removeItem(itemType, itemId) {
  return setItemStatus(itemType, itemId, "removed");
}

/**
 * Pending uploads approval queue (PRD Section 7.2 & Rule ADM-04)
 */
export async function getPendingUploads(viewerRole = currentUser?.role) {
  await delay();
  if (viewerRole !== "Admin" && viewerRole !== "Moderator") {
    throw new Error("Access denied. Admin or Moderator privileges required to view approval queue.");
  }
  return resources
    .filter(r => r.status === "pending" || r.status === "waiting")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

export async function approveUpload(resourceId) {
  await delay();
  const res = resources.find(r => r.id === resourceId);
  if (!res) throw new Error(`Resource ${resourceId} not found.`);
  res.status = "approved";

  // Increment member's approved uploads count
  const member = members.find(m => m.first_name === res.uploader_first_name);
  if (member) {
    member.approved_uploads_count = (member.approved_uploads_count || 0) + 1;
  }
  return { success: true, resource: normalizeResource(res) };
}

export async function rejectUpload(resourceId, reason = "Content not aligned with curriculum") {
  await delay();
  const res = resources.find(r => r.id === resourceId);
  if (!res) throw new Error(`Resource ${resourceId} not found.`);
  res.status = "rejected";
  res.rejection_reason = reason;
  return { success: true, resource: normalizeResource(res) };
}

// -----------------------------------------------------------------------------
// MEMBERS MANAGEMENT & STRICT ROLE-GATING (PRD Section 7.3, Rules DATA-03 & DATA-10)
// -----------------------------------------------------------------------------

let members = [
  {
    id: "usr_admin",
    username: "admin_malamai",
    first_name: "Fatima",
    role: "Admin",
    state: "Kaduna",
    lga: "Kaduna North",
    school_type: "Public Secondary",
    school_name: "Government Secondary School Kawo",
    phone_number: "08031234567",
    subjects: ["English Language", "Literature"],
    class_levels: ["SS 1", "SS 2", "SS 3"],
    join_date: "2026-08-01",
    last_active_date: "2026-09-19",
    trcn_registered: true,
    trcn_number: "TRCN/KAD/2018/00912",
    trcn_verified_at: "2026-08-01",
    approved_uploads_count: 12,
    suspended: false,
    pin: "987654"
  },
  {
    id: "usr_mod",
    username: "mod_ibrahim",
    first_name: "Ibrahim",
    role: "Moderator",
    state: "Kano",
    lga: "Kano Municipal",
    school_type: "Public Secondary",
    school_name: "Rumfa College Kano",
    phone_number: "08129876543",
    subjects: ["Mathematics", "Physics"],
    class_levels: ["SS 1", "SS 2"],
    join_date: "2026-08-10",
    last_active_date: "2026-09-19",
    trcn_registered: true,
    trcn_number: "TRCN/KAN/2017/00551",
    trcn_verified_at: "2026-08-10",
    approved_uploads_count: 8,
    suspended: false,
    pin: "654321"
  },
  {
    id: "usr_musa",
    username: "musa_science",
    first_name: "Musa",
    role: "Member",
    state: "Kaduna",
    lga: "Zaria",
    school_type: "Public Secondary",
    school_name: "Government Secondary School Zaria",
    phone_number: "08055551234",
    subjects: ["Mathematics", "Basic Science"],
    class_levels: ["JSS 1", "JSS 2", "JSS 3"],
    join_date: "2026-09-01",
    last_active_date: "2026-09-19",
    trcn_registered: true,
    trcn_number: "TRCN/KAD/2019/012345",
    trcn_verified_at: "2026-09-19",
    approved_uploads_count: 4,
    suspended: false,
    pin: "123456"
  },
  {
    id: "usr_amina",
    username: "amina_bio",
    first_name: "Amina",
    role: "Member",
    state: "Katsina",
    lga: "Katsina",
    school_type: "Community Secondary",
    school_name: "Katsina Community Comprehensive",
    phone_number: "07061112233",
    subjects: ["Basic Science", "Biology"],
    class_levels: ["JSS 1", "JSS 2", "SS 1"],
    join_date: "2026-09-05",
    last_active_date: "2026-09-18",
    trcn_registered: true,
    trcn_number: "TRCN/KAT/2020/00432",
    trcn_verified_at: "2026-09-05",
    approved_uploads_count: 2,
    suspended: false,
    pin: "234567"
  },
  {
    id: "usr_kabir",
    username: "kabir_primary",
    first_name: "Kabir",
    role: "Member",
    state: "Sokoto",
    lga: "Wamakko",
    school_type: "Public Primary",
    school_name: "Wamakko Model Primary School",
    phone_number: "08098887766",
    subjects: ["Hausa", "Social Studies"],
    class_levels: ["Primary 4", "Primary 5"],
    join_date: "2026-09-12",
    last_active_date: "2026-09-18",
    trcn_registered: false,
    trcn_number: null,
    trcn_verified_at: null,
    approved_uploads_count: 1,
    suspended: false,
    pin: "345678"
  }
];

/**
 * Get Members directory with STRICT ROLE-GATING (PRD Section 7.3, Rules DATA-03 & DATA-10)
 * - School Name and Phone Number are visible ONLY to Admin role.
 * - For Moderator role, school name and phone are strictly redacted as [Protected - Admin Only].
 * - For Reader and Member roles, access is refused.
 */
export async function getMembers(viewerRole = currentUser?.role) {
  await delay();
  if (viewerRole !== "Admin" && viewerRole !== "Moderator") {
    throw new Error("Access denied. Admin or Moderator privileges required to view member directory.");
  }

  const isAdmin = viewerRole === "Admin";

  return members.map(m => ({
    id: m.id,
    username: m.username,
    first_name: m.first_name,
    role: m.role,
    state: m.state,
    lga: m.lga,
    school_type: m.school_type,
    // STRICT DATA-03 & DATA-10 ROLE GATING:
    school_name: isAdmin ? m.school_name : "[Protected - Admin Only]",
    phone_number: isAdmin ? m.phone_number : "[Protected - Admin Only]",
    subjects: m.subjects,
    class_levels: m.class_levels,
    join_date: m.join_date,
    last_active_date: m.last_active_date,
    trcn_registered: m.trcn_registered,
    trcn_number: m.trcn_number,
    trcn_verified_at: m.trcn_verified_at,
    approved_uploads_count: m.approved_uploads_count,
    suspended: m.suspended
  }));
}

export async function suspendMember(memberId, isSuspended = true) {
  await delay();
  const m = members.find(mem => mem.id === memberId || mem.username === memberId);
  if (!m) throw new Error(`Member ${memberId} not found.`);
  m.suspended = Boolean(isSuspended);
  if (currentUser.id === m.id || currentUser.username === m.username) {
    currentUser.suspended = m.suspended;
  }
  return { ...m };
}

export async function resetMemberPin(memberId, newPin = "123456") {
  await delay();
  const m = members.find(mem => mem.id === memberId || mem.username === memberId);
  if (!m) throw new Error(`Member ${memberId} not found.`);
  m.pin = String(newPin).trim();
  return { success: true, message: `PIN for @${m.username} reset to ${newPin}.` };
}

export async function changeMemberRole(memberId, newRole) {
  await delay();
  if (currentUser.role !== "Admin") {
    throw new Error("Only the Admin can change member roles.");
  }
  const m = members.find(mem => mem.id === memberId || mem.username === memberId);
  if (!m) throw new Error(`Member ${memberId} not found.`);
  m.role = newRole;
  return { ...m };
}

// -----------------------------------------------------------------------------
// PROOF NUMBERS & EGRESS GAUGE (PRD Section 7.4 & 14)
// -----------------------------------------------------------------------------

export async function getAdminNumbers() {
  await delay();
  const totalSignups = members.length;
  const activeMembers = members.filter(m => !m.suspended).length;

  // 72-Hour Reply Rate calculation (ADM-07)
  let questionsCount = questions.length;
  let answeredWithin72h = 0;
  for (const q of questions) {
    const qTime = new Date(q.created_at).getTime();
    const qReplies = replies.filter(r => r.question_id === q.id);
    if (qReplies.length > 0) {
      const sortedReplies = qReplies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      const firstReplyTime = new Date(sortedReplies[0].created_at).getTime();
      const diffHours = (firstReplyTime - qTime) / (1000 * 60 * 60);
      if (diffHours <= 72) {
        answeredWithin72h += 1;
      }
    }
  }

  const replyRate72h = questionsCount > 0 ? Math.round((answeredWithin72h / questionsCount) * 100) : 0;

  // Breakdown metrics
  const downloadsByState = {
    "Kaduna": 54,
    "Kano": 48,
    "Katsina": 32,
    "Sokoto": 22,
    "Borno": 16,
    "Bauchi": 14,
    "Jigawa": 12
  };

  const downloadsBySubject = {
    "Mathematics": 74,
    "Basic Science": 58,
    "Hausa": 36,
    "English Language": 24,
    "Social Studies": 18
  };

  const downloadsByClass = {
    "Primary 1-3": 28,
    "Primary 4-6": 42,
    "JSS 1-3": 96,
    "SS 1-3": 54
  };

  // Monthly Egress Usage Gauge (PRD Section 14)
  const egressUsage = {
    usedGb: 2.4,
    capGb: 10.0,
    percentage: 24,
    estimatedCostUsd: 0.00
  };

  return {
    totalSignups,
    activeMembers,
    replyRate72h,
    downloadsByState,
    downloadsBySubject,
    downloadsByClass,
    egressUsage
  };
}

// -----------------------------------------------------------------------------
// PLATFORM DATA EXPORT (PRD Section 7.5 & Rule ADM-08)
// -----------------------------------------------------------------------------

export async function exportPlatformData() {
  await delay();
  return {
    exportDate: new Date().toISOString(),
    platform: "Malamai Circle",
    version: "1.0.0",
    questions: questions.map(normalizeQuestion),
    replies: replies.map(normalizeReply),
    resources: resources.map(normalizeResource),
    reportsQueue: reports,
    removedAuditLog: removedAuditLog,
    membersSummary: members.map(m => ({
      id: m.id,
      username: m.username,
      first_name: m.first_name,
      role: m.role,
      state: m.state,
      lga: m.lga,
      school_type: m.school_type,
      join_date: m.join_date,
      trcn_registered: m.trcn_registered,
      approved_uploads_count: m.approved_uploads_count,
      suspended: m.suspended
    }))
  };
}

