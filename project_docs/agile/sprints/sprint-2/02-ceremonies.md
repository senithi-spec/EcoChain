# Sprint 2 Ceremonies

**Sprint:** 2  
**Duration:** December 12-18, 2025  
**Sprint Goal:** Enable donors to post food items and build real-time dashboard

---

## Sprint Planning Meeting

**Date:** December 12, 2025 (Thursday)  
**Time:** 9:00 AM - 10:30 AM  
**Attendees:** Full Scrum Team

### Previous Sprint Review

**Scrum Master:**

> "Sprint 1 delivered 12 points with 100% completion. We had one blocker (SQLite enum) that was resolved within the day. Team velocity is established at 12 points."

### Sprint Goal Discussion

**Product Owner:**

> "Now that users can authenticate, we need the core functionality: donors posting items and everyone seeing them in real-time. This is the heart of EcoChain."

**Team Discussion:**

- Dev 1: "Socket.io integration might be complex, but I've done it before"
- Dev 2: "Photo upload is new for me, might need some research time"
- SM: "Should we commit to 18 or 21 points?"
- Team: "Let's stretch to 21, we have momentum"

**Sprint Goal Agreed:** "Deliver item posting functionality for donors and a live dashboard that shows available items in real-time using Socket.io."

### Selected User Stories

| ID     | Story                | Points | Rationale                |
| ------ | -------------------- | ------ | ------------------------ |
| US-006 | Post Food Item       | 5      | Core donor functionality |
| US-007 | Photo Upload         | 5      | Trust-building feature   |
| US-008 | View My Posted Items | 3      | Donor needs visibility   |
| US-009 | Live Items Feed      | 5      | Core marketplace view    |
| US-010 | Real-Time New Item   | 3      | Key differentiator       |

**Total Committed:** 21 story points (75% increase from Sprint 1)

### Risk Assessment

| Risk                 | Likelihood | Impact | Mitigation           |
| -------------------- | ---------- | ------ | -------------------- |
| Socket.io complexity | Medium     | High   | Dev 1 has experience |
| Multer configuration | Low        | Medium | Good documentation   |
| File size limits     | Low        | Low    | Set 5MB limit early  |

### Sprint Planning Outcome

✅ Sprint Goal defined  
✅ 5 stories selected (21 points)  
✅ Stretch goal accepted  
✅ Risks identified and mitigated

---

## Daily Scrums

### Day 1 - Thursday, December 12, 2025

**Time:** 9:30 AM  
**Duration:** 12 minutes

| Who   | Yesterday         | Today                                        | Blockers |
| ----- | ----------------- | -------------------------------------------- | -------- |
| Dev 1 | Sprint 1 complete | Add Item model to Prisma, create item routes | None     |
| Dev 2 | Sprint 1 complete | Start PostItem page UI                       | None     |

---

### Day 2 - Friday, December 13, 2025

**Time:** 9:30 AM  
**Duration:** 15 minutes

| Who   | Yesterday                             | Today                             | Blockers |
| ----- | ------------------------------------- | --------------------------------- | -------- |
| Dev 1 | Item model created, basic CRUD routes | Configure Multer for file uploads | None     |
| Dev 2 | PostItem form layout done             | Add file input, form validation   | None     |

**Discussion:**

- Dev 1: "Multer config was straightforward, uploads going to /uploads folder"
- Dev 2: "Need to handle FormData for file uploads in React"

---

### Day 3 - Saturday, December 14, 2025

**Time:** 10:00 AM  
**Duration:** 15 minutes

| Who   | Yesterday                             | Today                                      | Blockers |
| ----- | ------------------------------------- | ------------------------------------------ | -------- |
| Dev 1 | Multer working, file validation added | Serve static files, complete POST endpoint | None     |
| Dev 2 | FormData handling research done       | Integrate photo upload with API            | None     |

**Discussion:**

- Dev 1: "Added express.static for /uploads, photos accessible via URL"
- Dev 2: "FormData working, need to test with actual photos"

---

### Day 4 - Sunday, December 15, 2025

**Time:** 10:00 AM  
**Duration:** 12 minutes

| Who   | Yesterday                           | Today                                 | Blockers |
| ----- | ----------------------------------- | ------------------------------------- | -------- |
| Dev 1 | POST /api/items complete with photo | Setup Socket.io on server             | None     |
| Dev 2 | Photo upload working end-to-end     | Start Dashboard page, create ItemCard | None     |

---

### Day 5 - Monday, December 16, 2025

