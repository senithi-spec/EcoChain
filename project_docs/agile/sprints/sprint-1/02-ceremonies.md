# Sprint 1 Ceremonies

**Sprint:** 1  
**Duration:** December 5-11, 2025  
**Sprint Goal:** Establish project foundation and complete user authentication system

---

## Sprint Planning Meeting

**Date:** December 5, 2025 (Thursday)  
**Time:** 9:00 AM - 11:00 AM  
**Location:** Team Workspace  
**Attendees:** Full Scrum Team

### Agenda

1. Review Product Vision and SRS
2. Discuss Sprint Goal
3. Select User Stories from Product Backlog
4. Break down stories into tasks
5. Estimate effort and confirm capacity

### Sprint Goal Discussion

**Product Owner:**

> "For this first sprint, we need to establish the foundation. Users must be able to register as either a Donor or Receiver, and log in securely. This is the gateway to all other features."

**Scrum Master:**

> "Given this is our first sprint and we're setting up the project from scratch, I recommend we commit to 12 story points. This gives us room to learn our velocity."

**Team Agreement:** Sprint Goal accepted unanimously.

### Selected User Stories

| ID     | Story                 | Points | Rationale                               |
| ------ | --------------------- | ------ | --------------------------------------- |
| US-001 | Donor Registration    | 3      | Foundation for donor flow               |
| US-002 | Receiver Registration | 3      | Foundation for receiver flow            |
| US-003 | User Login            | 2      | Required for all authenticated features |
| US-004 | Persistent Session    | 2      | UX requirement                          |
| US-005 | Protected Routes      | 2      | Security requirement                    |

**Total Committed:** 12 story points

### Capacity Confirmation

| Team Member | Available Hours | Assigned Hours |
| ----------- | --------------- | -------------- |
| Developer 1 | 35h             | 32h            |
| Developer 2 | 35h             | 30h            |

### Sprint Planning Outcome

✅ Sprint Goal defined  
✅ 5 stories selected (12 points)  
✅ Tasks broken down with estimates  
✅ Team capacity confirmed  
✅ DoD reviewed

---

## Daily Scrums

### Day 1 - Thursday, December 5, 2025

**Time:** 9:30 AM (after Sprint Planning)  
**Duration:** 10 minutes

| Who   | Yesterday       | Today                                                         | Blockers |
| ----- | --------------- | ------------------------------------------------------------- | -------- |
| Dev 1 | Sprint planning | Setup server folder structure, init npm, install dependencies | None     |
| Dev 2 | Sprint planning | Setup client with Vite, configure Tailwind CSS                | None     |

**Scrum Master Notes:** First day, team is energized. Clear division of work.

---

### Day 2 - Friday, December 6, 2025

**Time:** 9:30 AM  
**Duration:** 15 minutes

| Who   | Yesterday                                           | Today                            | Blockers |
| ----- | --------------------------------------------------- | -------------------------------- | -------- |
| Dev 1 | Created server structure, installed Express, Prisma | Write Prisma schema, run db push | None     |
| Dev 2 | Vite + Tailwind configured, basic App.jsx           | Create page components structure | None     |

**Discussion:**

- Dev 1: "Prisma db push failed with enum error for SQLite"
- SM: "Can you investigate and report back?"
- Dev 1: "Will check Prisma docs for SQLite limitations"

**Action Item:** Investigate SQLite enum support

---

### Day 3 - Saturday, December 7, 2025

**Time:** 10:00 AM  
**Duration:** 15 minutes

| Who   | Yesterday                                            | Today                                     | Blockers    |
| ----- | ---------------------------------------------------- | ----------------------------------------- | ----------- |
| Dev 1 | Fixed enum issue (changed to String), schema working | Implement register controller with bcrypt | ✅ Resolved |
| Dev 2 | Created page component files, React Router setup     | Start Register page UI                    | None        |

**Discussion:**

- Dev 1: "SQLite doesn't support enums. Changed Role and ItemStatus to String fields with comments."
- Team: "Good solution, let's document this for future reference."

**Scrum Master Notes:** Blocker resolved same day. Good problem-solving.

---

### Day 4 - Sunday, December 8, 2025

**Time:** 10:00 AM  
**Duration:** 12 minutes

| Who   | Yesterday                                       | Today                                 | Blockers |
| ----- | ----------------------------------------------- | ------------------------------------- | -------- |
| Dev 1 | Register controller done, login controller done | Create auth routes, test with Postman | None     |
| Dev 2 | Register page structure ready                   | Add form fields, role toggle, styling | None     |

**Discussion:**

- Dev 1: "Auth endpoints returning correct responses in Postman"
- Dev 2: "Register form looking good, need to add validation"

---

### Day 5 - Monday, December 9, 2025

**Time:** 9:30 AM  
**Duration:** 15 minutes

| Who   | Yesterday                           | Today                                       | Blockers |
| ----- | ----------------------------------- | ------------------------------------------- | -------- |
| Dev 1 | Auth routes complete, tested        | Create /me endpoint, set up auth middleware | None     |
| Dev 2 | Register form with styling complete | Build Login page, integrate with API        | None     |

**Discussion:**

- Dev 2: "Need to handle API errors properly"
- Dev 1: "I'll add proper error responses from backend"

---

### Day 6 - Tuesday, December 10, 2025

**Time:** 9:30 AM  
**Duration:** 15 minutes

