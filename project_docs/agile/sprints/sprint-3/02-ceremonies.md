# Sprint 3 Ceremonies

**Sprint:** 3  
**Duration:** December 19-25, 2025  
**Sprint Goal:** Complete the food rescue cycle with claim functionality  
**Milestone:**  MVP Complete

---

## Sprint Planning Meeting

**Date:** December 19, 2025 (Thursday)  
**Time:** 9:00 AM - 10:00 AM

### Context

**Scrum Master:**

> "This sprint includes Christmas holidays. We have reduced capacity. I recommend we commit to 16 points instead of stretching."

**Product Owner:**

> "This sprint completes the MVP. Claim functionality is critical - it's the end of the user journey."

### Sprint Goal

"Enable receivers to claim available items, with real-time removal from all dashboards, completing the core food rescue cycle."

### Selected User Stories

| ID     | Story                   | Points | Notes                   |
| ------ | ----------------------- | ------ | ----------------------- |
| US-011 | Real-Time Item Removal  | 3      | Socket event for claims |
| US-012 | Claim Food Item         | 8      | Core receiver action    |
| US-013 | View My Claimed Items   | 3      | Receiver tracking       |
| US-014 | Role-Based Claim Button | 2      | UX separation           |

**Total:** 16 points (adjusted for holidays)

---

## Daily Scrums

### Day 1 - Thursday, December 19, 2025

| Who   | Yesterday         | Today                                       | Blockers |
| ----- | ----------------- | ------------------------------------------- | -------- |
| Dev 1 | Sprint 2 complete | Design claim endpoint, start implementation | None     |
| Dev 2 | Sprint 2 complete | Plan Claim button UI integration            | None     |

---

### Day 2 - Friday, December 20, 2025

| Who   | Yesterday                 | Today                                           | Blockers |
| ----- | ------------------------- | ----------------------------------------------- | -------- |
| Dev 1 | Claim controller skeleton | Add validations (receiver only, available only) | None     |
| Dev 2 | UI planning done          | Add Claim button to ItemCard                    | None     |

---

### Day 3 - Saturday, December 21, 2025

| Who   | Yesterday                                   | Today                          | Blockers |
| ----- | ------------------------------------------- | ------------------------------ | -------- |
| Dev 1 | Claim validations done, tested with Postman | Emit item:claimed socket event | None     |
| Dev 2 | Claim button added with onClick             | Handle API call, show feedback | None     |

---

### Day 4 - Sunday, December 22, 2025

| Who   | Yesterday                  | Today                                      | Blockers |
| ----- | -------------------------- | ------------------------------------------ | -------- |
| Dev 1 | Socket event working       | Test real-time removal across clients      | None     |
| Dev 2 | Claim API integration done | Listen for item:claimed, remove from state | None     |

**Demo:** Showed working claim flow to team - items disappearing in real-time!

---

### Day 5 - Monday, December 23, 2025

| Who   | Yesterday                 | Today                        | Blockers             |
| ----- | ------------------------- | ---------------------------- | -------------------- |
| Dev 1 | Real-time removal working | Build MyClaims page backend  | Reduced availability |
| Dev 2 | Socket listener working   | Build MyClaims page frontend | Reduced availability |

---

### Day 6 - Tuesday, December 24, 2025 (Christmas Eve)

**Time:** 10:00 AM  
**Duration:** 8 minutes (shortened)

| Who   | Yesterday              | Today                     | Blockers     |
| ----- | ---------------------- | ------------------------- | ------------ |
| Dev 1 | MyClaims endpoint done | Light testing, bug fixes  | Holiday prep |
| Dev 2 | MyClaims page done     | Add role-based visibility | Holiday prep |

**Scrum Master:** "Keep it light today. Core features are done."

---

### Day 7 - Wednesday, December 25, 2025 (Christmas)

**Async Stand-up via Chat**

- Dev 1: "Final testing done. All green. Merry Christmas! 🎄"
- Dev 2: "Role-based button working. Ready for review. Happy holidays!"

---

## Sprint Review

**Date:** December 25, 2025  
**Time:** 2:00 PM - 2:30 PM (Remote, shortened for holiday)

### Demonstration Summary

| Feature           | Status  | Notes                      |
| ----------------- | ------- | -------------------------- |
| Claim Item        | ✅ Pass | Works perfectly            |
| Real-Time Removal | ✅ Pass | Instant across all clients |
| My Claims Page    | ✅ Pass | Shows claimed items        |
| Role-Based Button | ✅ Pass | Hidden for donors          |

### 🎉 MVP MILESTONE ACHIEVED

**Product Owner:**

> "We have a working MVP! The complete food rescue cycle is functional. This is a major milestone. Congratulations team!"

### Sprint Metrics

| Metric            | Value |
| ----------------- | ----- |
| Points Committed  | 16    |
| Points Delivered  | 16    |
| Stories Completed | 4/4   |
| Bugs Found        | 2     |
| Bugs Deferred     | 2     |

### Increment Declared

**Sprint 3 Increment:** Complete claim functionality with real-time removal, My Claims page, and role-based access control. **MVP COMPLETE.**

---

## Sprint Retrospective

**Date:** December 26, 2025 (day after Christmas)  
**Time:** 10:00 AM - 10:30 AM

### What Went Well ✅

- Completed MVP despite holiday period
- Front-loading work early in sprint was smart
- Claim real-time removal exceeded expectations
- Team async communication worked well

### What Didn't Go Well ❌

- Two bugs deferred (double-click, JWT expiry)
- Less testing time than ideal
- Holiday interruptions affected flow

### Action Items

| Action                                | Owner | Due      |
| ------------------------------------- | ----- | -------- |
| Fix double-click bug (loading states) | Dev 2 | Sprint 4 |
| Handle JWT expiry gracefully          | Dev 1 | Sprint 4 |
| Add comprehensive error handling      | Both  | Sprint 4 |

### Team Morale

**Sprint 3 confidence:** 4.6/5

> "MVP done! Now let's polish it."

---

_Sprint 3 Ceremonies - EcoChain Scrum Team_
