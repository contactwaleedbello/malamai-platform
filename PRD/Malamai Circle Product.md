# **Malamai Circle: Product Requirements Document, Version One**

## **1\. Summary and goal**

Malamai Circle is a free web app for primary and secondary school teachers in Northern Nigeria. **\[STATED\]** A teacher asks a classroom question, another teacher answers, and the answer stays sorted by subject and class level so a third teacher finds it later. **\[STATED\]** Teachers also share lesson plans and worksheets on a resource shelf. **\[STATED\]** An installable web app means a website a person adds to the phone's home screen, which keeps working when the connection drops. **\[STATED\]** The app is built for weak connections and shared phones. **\[STATED\]**

**Audience boundary (revised).** Version one serves teachers who have at least shared smartphone access. Teachers with no smartphone access at all are out of scope for version one. A web app needs a browser, so the fully offline or feature-phone teacher cannot be served yet. State this plainly to any funder. **\[ASSUMED A11\]**

Version one does four things: ask and answer, a resource shelf, save to this phone, and join with an optional teacher-registration check. **\[STATED\]** It sends no message by itself, has no artificial intelligence feature, has no private messages, no points, no search box, and no store app. **\[STATED\]** Nobody pays for anything. **\[STATED\]**

Three statements that would prove it worked, all within 90 days of launch. These are guesses, to be tested, not research findings. **\[ASSUMED A10\]**

1. At least 6 in 10 questions get a reply within 72 hours.  
2. At least 3 in 10 members return in their fourth week. **This is the highest-risk assumption in the whole plan (see section 6).**  
3. Members come from at least 10 schools in at least 2 states, and at least one teacher says a resource changed a lesson.

Two facts block launch until you clear them. **First, the database.** The free Supabase database pauses after 7 days idle, and no web host changes that, so a free-only launch is not yet proven (section 14). **\[OPEN A8\]** **Second, the data law.**The app handles teachers' personal data, and Nigerian data law may require you to register (section 15). **\[OPEN A7\]**

---

## **2\. Users, roles and permissions**

### **2.1 The person, as a composite**

Musa teaches Basic Science and Mathematics in JSS 1 to 3 at a rural public school. He is the only science teacher there. He shares one Android phone with two colleagues. He buys data in small bundles and often has no signal at school. **\[STATED\]**

**This person is a composite, not a real interview. He is untested. Test him with real teachers before you trust any line above.** **\[STATED\]**

Expected use: two or three visits a week, 5 to 10 minutes each, in the evening or at the weekend. This is a guess and the first thing to test. **\[STATED\]**

### **2.2 Who version one does not serve**

* Pupils. The app is for teachers only. **\[STATED\]**  
* Teachers with no smartphone access at all, even shared. This is a real scope limit, stated in section 1\. **\[ASSUMED A11\]**  
* Teachers who read and write neither Hausa nor English. **\[ASSUMED A1\]**  
* Parents, officials and the public, except as Readers of open content. **\[ASSUMED A11\]**

### **2.3 Roles**

Four roles. The teacher-registration badge is a mark, not a role. There is no "expert" or "top answerer" role. **\[STATED\]**

* **Reader.** No account. **\[STATED\]**  
* **Member.** Has an account. **\[STATED\]**  
* **Moderator.** Given by the admin. In version one, the admin is the moderator (see section 7, revised). **\[STATED plus A4\]**  
* **Admin.** Runs settings and gives roles. You own and hold this role personally. **\[ASSUMED A5\]**

### **2.4 Permissions table**

"TRCN" is the Teachers Registration Council of Nigeria, the government body that registers teachers. A tick means allowed.

| Action | Reader | Member | Moderator | Admin |
| ----- | ----- | ----- | ----- | ----- |
| Read questions and replies | Tick | Tick | Tick | Tick |
| Read and download resources | Tick | Tick | Tick | Tick |
| Open a Share link | Tick | Tick | Tick | Tick |
| Post a question | Cross | Tick | Tick | Tick |
| Post a reply | Cross | Tick | Tick | Tick |
| Tap "This helped" on own question | Cross | Tick | Tick | Tick |
| Tap "Report" | Cross | Tick | Tick | Tick |
| Upload a resource | Cross | Tick (first 3 held for review) | Tick | Tick |
| Tap "I used this" | Cross | Tick | Tick | Tick |
| Save to this phone | Cross | Tick | Tick | Tick |
| Enter or recheck a TRCN number | Cross | Tick (own only) | Tick (own only) | Tick (own only) |
| See the report queue | Cross | Cross | Tick | Tick |
| Hide, restore or remove a flagged item | Cross | Cross | Tick | Tick |
| Approve a held upload | Cross | Cross | Tick | Tick |
| Suspend a member | Cross | Cross | Tick | Tick |
| Reset a member PIN | Cross | Cross | Tick | Tick |
| Give or remove a role | Cross | Cross | Cross | Tick |
| See the Numbers screen | Cross | Cross | Tick | Tick |
| Export everything | Cross | Cross | Cross | Tick |
| Switch the site to read-only | Cross | Cross | Cross | Tick |
| See admin-only fields (school name, phone) | Cross | Cross | Cross | Tick |

**\[STATED for the row set; ASSUMED A12 for the admin-only split.\]** Only the admin sees school name and phone. A moderator does not, so the fewest people sit near the most sensitive fields.

### **2.5 Shared-phone notes**

* A member signs in with a username and a 6 digit PIN, a short number code. **\[STATED\]**  
* At sign-in the person can tick "This is a shared phone," which signs them out after a short idle time. **\[STATED\]**  
* Saved items belong to the signed-in member and clear at sign-out. **\[STATED\]**  
* The app never fills the PIN in for the person and never remembers it on the device. **\[ASSUMED A13\]**

---

## **3\. Problem and evidence**

### **3.1 The scene**

It is Sunday evening. Musa must teach ratio on Monday to 80 pupils. There are no textbooks. Half the class follows Hausa better than English. He asks in a WhatsApp group. By morning there are forty messages about other things. One reply links to a video he cannot afford to load. He teaches from memory, gets it wrong, and the class falls behind. A teacher in another school solved this in March. Musa never sees that answer, because it sits in a chat he was never in. He loses an evening, part of a small data bundle, and some trust in himself and in his tools. **\[STATED\]**

### **3.2 The facts, with sources attached (revised)**

Draft 1 marked these unverified. They are now sourced. One figure keeps a date caveat.

| Fact | Source | Date checked |
| ----- | ----- | ----- |
| Only 39% of people in rural Nigeria have a smartphone, against 73% in cities. | GSMA 2024 mobile internet work, reported by TechCabal. | 19 Sep 2026 **\[STATED, now sourced\]** |
| In the north-east, the average is about 124 pupils per teacher. | Global Partnership for Education briefing, reported by Voice of Nigeria. | 19 Sep 2026 **\[STATED, now sourced\]** |
| In the north-east, only about 29% of schools have teachers with the minimum qualification. | Same Global Partnership for Education briefing. | 19 Sep 2026 **\[STATED, now sourced\]** |
| Many government primary schools in the north have no more than one teacher. | UBEC head Hamid Bobboyi, reported in 2022\. | 19 Sep 2026 **\[STATED, now sourced\]** |
| A Sokoto state committee found a large share of teachers unqualified and unregistered. | Sokoto state committee, reported by The Cable and the ICIR. | 19 Sep 2026 **\[STATED, now sourced\]** |
| In an old Sokoto survey, 90% of surveyed teachers had no training in the past three years. | Stated in the brief as an old survey. | Date uncertain. Keep flagged. **\[STATED, date uncertain\]** |

The marketing site (section 11\) may use every sourced row. It must hold back the last row until you attach a clear year.

---

## **4\. Scope**

### **4.1 In scope**

**Four member features. This is the hard cap. Admin screens and the marketing site do not count.** **\[STATED\]**

* F1. Ask and answer.  
* F2. Resource shelf.  
* F3. Save to this phone.  
* F4. Join, with an optional TRCN check.

**Five admin screens.** **\[STATED\]** Report queue, approval queue, members, numbers, export and read-only switch.

**One marketing page**, in Hausa and English. **\[STATED\]**

### **4.2 Out of scope: the cut list**

Each cut on purpose. **\[STATED\]** Private messages; likes, points and leaderboards; notifications and email digests; a search box; voice notes and video; school groups; certificates and TRCN credit; star ratings; any AI feature.

### **4.3 Not yet: the must-not-do list for version one**

**\[STATED\]** Automated messages, reminders or digests; AI answers, summaries or translation; voice, video or live chat; private messages or school groups; certificates or TRCN credit; payments or ads; store apps; leaderboards or points; a search box; posting while offline (drafts only).

### **4.4 Proposed but not included**

Not in version one. Listed so they stay out of scope. **\[ASSUMED A15\]**