| Who   | Yesterday                                      | Today                              | Blockers |
| ----- | ---------------------------------------------- | ---------------------------------- | -------- |
| Dev 1 | Auth middleware complete, /me endpoint working | Help with frontend integration     | None     |
| Dev 2 | Login page done, API integration working       | Create AuthContext, ProtectedRoute | None     |

**Discussion:**

- Dev 2: "JWT stored in localStorage, but need to persist across refresh"
- Dev 1: "AuthContext should check /me on app load"

---

### Day 7 - Wednesday, December 11, 2025

**Time:** 9:30 AM  
**Duration:** 10 minutes

| Who   | Yesterday                                | Today                             | Blockers |
| ----- | ---------------------------------------- | --------------------------------- | -------- |
| Dev 1 | Helped with frontend, fixed CORS issues  | Final testing, prepare for review | None     |
| Dev 2 | AuthContext working, ProtectedRoute done | Test all flows, prepare demo      | None     |

**Discussion:**

- Both: "All stories complete, ready for Sprint Review"

---

## Sprint Review

**Date:** December 11, 2025 (Wednesday)  
**Time:** 3:00 PM - 3:45 PM  
**Attendees:** Full Scrum Team + Stakeholders

### Demonstration

| Feature               | Demonstrator | Result                                         |
| --------------------- | ------------ | ---------------------------------------------- |
| Donor Registration    | Dev 2        | ✅ Working - showed form, validation, success  |
| Receiver Registration | Dev 2        | ✅ Working - showed Org ID field appears       |
| Duplicate Email Error | Dev 2        | ✅ Working - showed error message              |
| User Login            | Dev 2        | ✅ Working - showed redirect to dashboard      |
| Invalid Login         | Dev 2        | ✅ Working - showed error handling             |
| Session Persistence   | Dev 1        | ✅ Working - refreshed page, stayed logged in  |
| Protected Routes      | Dev 1        | ✅ Working - unauthenticated redirect to login |
| Logout                | Dev 1        | ✅ Working - token cleared, redirected         |

### Stakeholder Feedback

**Product Owner:**

> "Excellent work on the foundation. The registration forms are clean and intuitive. I like how the Org ID field only appears for receivers - good UX decision."

**Stakeholder Questions:**

- Q: "Can we add password strength indicator?"
- A: "Added to backlog for future sprint."

- Q: "What about 'Forgot Password'?"
- A: "Out of MVP scope, added to future backlog."

### Sprint Metrics Presented

| Metric            | Value |
| ----------------- | ----- |
| Stories Committed | 5     |
| Stories Completed | 5     |
| Points Committed  | 12    |
| Points Delivered  | 12    |
| Bugs Found        | 1     |
| Bugs Fixed        | 1     |

### Product Owner Acceptance

| Story  | Accepted | Notes            |
| ------ | -------- | ---------------- |
| US-001 | ✅ Yes   | All criteria met |
| US-002 | ✅ Yes   | All criteria met |
| US-003 | ✅ Yes   | All criteria met |
| US-004 | ✅ Yes   | All criteria met |
| US-005 | ✅ Yes   | All criteria met |

### Increment Declared

**Sprint 1 Increment:** Working authentication system with donor/receiver registration, login, session management, and protected routes.

---

## Sprint Retrospective

**Date:** December 11, 2025 (Wednesday)  
**Time:** 4:00 PM - 4:30 PM  
**Facilitator:** Scrum Master  
**Format:** Start-Stop-Continue + Safety Check

### Safety Check (1-5 scale)

| Member | Score | Comment                    |
| ------ | ----- | -------------------------- |
| Dev 1  | 5     | "Feel comfortable sharing" |
| Dev 2  | 5     | "Open environment"         |

**Average:** 5.0 - Excellent psychological safety

### What Should We START Doing?

| Item                                          | Raised By | Priority | Action                         |
| --------------------------------------------- | --------- | -------- | ------------------------------ |
| Research tech limitations before implementing | Dev 1     | High     | Check SQLite/Prisma docs early |
| Add loading states to buttons                 | Dev 2     | Medium   | Add in Sprint 2                |
| Create reusable form components               | Dev 2     | Low      | Consider in Sprint 4           |

### What Should We STOP Doing?

| Item                                          | Raised By | Priority | Action                      |
| --------------------------------------------- | --------- | -------- | --------------------------- |
| Assuming all Prisma features work with SQLite | Dev 1     | High     | Always verify compatibility |
| Leaving error handling for last               | Dev 2     | Medium   | Build errors as we go       |

### What Should We CONTINUE Doing?

| Item                                        | Raised By |
| ------------------------------------------- | --------- |
| Clear task division between team members    | Both      |
| Daily communication and quick sync-ups      | Both      |
| Testing features immediately after building | Dev 1     |
| Using Postman for API testing               | Dev 1     |

### Action Items for Next Sprint

| Action                            | Owner | Due            |
| --------------------------------- | ----- | -------------- |
| Create tech limitations checklist | Dev 1 | Sprint 2 Day 1 |
| Add loading states to all forms   | Dev 2 | Sprint 2       |
| Document SQLite workarounds       | Dev 1 | Sprint 2 Day 1 |

### Team Morale

**How do you feel about the sprint?**

- Dev 1: "Great start, learned a lot about Prisma"
- Dev 2: "Happy with UI progress, excited for next features"

**Confidence for next sprint (1-5):** 4.5

---

_Sprint 1 Ceremonies - EcoChain Scrum Team_
