# Sprint 3 Plan

**Project:** EcoChain  
**Sprint Number:** 3  
**Duration:** December 19 - December 25, 2025  
**Sprint Goal:** Complete the food rescue cycle with claim functionality  
**Milestone:**  MVP Complete

---

## Sprint Overview

### Sprint Goal

**Enable receivers to claim available items, with real-time removal from all dashboards, completing the core food rescue cycle.**

### Team Capacity

| Team Member | Role     | Availability         |
| ----------- | -------- | -------------------- |
| Full Team   | Dev Team | 80% (holiday period) |

### Velocity Reference

- Sprint 1 Velocity: 12 points
- Sprint 2 Velocity: 21 points
- Sprint 3 Commitment: 16 points (reduced for holidays)

---

## Sprint Backlog

### Selected User Stories

| ID     | Story                   | Priority | Points | Status  |
| ------ | ----------------------- | -------- | ------ | ------- |
| US-011 | Real-Time Item Removal  | High     | 3      | ✅ Done |
| US-012 | Claim Food Item         | High     | 8      | ✅ Done |
| US-013 | View My Claimed Items   | Medium   | 3      | ✅ Done |
| US-014 | Role-Based Claim Button | High     | 2      | ✅ Done |

**Total Story Points:** 16

---

## Task Breakdown

### US-011: Real-Time Item Removal (3 points)

| Task                                   | Assignee | Estimate | Status  |
| -------------------------------------- | -------- | -------- | ------- |
| Emit 'item:claimed' event on claim     | Dev      | 1h       | ✅ Done |
| Listen for 'item:claimed' in Dashboard | Dev      | 1h       | ✅ Done |
| Remove item from state by ID           | Dev      | 1h       | ✅ Done |
| Test across multiple browser windows   | Dev      | 0.5h     | ✅ Done |

### US-012: Claim Food Item (8 points)

| Task                                    | Assignee | Estimate | Status  |
| --------------------------------------- | -------- | -------- | ------- |
| Create itemController.claimItem()       | Dev      | 2h       | ✅ Done |
| Validate user is RECEIVER               | Dev      | 1h       | ✅ Done |
| Validate item is AVAILABLE              | Dev      | 1h       | ✅ Done |
| Update item status to RESERVED          | Dev      | 1h       | ✅ Done |
| Link receiver ID to item                | Dev      | 0.5h     | ✅ Done |
| Create PATCH /api/items/:id/claim route | Dev      | 0.5h     | ✅ Done |
| Add Claim button to ItemCard            | Dev      | 1h       | ✅ Done |
| Handle claim API call in frontend       | Dev      | 1h       | ✅ Done |
| Show success/error feedback             | Dev      | 1h       | ✅ Done |
| Emit socket event after claim           | Dev      | 1h       | ✅ Done |

### US-013: View My Claimed Items (3 points)

| Task                                  | Assignee | Estimate | Status  |
| ------------------------------------- | -------- | -------- | ------- |
| Create itemController.getMyClaims()   | Dev      | 1h       | ✅ Done |
| Create GET /api/items/my-claims route | Dev      | 0.5h     | ✅ Done |
| Build MyClaims.jsx page               | Dev      | 2h       | ✅ Done |
| Show donor info on claimed items      | Dev      | 1h       | ✅ Done |

### US-014: Role-Based Claim Button (2 points)

| Task                                 | Assignee | Estimate | Status  |
| ------------------------------------ | -------- | -------- | ------- |
| Check user role in ItemCard          | Dev      | 0.5h     | ✅ Done |
| Hide claim button for DONOR          | Dev      | 0.5h     | ✅ Done |
| Show "Your Post" badge for own items | Dev      | 1h       | ✅ Done |
| Server-side role validation          | Dev      | 0.5h     | ✅ Done |

---

## Holiday Considerations

| Date   | Day       | Impact           |
| ------ | --------- | ---------------- |
| Dec 24 | Wednesday | Reduced capacity |
| Dec 25 | Thursday  | Minimal work     |

**Plan:** Front-load work early in week, light touch on holidays.

---

## Sprint Burndown

| Day   | Remaining Points | Ideal |
| ----- | ---------------- | ----- |
| Day 1 | 16               | 16    |
| Day 2 | 14               | 13.7  |
| Day 3 | 11               | 11.4  |
| Day 4 | 8                | 9.1   |
| Day 5 | 5                | 6.9   |
| Day 6 | 2                | 4.6   |
| Day 7 | 0                | 2.3   |

**Sprint Velocity:** 16 story points  
**Cumulative Velocity:** 49 story points (Sprints 1-3)

---

## MVP Complete 

With Sprint 3, we completed the Minimum Viable Product:

```
 Donor Posts Item →  Dashboard Shows Item →  Receiver Claims →  Item Removed
```

---

_Sprint 3 Plan - EcoChain Scrum Team_