**Time:** 9:30 AM  
**Duration:** 15 minutes

| Who   | Yesterday                                  | Today                                            | Blockers |
| ----- | ------------------------------------------ | ------------------------------------------------ | -------- |
| Dev 1 | Socket.io server setup done                | Create socket client, emit events on item create | None     |
| Dev 2 | Dashboard layout ready, ItemCard component | Fetch and display items                          | None     |

**Discussion:**

- Dev 1: "Socket connection established, seeing logs on both ends"
- Dev 2: "ItemCard looking good with the macOS styling"

---

### Day 6 - Tuesday, December 17, 2025

**Time:** 9:30 AM  
**Duration:** 15 minutes

| Who   | Yesterday                                 | Today                             | Blockers                |
| ----- | ----------------------------------------- | --------------------------------- | ----------------------- |
| Dev 1 | item:new event emitting, client listening | Test real-time across tabs        | Minor socket drop issue |
| Dev 2 | Dashboard displaying items                | Add socket listener for new items | None                    |

**Discussion:**

- Dev 1: "Socket sometimes drops when tab is inactive"
- SM: "Can we add reconnection logic?"
- Dev 1: "Yes, adding reconnection config"

---

### Day 7 - Wednesday, December 18, 2025

**Time:** 9:30 AM  
**Duration:** 10 minutes

| Who   | Yesterday                          | Today                       | Blockers |
| ----- | ---------------------------------- | --------------------------- | -------- |
| Dev 1 | Socket reconnection added, working | Final testing, MyPosts page | None     |
| Dev 2 | Real-time working in Dashboard     | Polish UI, prepare demo     | None     |

---

## Sprint Review

**Date:** December 18, 2025 (Wednesday)  
**Time:** 3:00 PM - 3:45 PM

### Demonstration

| Feature            | Result     | Stakeholder Reaction         |
| ------------------ | ---------- | ---------------------------- |
| Post Item Form     | ✅ Working | "Clean and intuitive"        |
| Photo Upload       | ✅ Working | "Photos look great on cards" |
| Expiry Validation  | ✅ Working | "Good, prevents mistakes"    |
| My Posts Page      | ✅ Working | "Useful for tracking"        |
| Live Dashboard     | ✅ Working | "This is impressive!"        |
| Real-Time New Item | ✅ Working | "Wow, instant updates!"      |

### Stakeholder Feedback

**Product Owner:**

> "The real-time feature is exactly what we envisioned. Items appearing instantly creates urgency and engagement. Excellent work!"

**Feature Requests Added to Backlog:**

- Item categories (Bakery, Produce, etc.)
- Expiry countdown timer on cards
- Bulk item posting

### Sprint Metrics

| Metric            | Value              |
| ----------------- | ------------------ |
| Points Committed  | 21                 |
| Points Delivered  | 21                 |
| Velocity Increase | +75% from Sprint 1 |
| Bugs Found        | 3                  |
| Bugs Fixed        | 3                  |

### Increment Declared

**Sprint 2 Increment:** Working item posting system with photo upload, real-time dashboard with Socket.io integration, and My Posts page for donors.

---

## Sprint Retrospective

**Date:** December 18, 2025  
**Time:** 4:00 PM - 4:30 PM

### Safety Check

Average Score: 5.0

### What Went Well ✅

| Item                                         | Impact             |
| -------------------------------------------- | ------------------ |
| Socket.io integration smoother than expected | Saved 2 hours      |
| Photo upload worked first try                | No rework needed   |
| Team velocity increased significantly        | 75% more delivered |
| Real-time demo impressed stakeholders        | Positive feedback  |

### What Didn't Go Well ❌

| Item                             | Impact          | Resolution         |
| -------------------------------- | --------------- | ------------------ |
| Socket drops on inactive tabs    | UX issue        | Added reconnection |
| ItemCard component got too large | Maintainability | Refactor later     |
| Forgot empty state for dashboard | UX gap          | Add in Sprint 3    |

### Action Items

| Action                              | Owner | Due            |
| ----------------------------------- | ----- | -------------- |
| Add empty states to all list pages  | Dev 2 | Sprint 3       |
| Consider extracting Badge component | Dev 2 | Sprint 4       |
| Document socket event patterns      | Dev 1 | Sprint 3 Day 1 |

### Team Confidence

**Sprint 3 confidence:** 4.8/5

> "We're in a good rhythm now!"

---

_Sprint 2 Ceremonies - EcoChain Scrum Team_