* A duplicate-question hint at posting time. Fights the "nobody comes back" risk. Close to a search box, so it waits.  
* A one-tap "Copy this reply as plain text" button. Low cost, still an addition. Waits.

I recommend neither for version one. Four features is the cap.

---

## **5\. Feature specifications**

Column meaning. **Type** is the kind of data. **Required** says whether the person must fill it. **Limit** is the size or range rule. Each feature ends with pass-or-fail checks.

### **5.1 F1. Ask and answer**

**Purpose.** A member posts a classroom question. Others reply. The question stays sorted by subject and class, so a later teacher finds it. **\[STATED\]**

**User stories.**

* As a member, I post a question in Hausa or English so a colleague can help. **\[STATED\]**  
* As a member, I reply to a question in my subject. **\[STATED\]**  
* As the asker, I tap "This helped" on the one reply that worked. **\[STATED\]**  
* As a reader with no account, I read questions and replies. **\[STATED\]**

**Screens.** Subject and class board; single question with replies; ask form; reply box.

**Flow, ask.** 1\. Tap "Ask a question." 2\. Type a title and body. 3\. Pick one subject, one class level, one language. 4\. Tap "Post." 5\. It shows at the top of that board. 6\. On a dropped connection, the text stays a draft on the phone until "Post" succeeds. **\[STATED\]**

**Flow, reply.** 1\. Open a question. 2\. Type a reply. 3\. Tap "Send reply." 4\. It appears under the question. 5\. On a drop, the reply stays a draft with "Retry." **\[STATED\]**

**Flow, mark helpful.** Only the asker sees "This helped." Only one reply holds it. The asker can move it. **\[ASSUMED A16\]**

**Field list, question.**

| Field | Type | Required | Limit | Example |
| ----- | ----- | ----- | ----- | ----- |
| Title | Short text | Yes | 10 to 120 characters | "Teaching ratio to JSS 2 with no textbooks" |
| Body | Long text | Yes | 20 to 1000 characters | "Half my class follows Hausa better..." |
| Subject | Pick one | Yes | 1 choice | "Basic Science" |
| Class level | Pick one | Yes | Primary 1 to 6, JSS 1 to 3, SS 1 to 3 | "JSS 2" |
| Language | Pick one | Yes | Hausa or English | "English" |

**\[STATED for fields; ASSUMED A16 for limits.\]**

**Field list, reply.** Body: long text, required, 10 to 1000 characters. **\[ASSUMED A16 for limits.\]**

**Rules.**

* F1-01. A reader reads without an account. A member writes. **\[STATED\]**  
* F1-02. Each post shows only a first name, subject and state. Never a surname, phone, school name or exact location. **\[STATED\]**  
* F1-03. Filters: subject, class, language, "Still needs an answer." **\[STATED\]**  
* F1-04. A question with no reply after 7 days gets the "Still needs an answer" tag on one page. No message goes out. **\[STATED\]**  
* F1-05. Every thread shows "Teachers' advice, not official guidance." **\[STATED\]**  
* F1-06. Science subject pages show a fixed safety note (section 8). **\[STATED\]**  
* F1-07. No search box. Filters only. **\[STATED\]**

**Empty state.** "No questions here yet. Be the first to ask." **\[ASSUMED A17\]** **Error state.** "That did not send. We kept your text. Tap Retry." **\[ASSUMED A17\]** **Half-finished state.** An unsent post shows "Draft, not posted" and stays on the phone. **\[STATED\]**

**On-screen wording (English first; Hausa drafts need native review).**

* "Ask a question" / "Yi tambaya" (draft).  
* "Send reply" / "Aika amsa" (draft).  
* "This helped" / "Wannan ya taimaka" (draft).  
* "Still needs an answer" / "Yana bukatar amsa" (draft).

**Acceptance criteria.**

* \[ \] A reader opens a board and a question without signing in.  
* \[ \] A member posts a full question; it appears at the top of the right board.  
* \[ \] A question missing a required field cannot post, and the app names the field.  
* \[ \] Only the asker sees "This helped," and only one reply holds it.  
* \[ \] A question with no reply shows "Still needs an answer" after 7 days.  
* \[ \] Every thread shows "Teachers' advice, not official guidance."  
* \[ \] A dropped connection leaves a draft, not a half-posted question.

### **5.2 F2. Resource shelf**

**Purpose.** A member uploads a lesson plan or worksheet. Others download it. Each file shows where it came from. **\[STATED\]**

**Screens.** Shelf; single resource page; upload form.

**Flow, upload.** 1\. Tap "Add a resource." 2\. Pick one file: PDF or picture, under 2 MB. 3\. Fill title, subject, class, language. 4\. Pick one source choice. 5\. Tap "Upload." 6\. First three uploads wait for a moderator and show "Waiting for review." After three approvals, later uploads go live at once. 7\. A failed upload shows "Retry" and lists no partial file. **\[STATED\]**

**Flow, use.** Filter, open, download, tap "I used this." Counts rise. **\[STATED\]**

**Field list, upload.**

| Field | Type | Required | Limit | Example |
| ----- | ----- | ----- | ----- | ----- |
| File | PDF or image | Yes | Under 2 MB | A one-page worksheet |
| Title | Short text | Yes | 10 to 120 characters | "Ratio worksheet, JSS 2" |
| Subject | Pick one | Yes | Fixed list | "Mathematics" |
| Class level | Pick one | Yes | Primary 1 to SS 3 | "JSS 2" |
| Language | Pick one | Yes | Hausa or English | "English" |
| Source choice | Pick one | Yes | 3 choices below | "I made this" |

**\[STATED.\]**

**Rules.**

* F2-01. PDF and image only, under 2 MB. Anything else refused with a clear message. **\[STATED\]**  
* F2-02. Source choice at upload: "I made this," "Openly licensed (credit and link)," or "Official document (link only, no file)." **\[STATED\]**  
* F2-03. "Openly licensed" needs a credit line and a link. "Official document" takes a link only, no file. **\[STATED\]**  
* F2-04. A teacher-made file defaults to a "credit required" Creative Commons licence. A Creative Commons licence is a public permission to reuse a work under set terms. "Credit required" means others may reuse it if they name the maker. **\[STATED\]**  
* F2-05. The file page shows source, licence and upload date. **\[STATED\]**  
* F2-06. A new member's first three uploads wait for a moderator. **\[STATED\]**  
* F2-07. A moderator removes a file on complaint. A complaints email sits in the footer. **\[STATED\]**  
* F2-08. No star ratings. "I used this" counts stand in. **\[STATED\]**

**Empty state.** "Nothing here yet for this filter. Want to ask instead?" with a button that opens the Ask form carrying the same subject and class. **\[STATED\]** **Error state.** "That file is over 2 MB. Please upload a smaller PDF or picture." **\[ASSUMED A17\]** **Half-finished state.** A failed upload shows "Retry" and lists no partial file. **\[STATED\]**

**On-screen wording.** "Add a resource" / "Ƙara kayan aiki" (draft). "I used this" / "Na yi amfani da wannan" (draft). "Waiting for review" / "Ana jiran dubawa" (draft).

**Acceptance criteria.**

* \[ \] A member uploads a 1 MB PDF with all fields; it appears, or waits if it is one of the first three.  
* \[ \] A 5 MB file is refused with a clear message.  
* \[ \] A non-PDF, non-image file is refused.  
* \[ \] The source choice is required, and the file page shows it.  
* \[ \] "I used this" raises the count by one per member per file.  
* \[ \] A reader downloads without an account.  
* \[ \] A failed upload leaves no half-listed file.

### **5.3 F3. Save to this phone**

**Purpose.** A member saves a question thread or a resource to read with no connection. **\[STATED\]**

**Flow.** Tap "Save." The app keeps a copy in the phone's browser storage. It shows under "Saved" and opens offline. On a shared phone, saved items clear at sign-out. **\[STATED\]**

**Rules.**

* F3-01. Saved items live in the phone's browser storage, not on the server. **\[STATED\]**  
* F3-02. Saved items belong to the signed-in member and clear at sign-out on a shared phone. **\[STATED\]**  
* F3-03. A saved file is kept within the browser's storage limit. If the phone refuses it, the app says so. **\[ASSUMED A18\]**

**Empty state.** "You have not saved anything yet. Tap Save on a question or a resource." **\[ASSUMED A17\]** **Error state.**"This phone could not save the file. You can still open it online." **\[ASSUMED A18\]** **Half-finished state.** A part-saved file does not show as saved. Save fully or not at all. **\[ASSUMED A18\]**

**On-screen wording.** "Save" / "Ajiye" (draft). "Saved" / "An ajiye" (draft).

**Acceptance criteria.**

* \[ \] A saved thread opens in airplane mode.  
* \[ \] Sign-out on a shared phone clears the Saved list.  
* \[ \] A file too big for browser storage fails with a clear message, not a crash.

**Note.** Browser storage is not a safe long-term store. A browser can clear it when the phone runs low on space. The server keeps the original. "Saved" is a convenience only. **\[ASSUMED A18\]**

### **5.4 F4. Join, with an optional TRCN check**

**Purpose.** A person creates a member account. They may enter a TRCN registration number to earn a "TRCN registered" badge. The check is optional and is a badge, not a gate. **\[STATED\]**

**Flow, join.** 1\. Tap "Join." 2\. Set a username and a 6 digit PIN. 3\. Pick role, state, local government area, school type, subjects, class levels, languages used in class, phone shared or own, years teaching in bands. 4\. Optionally enter a TRCN registration number. 5\. Optionally add a phone and tick "you may contact me." 6\. Tick consent to the privacy notice. 7\. Tap "Create account." 8\. A Member account is created at once, with or without the TRCN number. **\[STATED\]**

**Flow, TRCN check.** If a number was entered, a server function (code that runs on the host, not the phone) calls the TRCN public lookup. On a match, the app stores the result and date and shows the badge. On no match, no badge and no penalty. If the lookup is down, the app says "We could not check this now" and finishes the join as a Member. The person taps "Check again" later. **\[STATED\]**

**What the lookup is.** The TRCN Teacher Verification API is a free public endpoint that needs no key, at `https://api.trcn.gov.ng/teacher/verify-license`. It takes one search term and returns a JSON result with a `found` field (true or false), the teacher's name, state and status, and a `verifiedAt` time. Checked 19 September 2026\. It returns a normal "OK" even with no match, so the app must read `found`, not the response status. **\[STATED plus confirmed.\]**

**Field list, join.**

| Field | Type | Required | Limit | Example |
| ----- | ----- | ----- | ----- | ----- |
| Username | Short text | Yes | 3 to 20 characters, unique | "musa\_science" |
| PIN | 6 digits | Yes | Exactly 6 digits | "204815" |
| State | Pick one | Yes | 36 states and FCT | "Kaduna" |
| Local government area | Pick one | Yes | List for the chosen state | "Zaria" |
| School type | Pick one | Yes | Public, private, community, Islamiyya | "Public" |
| Subjects | Pick one or more | Yes | Fixed list | "Basic Science, Mathematics" |
| Class levels | Pick one or more | Yes | Primary 1 to SS 3 | "JSS 1, JSS 2, JSS 3" |
| Languages used in class | Pick one or more | Yes | Hausa, English, others | "Hausa, English" |
| Phone: own or shared | Pick one | Yes | Own or shared | "Shared" |
| Years teaching | Pick one band | Yes | 0 to 2, 3 to 5, 6 to 10, 11+ | "3 to 5" |
| TRCN registration number | Short text | No | As on the register | "TRCN/KAD/2019/012345" |
| Phone number | Short text | No | Nigerian format | "0803..." |
| "You may contact me" tick | Yes or no | No | Default no | "Yes" |
| Consent to privacy notice | Tick | Yes | Must be ticked to join | Ticked |

**\[STATED for the set; ASSUMED A16 for username, PIN and years bands.\]**

**Rules.**

* F4-01. Account creation never waits on the TRCN check. **\[STATED\]**  
* F4-02. The app uses only the registration number for the badge. **\[STATED\]**  
* F4-03. The app never asks for a NIN (the 11 digit National Identification Number), an ID scan or payment details. **\[STATED\]**  
* F4-04 (revised). The same TRCN endpoint also accepts a NIN. **Strip spaces and separators from the entry, then reject any value that is 11 digits and all numbers.** Never store a NIN even if typed. Confirmed from the endpoint description. **\[ASSUMED A19\]**  
* F4-05. The badge shows the register match. It is not proof of identity. Show this in plain words near the badge. **\[STATED\]**  
* F4-06. Nothing rechecks by itself. A member taps "Check again." **\[STATED\]**  
* F4-07. The app stores only the check result, the state and status returned, and the date. **\[ASSUMED A19\]**  
* F4-08. A forgotten PIN resets by optional email if given, or by a moderator if not. **\[STATED\]**  
* F4-09. A wrong PIN locks the account after 5 tries for 15 minutes. Handled by the sign-in system, not hand-written code (see section 14). **\[ASSUMED A13\]**

**Error state.** "That username is taken. Try another." "Your PIN must be 6 numbers." **\[ASSUMED A17\]** **Half-finished state.** On a drop during join, typed fields stay on the phone. The account is created only when "Create account" succeeds. If only the TRCN lookup failed, the account still exists as a Member. **\[STATED\]**

**On-screen wording.** "Join" / "Shiga" (draft). "Create account" / "Buɗe asusu" (draft). "Check again" / "Sake dubawa" (draft). Near the badge: "TRCN registered. This shows the number is on the register. It is not proof of who is using this account." (draft). "We could not check this now" / "Ba mu iya dubawa yanzu ba" (draft).

**Acceptance criteria.**

* \[ \] A person joins with only required fields and no TRCN number, and becomes a Member.  
* \[ \] A valid TRCN number returns a match and shows the badge (test a real number you control first).  
* \[ \] A wrong TRCN number shows no badge and no blocking error.  
* \[ \] With the lookup off, the join still finishes as a Member.  
* \[ \] An 11 digit all-number entry, with or without spaces, is refused, and no NIN is stored.  
* \[ \] The badge shows the "not proof of identity" line next to it.  
* \[ \] Five wrong PINs lock the account for 15 minutes.

---

## **6\. Home screen and return loop**

**Purpose.** Bring a member back with no task in mind and no reminder message. **\[STATED\]**

**This is the largest untested bet in the whole plan (revised).** The product has no notifications and no reminders. It bets that the home screen alone pulls a member back. If that bet fails, the retention target in section 18 fails with it. Treat this as the highest-risk assumption, not an ordinary one.

**The two lists.**

**List one: "Questions in my subject that still need an answer."**

* Questions where the subject and class match the member's, with no reply yet. **\[STATED plus A16 for the match rule.\]**  
* Newest first. Up to 10, with "See more." **\[ASSUMED A16\]**  
* Empty state: "No open questions in your subjects right now. You can browse other subjects." **\[ASSUMED A17\]**

**List two: "New for \[the member's class and subject\]."**

* Resources uploaded for a subject and class the member teaches, plus new replies to the member's own questions. **\[STATED\]**  
* Newest first. Up to 10, with "See more." **\[ASSUMED A16\]**  
* Empty state: "Nothing new for your classes yet. Check the shelf or ask a question." **\[ASSUMED A17\]**

**Rules.**

* HOME-01. No message, push or email ever drives a return. The home screen is the only pull. **\[STATED\]**  
* HOME-02. Both lists read from the member's profile, so they need no search. **\[ASSUMED A16\]**

**How you test whether two lists are enough (revised: this is a launch gate).** During the usability test (section 17), give five to eight teachers a task-free session. Watch whether they find a reason to act from the home screen alone. Ask each: "Looking at this screen, what would you do next?" Record whether the answer points at either list. If most cannot find a next action, the home screen is the first thing to change, not the features. The app does not open to teachers until this test passes.

---

## **7\. Admin screens and moderation**

Five screens. None counts toward the four features. **\[STATED\]**

**Moderation window (revised, from owner's answer).** In version one, the admin is the moderator. The admin moderates during work hours only. The service level for a report is next working day. There is no overnight or weekend cover. Because of this, sign-up stays "approval required," which keeps growth slow while one person moderates. **\[STATED plus A4\]**

**The after-hours gap, stated plainly (revised).** A serious report that lands in the evening or at the weekend waits until the next working day. This collides with Risk 1 (child or teacher harm), which is severity one. The report route (section 15\) therefore must tell a reporter what to do in an emergency without waiting for the platform.

### **7.1 Report queue**

* **Purpose.** The admin reviews flagged items. **\[STATED\]**  
* **Fields shown.** The item, its reporter count, each reason, the poster's first name and state, the post date. **\[ASSUMED A16\]**  
* **Actions.** Hide, restore, remove. **\[STATED\]**  
* **Rules.** ADM-01. Any member can tap "Report" with a reason. ADM-02. Three reports auto-hide the item until the admin decides. ADM-03. A removed item leaves a record for the export. **\[STATED plus A16.\]**

### **7.2 Approval queue**

* **Purpose.** The admin reviews a new member's first three uploads. **\[STATED\]**  
* **Actions.** Approve, reject with a reason. **\[ASSUMED A16\]**  
* **Rules.** ADM-04. First three uploads wait here. After three approvals, later uploads go live at once. **\[STATED\]**

### **7.3 Members**

* **Purpose.** The admin manages accounts. **\[STATED\]**  
* **Fields shown.** Username, role, state, school type, join date, last active date, TRCN result and date. School name and phone show to the admin only. **\[STATED plus A12.\]**  
* **Actions.** Give or remove a role, suspend, reset a PIN. **\[STATED\]**  
* **Rules.** ADM-05. A suspended member cannot post. Old posts stay unless removed. ADM-06. Only the admin changes roles. **\[STATED\]**

### **7.4 Numbers**

* **Purpose.** Show the proof numbers. **\[STATED\]**  
* **Fields shown.** Sign-ups, active members, share of questions with a reply within 72 hours, downloads, all split by state, subject and class. **Also show monthly egress use (see section 14).** **\[STATED plus revised\]**  
* **Rules.** ADM-07. From the app's own data. No third-party analytics. **\[STATED\]**  
* **Note.** This screen feeds section 18\. It must show each success measure directly.

### **7.5 Export and read-only switch**

* **Actions.** "Export everything" downloads posts, replies and the resource list as files. A switch makes the whole site read-only. **\[STATED\]**  
* **Rules.** ADM-08. Export weekly. ADM-09. The read-only switch stops posting, replying and uploading. Reading stays on. **\[STATED\]**

---

## **8\. Content rules and refusals**

Each rule says what the app does, who catches a breach, and what happens next. **All human-caught rules below depend on the admin, who works in work hours only (section 7).** **\[revised\]**

### **8.1 When the app has no answer**

* CONTENT-01. No invented answer. "No one has answered yet," stays under "Still needs an answer." Caught by: the app. **\[STATED\]**  
* CONTENT-02. A filter with no resource shows the empty state and offers to turn the filter into a question. Caught by: the app. **\[STATED\]**  
* CONTENT-03. A TRCN lookup down or with no match shows "We could not check this now." The person stays a full member. Caught by: the app. **\[STATED\]**

### **8.2 When a request is too risky to act on**

* CONTENT-04. The app blocks certain fields by design. It never shows a member's phone, school name or exact location to others. It never asks for a NIN, an ID scan or payment details. It never sends a message by itself. It never shows ads or sells member data. Caught by: the app. **\[STATED\]**  
* CONTENT-05. Pupil names and photos are banned. The app cannot detect them. A member reports; three reports auto-hide; the admin decides in work hours. Software cannot catch this alone. **\[STATED, with the honest limit.\]**  
* CONTENT-06. Religious and political debate is not allowed. The app cannot detect it. Member reports, admin removes. **\[STATED, with the honest limit.\]**  
* CONTENT-07. No medical, legal or child-protection advice as an answer. The app cannot judge a reply. The fixed notice, then a member report, then the admin. **\[STATED, with the honest limit.\]**  
* CONTENT-08. Nothing is labelled "approved" or "official," except links to government pages shown as links. Caught by: the app. **\[STATED\]**  
* CONTENT-09. A phone number or home address in a post. The app runs a soft check for a long run of digits and warns the member before posting. It cannot catch every case. Member reports the rest. **\[ASSUMED A20\]**

### **8.3 Fixed notices and labels**

* On every thread: "Teachers' advice, not official guidance." **\[STATED\]**  
* Near the TRCN badge: "TRCN registered means the number is on the register. It is not proof of who is using this account." **\[STATED\]**  
* On every science subject page: "Safety first. Check any practical activity for your class before you run it. This is teacher advice, not a safety authority." **\[STATED for the rule; ASSUMED A17 for the wording.\]**  
* In the footer: "Something wrong with a post or file? Email \[complaints address\]." **\[STATED; address OPEN.\]**

**Note.** Most risky-content rules cannot be enforced by software. They depend on member reports and the admin acting in work hours. A slower growth rate and "approval required" sign-up are the only other brakes. This connects to Risk 1 and Risk 5\. **\[A4\]**

---

## **9\. Data model**

A **table** stores one kind of record. A **field** is one piece of a record. **Read** and **write** say who can see and who can change a field. The database denies everything by default; each rule opens one door. Fields marked "v2" exist only so version two can work. **\[ASSUMED A21\]**

### **9.1 Table: member**

| Field | Type | Read | Write | v2? |
| ----- | ----- | ----- | ----- | ----- |
| id | Internal number | System | System | No |
| username | Short text, unique | Public sees first name only | Member at join | No |
| first name shown | Short text | Everyone | Member | No |
| pin | Held by the sign-in system, not readable | No one reads it | Member; admin resets | No |
| role | Reader, Member, Moderator, Admin | Member sees own; admin all | Admin | No |
| state | Pick one | Everyone, on posts | Member | No |
| local government area | Pick one | Member and admin | Member | v2 |
| school type | Pick one | Member and admin | Member | v2 |
| school name | Short text | Admin only | Member | v2 |
| subjects | List | Shown on posts | Member | No |
| class levels | List | Shown on posts | Member | No |
| languages used in class | List | Member and admin | Member | v2 |
| phone: own or shared | Own or shared | Member and admin | Member | v2 |
| years teaching band | Band | Member and admin | Member | v2 |
| trcn number | Short text | Member and admin | Member | No |
| trcn result | Match or no match | Member and admin | System | No |
| trcn checked date | Date | Member and admin | System | No |
| phone number | Short text | Admin only | Member | v2 |
| contact consent | Yes or no | Admin only | Member | v2 |
| privacy consent | Yes, with date | Admin only | System at join | No |
| join date | Date | Member and admin | System | No |
| last active date | Date | Member and admin | System | No |
| suspended | Yes or no | Member and admin | Admin | No |

**\[STATED for the set; ASSUMED A19 for trcn storage, A12 for the admin-only split.\]** The public sees a first name, not the username. The username is for sign-in.

**Rules.**

* DATA-01 (revised). The PIN is held by the sign-in system, which hashes and checks it. Hashing means storing a scrambled form that cannot be turned back into the PIN. The app does not store the PIN in any other table. See section 14 for the auth approach. **\[ASSUMED A21\]**  
* DATA-02. A NIN is never stored in any field. **\[STATED\]**  
* DATA-03. Admin-only fields (school name, phone, contact consent, privacy consent) are readable by the admin only. **\[STATED plus A12.\]**

### **9.2 Table: question**

Fields: id, author id, title, body, subject, class level, language, helped reply id, time of first reply, reported, created date. Everyone reads the public fields; only the author writes; only the author sets the helped mark. **\[STATED\]**

### **9.3 Table: reply**

Fields: id, question id, author id, body, helped mark, reported, created date. Everyone reads; only the author writes; the question's author sets the helped mark. **\[STATED\]**

### **9.4 Table: resource**

Fields: id, uploader id, title, subject, class level, language, source choice, licence, credit line, link, file, status (live, waiting, hidden, removed), download count, used-this count, save count (v2), report count, upload date. Everyone reads live resources; the uploader writes; the admin sets status. **\[STATED\]**

### **9.5 Table: report**

Fields: id, item type, item id, reporter id, reason, created date. Only the admin reads. **\[ASSUMED A16\]**

### **9.6 Table: setting**

Holds the read-only switch and the sign-up mode. Admin reads and writes. **\[STATED\]**

### **9.7 Access rules in plain words**

* DATA-04. Deny all by default. Each rule opens one door. **\[ASSUMED A21\]**  
* DATA-05. Anyone reads questions, replies and live resources. **\[STATED\]**  
* DATA-06. Only the author changes their own question or reply. First security check in section 16\. **\[STATED\]**  
* DATA-07. Only the question's author sets the helped mark. **\[STATED\]**  
* DATA-08. The member list, and every profile field beyond first name, subject and state, is hidden from readers and other members. **\[STATED\]**  
* DATA-09. Only the admin reads the report queue and changes an item's status. **\[STATED\]**  
* DATA-10. Only the admin reads admin-only fields and changes roles. **\[STATED plus A12.\]**

### **9.8 Consent, keeping and deletion**

* DATA-11. A member ticks consent at join. The app stores the fact and date. **\[STATED\]**  
* DATA-12. A member can ask to delete their account. Default: strip the name from posts and keep them, because other teachers may rely on the answer. **The privacy notice must state this promise, and the lawyer check (section 15\) must confirm it is allowed.** **\[ASSUMED A22\]**  
* DATA-13. Keep data only while the project runs. On close, export then delete. **\[ASSUMED A22\]**

---

## **10\. Data sources, approval and freshness**

| Content type | Source | Who approves | How it stays current |
| ----- | ----- | ----- | ----- |
| Questions and replies | Teachers | No pre-approval. Reports go to the admin. | 7-day "Still needs an answer" tag. **\[STATED\]** |
| Resource files | Teachers | Admin approves first three uploads. | Files show upload dates. Outdated files leave on report. **\[STATED\]** |
| Starter resource set | You | You, plus a second licence checker | Record title, link, licence, check date. **\[STATED\]** |
| Curriculum links | You | You | Admin checks links every three months. **\[STATED\]** |
| TRCN badge | The public lookup at join | The lookup | Nothing rechecks itself. "Check again" is manual. **\[STATED\]** |
| Marketing site facts | You, from named sources | You | Source and date on each, reviewed every six months. **\[STATED\]** |

**Starter set process.**

* DATA-14. Aim for 30 to 50 openly licensed resources, each with a credit line. **\[STATED\]**  
* DATA-15. Record title, link, licence and check date for each. A second person checks the licence before it goes live. **\[STATED\]**  
* DATA-16. Read the licence on every item. "BY" means give credit. "SA" means share alike. "NC" means non-commercial only. **\[STATED\]**  
* DATA-17. If you ever add money or ads, every "NC" item must come out. Tag NC items now so you can find them fast. **\[STATED\]**  
* DATA-18. TESSA (Teacher Education in Sub-Saharan Africa), built by a group of universities including the UK's Open University, is one source of openly licensed material. Its licence shows differently in different places, so read each item. No Hausa set found. Checked 19 September 2026\. **\[STATED plus confirmed.\]**  
* DATA-19. Link to official curriculum pages. Do not host copies. **\[STATED\]**  
* DATA-20. The national curriculum is written by NERDC. Many third-party sites offer the files free, but the official files carry no clear open licence, so link, do not upload. Checked 19 September 2026\. **\[STATED plus confirmed.\]**  
* DATA-21. TRCN has said it plans to digitise schemes of work, subject to Ministry approval. That could later make TRCN a source or partner. Do not depend on it for version one. Checked 19 September 2026\. **\[ASSUMED A15\]**  
* DATA-22. Write starter topics from published research and label them. Never write a fake teacher post or testimonial. **\[STATED\]**

---

## **11\. Marketing site**

One light page, in Hausa and English, in front of the app. **\[STATED\]**

**Sections.** Header; what this is; why it exists; how it works in three steps; the rules in short; join and read without joining; footer with complaints email, privacy link and the languages. **\[ASSUMED A17\]**

**Copy rules.**

* MKT-01. Every fact carries a source and a date. **\[STATED\]**  
* MKT-02. No unsourced numbers. No invented testimonials. **\[STATED\]**  
* MKT-03 (revised). The site may now use the sourced facts in section 3, each with its source and date. Hold back only the Sokoto training figure until its year is confirmed. **\[STATED\]**  
* MKT-04. Under 150 KB for the first view. No video, no auto-play, no downloaded fonts. **\[STATED\]**  
* MKT-05. Hausa and English. A native Hausa speaker reviews the Hausa. **\[STATED\]**

**Calls to action.** "Join as a teacher." "Read without joining." **\[ASSUMED A17\]**

**Draft English copy.** A first draft to cut. Add the sourced facts from section 3 where they fit.

> **Malamai Circle** A place for teachers to help teachers.

> **What this is.** Malamai Circle is a free website for primary and secondary school teachers in Northern Nigeria. You ask a classroom question. Another teacher answers. The answer stays, sorted by subject and class, so the next teacher finds it too. You can also share the lesson plans and worksheets that work in your class.

> **Why it exists.** Many teachers work alone. You may be the only person teaching your subject in your school. A chat group buries the answer by morning. Malamai Circle keeps the answer where you can find it again.

> **How it works.**

> 1. Join with a username and a short PIN. No email needed.  
> 2. Ask a question, or answer one, in Hausa or English.  
> 3. Save what helps to your phone, and open it later with no connection.

> **The rules, in short.** This is teachers' advice, not official guidance. No pupil names or photos. No religion or politics. No selling. Be kind.

> **Join as a teacher.** Or read without joining.

> Something wrong with a post or file? Email \[complaints address\].

**\[Draft. STATED.\]**

---

## **12\. Low connectivity, shared phones and performance**

Each requirement has a pass-or-fail target and a test. These targets are guesses, to be tested. **\[STATED\]**

| ID | Requirement | Target | How to test |
| ----- | ----- | ----- | ----- |
| NFR-01 | First screen weight | Under 150 KB on first view | Open in a fresh browser; read the transferred size in developer tools. **\[STATED\]** |
| NFR-02 | Upload size cap | Each upload under 2 MB | Try 1 MB (accepted) and 5 MB (refused). **\[STATED\]** |
| NFR-03 | No heavy media | No video, no auto-play, no downloaded fonts | Inspect the page. **\[STATED\]** |
| NFR-04 | Image shrink on upload | Images reduced before storing | Upload a large photo; check the stored size is smaller. **\[STATED\]** |
| NFR-05 | Installable | Add to home screen and open from the icon | On a low-cost Android, add and open. **\[STATED\]** |
| NFR-06 | Offline reading of saved items | Saved items open with no connection | Save an item, turn on airplane mode, open it. **\[STATED\]** |
| NFR-07 | Drafts survive a drop | An unsent post stays as a draft | Type a reply, cut the connection before sending. **\[STATED\]** |
| NFR-08 | Shared-phone sign-out | Idle sign-out clears saved items | Tick "shared phone," wait past the idle time. **\[STATED\]** |
| NFR-09 | Works on a slow network | The app is usable on a slowed connection | Set developer tools to "slow 3G"; load home and post a question. **\[ASSUMED A18\]** |

**The test device (revised).** The reference device is a genuinely low-cost Android on a slowed network, both together. The owner questioned this and argued that only the connection matters. The engineering position is that the connection decides how fast bytes arrive, and the phone decides how the app runs once they land. A cheap Android has less memory and a slower processor and stutters on heavy pages even on a good connection. The 150 KB target, the no-fonts rule and the image-shrink rule exist for the cheap phone. So the test needs both. **Open item A3: the owner must confirm the test device.** Until then, performance on low-end phones is untested. **\[OPEN A3\]**

**Note.** If the 150 KB target clashes with the front-end framework, the 150 KB target wins, because cheap loading is the whole point. **\[ASSUMED A18\]**

---

## **13\. Language**

* LANG-01. The interface is in Hausa and English. **\[STATED\]**  
* LANG-02. Each post carries a language tag: Hausa or English. **\[STATED\]**  
* LANG-03. A native Hausa speaker reviews every Hausa label and every Hausa line on the marketing site before launch. **\[STATED\]**  
* LANG-04. No machine translation of member content in version one. **\[STATED\]**  
* LANG-05. The language tag drives the language filter. **\[STATED\]**

**Ajami.** Ajami is Hausa written in Arabic script. Version one does not support it. If your target teachers read Ajami, that belongs in version two. **\[ASSUMED A23\]**

**Note.** Every Hausa string in this document is a machine draft. Do not ship it as is. A native speaker must review it. **\[STATED\]**

---

## **14\. Tech stack, architecture and free plan limits**

### **14.1 Locked**

* STACK-01. An installable web app for members, plus one static marketing page. No store app. **\[STATED\]**  
* STACK-02. Builder: Antigravity IDE. Its free plan may have a weekly usage limit of unknown size, so the build runs in small pieces that are safe to stop after. **\[STATED\]**  
* STACK-03. Host: a web host for the pages. Keep the app portable. See the pause decision below before you pick. **\[STATED\]**  
* STACK-04. Free plans only, subject to the pause decision below. **\[STATED\]**

### **14.2 Recommended for the open parts**

Each recommendation gives three lines of reasons and is flagged.

**Database, sign-in and file storage: Supabase.** **\[ASSUMED A8\]**

* It bundles a database, sign-in and file storage in one plan, so you learn one tool.  
* It supports row-level access rules, which enforce "a member cannot edit another's post."  
* Its free plan pauses after 7 days idle. See the pause decision below.

**Sign-in method (revised, resolves the custom-auth risk).** Use Supabase's own sign-in, not hand-written login code. Map each username to an internal address inside Supabase auth, for example `username@malamai.internal`, and use the six-digit PIN as the password. Supabase then hashes the PIN, checks it, and handles the lockout. Do not build your own token store. Custom login is the single most dangerous thing an AI tool can build, so hand this part to a tested system. **\[ASSUMED A21\]**

**Front-end framework: Astro.** **\[ASSUMED A18\]**

* Astro ships close to zero JavaScript by default, which serves the 150 KB target. One 2026 comparison measured an Astro build at about 18 KB of JavaScript against about 180 KB for the same site in a React framework. Checked 19 September 2026\.  
* It builds the marketing page and the app screens in one project.  
* Where a screen needs interaction, Astro loads JavaScript only for that part.

**Serving resource files (revised, egress fix).** Serve resource files through the web host's static file delivery, not through the database's egress. This avoids the free database's egress cap. **\[ASSUMED A8\]**

**TRCN lookup: from a server function, not the browser.** The public endpoint at `https://api.trcn.gov.ng/teacher/verify-license`needs no key. Test it with a number you control before the build starts. Confirmed 19 September 2026\. **\[STATED plus confirmed.\]**

**Analytics: none from third parties.** The Numbers screen uses only the app's own data. **\[STATED\]**

**Domain: the free host address in version one.** Do not buy a domain until hosting is final. **\[ASSUMED A24\]**

### **14.3 Architecture in words**

1. A person opens the web app in a phone browser and can add it to the home screen.  
2. Static pages, like the marketing page and the boards, load as plain HTML.  
3. When a member signs in, posts or uploads, the app talks to Supabase.  
4. The TRCN check runs through a small server function that calls the public lookup.  
5. Saved items live in the phone's browser storage and open offline.  
6. Nothing runs on a schedule. Nothing sends a message. There is no background job in version one. **\[STATED\]**

### **14.4 The free-plan pause decision (revised, launch-blocking, severity one)**

The free Supabase database pauses after 7 days idle. **This is a database behaviour. No web host changes it.** Moving off one web host does not stop the pause. At launch, a paused site meets teachers with a dead link, and they do not come back. You must choose one of these before you open to teachers. None is both free and pause-free.

| Option | What it means | Cost | Trade-off |
| ----- | ----- | ----- | ----- |
| Supabase Pro | Pausing is removed | 25 US dollars a month | Breaks "free plans only" |
| A different non-pausing free database | Supabase is dropped for the database | Free | New tool to learn; may split storage and sign-in |
| A keep-alive ping | A scheduled call keeps the database awake | Free | Breaks the "nothing runs on a schedule" rule in 14.3, and may breach Supabase's terms |

**You must pick one. Until you do, a free-only launch is not proven.** **\[OPEN A8\]**

### **14.5 Free plan limits**

| Service | Plan | Limit | What happens at the limit | Source | Date |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Supabase | Free | 500 MB database | Writes fail or upgrade asked | Supabase pricing guides | 19 Sep 2026 |
| Supabase | Free | 1 GB file storage (one source says 500 MB) | No more uploads | Supabase pricing guides, which disagree | 19 Sep 2026, exact figure unverified |
| Supabase | Free | 5 GB egress a month | Throttled or upgrade asked. **This is why files are served through the host, not the database (14.2).** | Supabase pricing guides | 19 Sep 2026 |
| Supabase | Free | 50,000 monthly active users | Upgrade needed above this | Supabase pricing guides | 19 Sep 2026 |
| Supabase | Free | 2 active projects | A third needs a paid organisation | Supabase pricing guides | 19 Sep 2026 |
| Supabase | Free | Pauses after 7 days idle | Site dark until restarted by hand. **See 14.4.** | Supabase pricing guides | 19 Sep 2026 |
| Supabase | Free | No daily backups | Rely on the weekly manual export | Supabase pricing guides | 19 Sep 2026 |
| Web host (e.g. Vercel Hobby) | Free | Non-commercial, personal use only | Commercial use needs a paid plan | Vercel fair use guidelines | 19 Sep 2026 |
| Web host (e.g. Vercel Hobby) | Free | Donations do not count as commercial | Donations allowed | Vercel fair use guidelines | 19 Sep 2026 |
| Antigravity IDE | Free | Weekly usage limit, no fixed size published | Wait for the limit to refresh | Google and community reports | 19 Sep 2026, size unverified |

**Note on the host terms.** No one is paid to build or run this today (A9), so the non-commercial rule does not bite now. If a grant later pays you or a developer, recheck the host's terms, and if you move host to avoid the pause, check that host's free terms too, since the non-commercial limit differs by host. **\[ASSUMED A9\]**

---

## **15\. Security, privacy and legal**

I am not a lawyer. This lists threats, defences and the questions to put to a lawyer. It gives no legal advice. **\[STATED\]**

### **15.1 Threats and defences**

| Threat | Defence | ID |
| ----- | ----- | ----- |
| A member edits another's post | Deny by default; only the author writes. First security check in section 16\. | SEC-01 **\[STATED\]** |
| A signed-out visitor opens the member list | Member list and profile fields beyond first name, subject, state are hidden. | SEC-02 **\[STATED\]** |
| The AI build leaves the database open | The test list in section 16 checks this. Access is deny-by-default. | SEC-03 **\[ASSUMED A21\]** |
| Custom login leaks accounts | Use Supabase's own sign-in, PIN as the password, Supabase hashes and locks out (section 14). | SEC-04 **\[ASSUMED A21\]** |
| Someone guesses a PIN | Supabase lockout: 5 wrong tries, 15 minute wait. | SEC-05 **\[ASSUMED A13\]** |
| A pupil name or photo is posted | The app cannot detect it. Members report, three reports auto-hide, the admin decides in work hours. | SEC-06 **\[STATED, honest limit\]** |
| A NIN is collected by mistake | Never asked; an 11 digit all-number entry is refused after stripping spaces; never stored. | SEC-07 **\[STATED plus A19\]** |
| A copied textbook is uploaded | Source choice at upload, complaints email, admin removal. | SEC-08 **\[STATED\]** |
| The free database is lost | Weekly manual export keeps a copy off the plan. | SEC-09 **\[STATED\]** |
| A secret key leaks | Keys and secrets live in the host's environment settings, never in the code or the browser. | SEC-10 **\[ASSUMED A21\]** |

### **15.2 What the app must never store**

A NIN, an ID scan or any government ID number. Payment or card details. A PIN in plain text. A pupil's name or photo. **\[STATED plus A21.\]**

### **15.3 Consent text, draft**

Above "Create account": "I have read how Malamai Circle uses my information. I agree to join. I know this is teachers' advice, not official guidance." **\[Draft. ASSUMED A17.\]**

### **15.4 Privacy notice outline**

In Hausa and English, plain words. Cover: what you collect, field by field; why; who sees each field; that you never collect a NIN or payment details; how a member deletes their account and what deletion does (section 9, A22); the complaints email; the date. **\[STATED plus A22.\]**

### **15.5 The safety report route (revised)**

* The report route is built now. A report with a "serious safety" reason auto-hides the item and flags it at the top of the admin queue. **\[STATED\]**  
* The receiving bodies are the relevant teachers' union bodies. They are named after the prototype is shown, and each must agree in writing before it receives reports. Until a body agrees, the route ends at the admin. **\[ASSUMED A6\]**  
* Because the admin works in work hours only (section 7), the report screen must show an immediate self-help line that does not wait for the platform: **"If a child is in immediate danger, contact local emergency services or the police now. Do not wait for us."** **\[ASSUMED A6\]**

### **15.6 The copyright complaint route**

A complaints email sits in the footer. Anyone can email about a copied file. The admin removes it on a fair complaint. **\[STATED\]**

### **15.7 Questions to ask a lawyer or the regulator**

The Nigeria Data Protection Act 2023 (NDPA) is the data law. Its regulator is the Nigeria Data Protection Commission (NDPC). Guidance treats a body that handles the personal data of more than 200 people in six months as one "of major importance." Rules in force since 19 September 2025 require such bodies to register and file yearly returns, with fees. I could not confirm the fee or whether a small free project must pay. Checked 19 September 2026\. Ask: **\[STATED plus confirmed.\]**

1. Does Malamai Circle count as a "data controller of major importance," given the 200-person guidance?  
2. If so, must I register with the NDPC, and what does registration cost?  
3. What must my privacy notice contain to be lawful?  
4. Is a consent tick at join enough, or do I need more?  
5. May I keep a post after a member deletes their account, if I strip the name (A22)?  
6. What are my duties if teachers' data leaks?  
7. Do the rules change because members may include teachers in unsafe areas?

**This is a launch blocker.** Do not open to real teachers until a lawyer or the NDPC has answered at least questions 1, 2 and 5\. **\[OPEN A7\]**

---

## **16\. Build plan and build prompts**

Build in small pieces. Each stands alone and is testable before the next. After each piece, save the code somewhere you control, because the builder's free quota can stop mid-task. Build only what the piece names. If something is unclear, stop and ask, do not guess. **\[STATED\]**

### **Piece 1: The shell and the marketing page**

* **Goal.** A light, installable web app shell and the static marketing page.  
* **Prompt.** "Build a static website with Astro. Create one marketing page with these sections: header, what this is, why it exists, how it works in three steps, the rules in short, a join call to action, and a footer with a complaints email placeholder. Keep the first view under 150 KB. Use no video, no auto-play and no downloaded web fonts. Make the site installable to a phone home screen and openable offline for pages already seen. Do not add any other page yet."  
* **Test.** Loads under 150 KB. Installs to a home screen. Opens offline once seen.  
* **Stop.** Marketing page live. Save the code.

### **Piece 2: Database and sign-in, with locked access (revised)**

* **Goal.** The member table and username-and-PIN sign-in through Supabase's own auth, with deny-by-default access.  
* **Prompt.** "Add Supabase for the database and sign-in. Create the member table with these fields \[paste section 9.1\]. Use Supabase's built-in authentication, not custom login code. Map each username to an internal auth address such as username@malamai.internal, and use the six-digit PIN as the password so Supabase hashes it and handles lockout after 5 wrong tries for 15 minutes. Set the database to deny all access by default. Add rules so a member reads and writes only their own profile, and so no one but an admin reads school name, phone number, contact consent or privacy consent. Do not build the join screen yet. Give me a way to create one test member by hand."  
* **Test.** A test member exists. The PIN is not readable in any table. A direct read of another member's admin-only fields fails. Two members cannot take the same username.  
* **Stop.** Access and auth pass a manual test. Save the code.

### **Piece 3: Join screen and the TRCN check**

* **Goal.** F4 in full.  
* **Prompt.** "Build the Join screen with the fields in \[paste section 5.4\]. Create the account as a Member as soon as the person taps Create account, whether or not a TRCN number is entered. Add a server function that calls the public TRCN lookup at https://api.trcn.gov.ng/teacher/verify-license, sends only the registration number, and reads the found field to decide the badge. If the lookup fails, finish the join as a Member and show 'We could not check this now.' Before checking, strip spaces and separators, then reject any 11 digit all-number entry, and never store a NIN. Add a Check again button on the profile. Show the 'not proof of identity' line by the badge."  
* **Test.** All F4 acceptance checks.  
* **Stop.** Join works with the lookup on and off. Save the code.

### **Piece 4: Ask and answer**

* **Goal.** F1 in full.  
* **Prompt.** "Build Ask and answer per \[paste section 5.1\]. Add the subject and class boards, the single question screen, the reply box, and the 'This helped' mark that only the asker can set. Add filters for subject, class, language and 'Still needs an answer.' Tag a question 'Still needs an answer' after 7 days with no reply. Show 'Teachers' advice, not official guidance' on every thread. Keep unsent posts as drafts on the phone. Do not add a search box."  
* **Test.** All F1 acceptance checks.  
* **Stop.** Reader reads, member posts and replies, drafts survive a drop. Save the code.

### **Piece 5: Resource shelf**

* **Goal.** F2 in full.  
* **Prompt.** "Build the resource shelf per \[paste section 5.2\]. Accept only PDF or image under 2 MB. Shrink images on upload. Serve resource files through the web host's static delivery, not through the database, to spare egress. Require a source choice. Hold a new member's first three uploads for review. Count downloads and 'I used this.' Show source, licence and upload date on each file. Offer to turn an empty filter into a question. Add no star ratings."  
* **Test.** All F2 acceptance checks.  
* **Stop.** Upload, review-hold, download and counts work. Save the code.

### **Piece 6: Save to this phone**

* **Goal.** F3 in full.  
* **Prompt.** "Add a Save button to question threads and resources per \[paste section 5.3\]. Store saved items in the phone's browser storage so they open offline. Clear saved items at sign-out when 'This is a shared phone' is ticked. If the browser cannot store a file, show a clear message and do not crash."  
* **Test.** All F3 acceptance checks.  
* **Stop.** Offline open works, shared-phone clear works. Save the code.

### **Piece 7: Home screen and return loop**

* **Goal.** Section 6\.  
* **Prompt.** "Build a home screen with two lists per \[paste section 6\]. List one: open questions in the member's subjects and class levels, newest first, up to 10\. List two: new resources for the member's subjects and classes, plus new replies to the member's own questions, newest first, up to 10\. Show empty states. Send no message or notification of any kind."  
* **Test.** Both lists read from the profile. No message is sent.  
* **Stop.** Home screen shows the right two lists. Save the code.

### **Piece 8: Admin and moderation**

* **Goal.** Section 7, all five screens.  
* **Prompt.** "Build five admin screens per \[paste section 7\]. Report queue with hide, restore, remove, and auto-hide at three reports, plus a top-of-queue flag for a 'serious safety' reason. Approval queue for first uploads. Members screen with roles, suspend and PIN reset, showing school name and phone to the admin only. Numbers screen from the app's own data, split by state, subject and class, and showing monthly egress use. Export everything as files, and a switch that makes the whole site read-only. Restrict each screen to admin as the permission table says."  
* **Test.** Each admin action works and is limited to the right role.  
* **Stop.** Moderation and export work. Save the code.

### **Piece 9: The safety and content rules**

* **Goal.** Section 8 and section 15.5.  
* **Prompt.** "Apply the content rules per \[paste section 8\]. Add a Report button for members with a reason, including a 'serious safety' reason that auto-hides the item and flags it at the top of the admin queue. On the report screen, show: 'If a child is in immediate danger, contact local emergency services or the police now. Do not wait for us.' Add a soft check that warns a member when a post body holds a long run of digits, in case it is a phone number. Show the fixed science safety note on science subject pages. Do not try to auto-detect pupil names, religion or politics. Those depend on reports."  
* **Test.** Report and auto-hide work. The emergency line shows. The digit warning shows. The science note shows.  
* **Stop.** Rules in place. Save the code.

### **The pre-launch security checks, in full (revised)**

Run every one before you open to teachers. Each has an expected result.

1. Signed in as member A, try to edit member B's question. Expected: refused.  
2. Signed in as member A, try to delete member B's reply. Expected: refused.  
3. Signed out, try to open the member list. Expected: refused.  
4. Signed out, try to read a member's phone number or school name. Expected: refused.  
5. As a plain member, try to open the report queue. Expected: refused.  
6. As a plain member, try to change your own role to admin. Expected: refused.  
7. Upload a 5 MB file. Expected: refused with a clear message.  
8. Upload a non-PDF, non-image file. Expected: refused.  
9. Enter a TRCN number that does not exist. Expected: no badge, no crash.  
10. Enter an 11 digit all-number value in the TRCN field, with and without spaces. Expected: refused, no NIN stored.  
11. Read the database directly as a stranger; check the PIN is not readable in any table. Expected: not readable.  
12. Enter 5 wrong PINs. Expected: the account locks for 15 minutes.  
13. Try to register two members with the same username. Expected: the second is refused.

**\[Checks 1, 2, 3, 7, 9 STATED; the rest ASSUMED A16, built from the same idea.\]**

---

## **17\. Test plan**

Run these before you open to teachers, and again after any big change. **\[STATED\]**

### **17.1 Device test**

* TEST-01. One low-cost Android on a slowed network, both together. This is the phone-tester role in A3, still open. **\[STATED plus A3.\]**  
* TEST-02. Walk the whole app on that phone: join, ask, reply, upload, download, save, open offline, install.  
* TEST-03. Check the first screen loads under 150 KB on that phone.

### **17.2 The security checks**

* TEST-04. Run all thirteen checks in section 16\. A single fail is a launch blocker. **\[STATED\]**

### **17.3 Moderation dry run**

* TEST-05. Post a few bad items yourself: a fake pupil name, a copied file, a phone number in a post. **\[ASSUMED A16\]**  
* TEST-06. Check three reports auto-hide an item, the admin can hide, restore and remove, and a "serious safety" report jumps to the top and shows the emergency line.  
* TEST-07. Time the admin's moderation. Note that cover is work hours only.

### **17.4 Usability test with real teachers**

* TEST-08. Five to eight teachers who match the target, on their own phones. **This count is a guess, a common range for finding the biggest problems, not a project finding.** **\[ASSUMED A25\]**  
* TEST-09. Watch: can they join without help, post a question, understand the TRCN badge, know what the home screen wants.  
* TEST-10. Ask each: "Looking at this screen, what would you do next?" Record whether the answer points at either home-screen list.  
* TEST-11. Test the Hausa with a native speaker. Note every label that reads wrong.

### **17.5 Return-loop test (revised: a launch gate)**

* TEST-12. After the usability test, ask the same teachers to come back a week later with no reminder from you. Record how many return and what pulled them. **The app does not open to a wider group until this test passes.** If few return, change the home screen first, not the features. **\[STATED\]**

---

## **18\. Success measures and stop rule**

Each measure has a name, a definition, how it is computed, a target, and where the target came from. **All four targets are guesses.** They map to the Numbers screen. **\[ASSUMED A10.\]**

| Measure | Definition | Computed from | Target | Source |
| ----- | ----- | ----- | ----- | ----- |
| Reply speed | Share of questions with a first reply within 72 hours | "time of first reply" minus "created date" | At least 6 in 10, within 90 days | Guess (A10) |
| Fourth-week return | Share of members active in their fourth week | "last active date" in days 22 to 28 after "join date" | At least 3 in 10\. **Highest-risk assumption (section 6).** | Guess (A10) |
| Spread (revised) | Number of states, and secondarily schools, members come from | Distinct states (required field); distinct school names as a secondary read | At least 2 states as a pilot floor, not a regional claim; 10 schools if school name is filled | Guess (A10) |
| Real value | At least one teacher says a resource changed a lesson | Recorded by hand from a teacher's words | At least one, within 90 days | Guess (A10) |

**The 90-day review.** Set a date 90 days after you open to teachers. Read the four measures off the Numbers screen and the one hand-recorded note. **\[ASSUMED A10.\]**

**The stop or change rule.** **\[ASSUMED A10.\]**

* If reply speed is under 3 in 10, and fourth-week return is under 1 in 10, and members come from fewer than 2 states, then stop adding features. Go back to the first group of teachers and ask why. The problem is not the build.  
* If reply speed and return sit between the low bar and the target, keep going but change one thing, most likely the home screen, since that drives return.  
* If all four targets are met, plan version two from the version-one data (section 21).

**Note.** Spread now leans on state, which is required, not school, which is optional. Two states is a pilot floor, not proof of a regional product. **\[ASSUMED A26\]**

---

## **19\. Risks**

Your top three first, then more. Each has a cost, a first defence, an owner, and an early warning sign. **\[STATED\]**

### **Risk 1: A child or a teacher is harmed through a post (severity one)**

* **Cost.** Safety and trust. It can end the project. **\[STATED\]**  
* **First defence.** The never-do list in the app, first-upload approval, member reports with three-report auto-hide, the report route to union bodies, the emergency self-help line, and no school names shown to the public. **\[STATED plus A6\]**  
* **Owner.** The admin. **\[ASSUMED A5.\]**  
* **Early warning.** A rise in "serious safety" reports, or any report that lands after hours and sits until the next working day. **The admin moderates in work hours only, so overnight and weekend reports wait. This is a known gap (section 7).** **\[revised, A4, A6\]**

### **Risk 2: The free database pauses, and a free-only launch is unproven (severity one, revised)**

* **Cost.** The site sleeps after 7 days idle and meets teachers with a dead link. The pause is a database behaviour that no web host fixes. **\[ASSUMED A8\]**  
* **First defence.** Make the pause decision in section 14.4 before launch: pay for Supabase Pro, move to a non-pausing free database, or accept a keep-alive that breaks the no-schedule rule. **\[ASSUMED A8\]**  
* **Owner.** You. **\[ASSUMED A5.\]**  
* **Early warning.** The project pauses even once during testing.

### **Risk 3: Teachers' data leaks or is lost, or you break a data or copyright rule**

* **Cost.** Trust, and possible legal trouble. It could expose teachers in unsafe areas. **\[STATED\]**  
* **First defence.** The security checks, the weekly export, the lawyer check on the data law, and the source choice at upload. **\[STATED\]**  
* **Owner.** You. **\[ASSUMED A5.\]**  
* **Early warning.** A failed security check, a week with no export, or a copyright complaint.

### **Risk 4: Nobody comes back, and teachers stay in WhatsApp**

* **Cost.** Your time and the idea itself. **\[STATED\]**  
* **First defence.** Starter content, your first named group, Share links to WhatsApp, and the return-loop launch gate. **\[STATED\]**  
* **Owner.** You. **\[ASSUMED A5.\]**  
* **Early warning.** A failed return-loop test, or low fourth-week return on the Numbers screen. **\[STATED.\]**

### **Risk 5: One part-time moderator, so the safety rules have thin cover**

* **Cost.** Bad posts stay up outside work hours, because most content rules need a person. **\[ASSUMED A4.\]**  
* **First defence.** Sign-up stays "approval required." The emergency self-help line covers the worst case. Name more moderators before you grow. **\[STATED plus A4.\]**  
* **Owner.** You. **\[ASSUMED A5.\]**  
* **Early warning.** A growing report queue that waits past the next working day.

### **Risk 6: The Hausa reads wrong**

* **Cost.** Teachers do not trust a tool that speaks their language badly. **\[ASSUMED A23.\]**  
* **First defence.** A native speaker reviews every Hausa string before launch. Ship no machine Hausa. **\[STATED.\]**  
* **Owner.** You, plus the native reviewer.  
* **Early warning.** A test teacher misreads a label.

---

## **20\. Assumptions, open questions and unconfirmed facts**

ID, item, why it matters, the default used, who must answer. Rebuilt after this session's answers.

| ID | Item | Why it matters | Default or status | Who must answer |
| ----- | ----- | ----- | ----- | ----- |
| A1 | Launch languages | Sets who the app serves | Hausa and English only | You |
| A2 | The name "Malamai Circle" | May read as Islamic-scholar or exclude non-Hausa teachers | Keep it, but test it | You, with teachers |
| A3 | Test device | Performance on cheap phones is untested. Owner disputed; engineering says both device and network matter | OPEN. Low-cost Android plus throttled network. Owner to confirm | You |
| A4 | Moderation | Most safety rules need a person | RESOLVED. Admin moderates, work hours, next-working-day service level. Sign-up "approval required" | Settled |
| A5 | Who owns accounts and data | Sets who answers to the law | You, personally | You |
| A6 | Safety report destination | A serious case needs a real destination | RESOLVED for the prototype. Route built; union bodies named and agreed after the prototype; until then ends at the admin; emergency self-help line shown | Settled for now |
| A7 | Data law check | Launch blocker under the NDPA | OPEN. No lawyer consulted yet; questions listed | You, with a lawyer |
| A8 | Database and the pause | The free database pauses after 7 days; no host fixes it | OPEN. Supabase kept; the pause decision in 14.4 is unresolved | You |
| A9 | Is anyone paid | Host free plans are non-commercial only | RESOLVED. No one paid; recheck if a grant pays or if you move host | Settled for now |
| A10 | Success numbers and stop rule | Without them, every result looks like success | The four guessed targets and the stop rule | You |
| A11 | Who the app does not serve | Sets scope | Teachers with at least shared smartphone access; no-access teachers excluded | You |
| A12 | Who sees admin-only fields | School name and phone are sensitive | Admin only | You |
| A13 | PIN handling | Guessing and shared-phone risk | Supabase lockout, 5 tries then 15 minutes; never auto-filled | You |
| A14 | Unsourced statistics | The marketing site needs sourced facts | RESOLVED. Facts now sourced except the Sokoto training figure | Settled except one figure |
| A15 | Proposed-but-not-included features | Keep them out of scope | Duplicate hint and copy-reply button deferred | You |
| A16 | Field limits, sort orders, small rules | Needed to build, not stated by you | The specific numbers and orders above | You, to confirm |
| A17 | On-screen wording and empty states | Needed for the screens | The English drafts above | You |
| A18 | Browser storage and framework choice | Saved items are not a safe store; 150 KB may clash with a framework | Server keeps the original; 150 KB target wins; Astro recommended | You |
| A19 | TRCN storage and NIN block | The same endpoint accepts a NIN | Store only match, state, status, date; strip spaces then block an 11 digit entry | You |
| A20 | Digit warning on posts | A soft catch for phone numbers | A warning, not a hard block | You |
| A21 | Deny-by-default access and auth | Core security | Deny all by default; Supabase auth with PIN as password; secrets in host settings | You, to confirm at build |
| A22 | Deletion promise | Two different promises to a member | Strip the name, keep the post | You, with a lawyer |
| A23 | Ajami support | Some teachers read Ajami more easily | No Ajami in version one | You |
| A24 | Domain | Hosting not final | Free host address for now | You |
| A25 | Usability test count | Five to eight is a common range, not a finding | Five to eight teachers | You |
| A26 | Spread metric | Now based on state, not optional school name | State is the measure; school is secondary | You |

**Still fully open, answer first:** A3 (test device), A7 (data law), A8 (the pause decision). These three decide whether you can launch at all.

---

## **21\. Version two candidates**

A short list. For each, the version-one data that makes it possible. Not designed here. **\[STATED.\]**

* **Voice notes for questions and replies.** Typing Hausa is slow, so this is the strongest candidate. Made possible by: the language tag on every post now. **\[STATED.\]**  
* **A consented, member-initiated reminder (revised).** A member could opt in to a light nudge that they set themselves, not an automatic message. Fights the return-loop risk without breaking the no-automated-message rule. Made possible by: the optional phone number and the "you may contact me" tick. **\[ASSUMED A15.\]**  
* **Human-reviewed AI moderation help (revised).** An AI tool could flag posts for the admin, who still decides. Deferred from version one on purpose. Made possible by: the report and status data collected now. **\[ASSUMED A15.\]**  
* **A duplicate-question hint.** Show the closest existing questions as a member types. Made possible by: the subject, class and title data. **\[STATED plus A15.\]**  
* **Targeting by place and class.** Reach teachers in one state or class level. Made possible by: state, local government area, school type, subjects and class levels. **\[STATED.\]**  
* **Proof for funders.** Show reach and activity. Made possible by: join date, last active date and the counts. **\[STATED.\]**  
* **TRCN credit or certificates.** Needs TRCN's agreement, so it stays out of version one. Made possible by: the TRCN result already stored. **\[STATED.\]**  
* **Search.** Add it when duplicates pile up. Made possible by: the growing store of titles and bodies. **\[STATED.\]**

---

*End of Draft 2\. The three still-open blockers are A3, A7 and A8. Clear those before you open to real teachers.*