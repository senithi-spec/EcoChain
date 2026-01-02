# Sprint 2 Plan

**Project:** EcoChain  
**Sprint Number:** 2  
**Duration:** December 12 - December 18, 2025  
**Sprint Goal:** Enable donors to post food items and build real-time dashboard

---

## Sprint Overview

### Sprint Goal

**Deliver item posting functionality for donors and a live dashboard that shows available items in real-time using Socket.io.**

### Team Capacity

| Team Member | Role     | Availability |
| ----------- | -------- | ------------ |
| Full Team   | Dev Team | 100%         |

### Velocity Reference

- Sprint 1 Velocity: 12 points
- Sprint 2 Commitment: 21 points (stretch goal due to momentum)

---

## Sprint Backlog

### Selected User Stories

| ID     | Story                | Priority | Points | Status  |
| ------ | -------------------- | -------- | ------ | ------- |
| US-006 | Post Food Item       | High     | 5      | ✅ Done |
| US-007 | Photo Upload         | Medium   | 5      | ✅ Done |
| US-008 | View My Posted Items | Medium   | 3      | ✅ Done |
| US-009 | Live Items Feed      | High     | 5      | ✅ Done |
| US-010 | Real-Time New Item   | High     | 3      | ✅ Done |

**Total Story Points:** 21

---

## Task Breakdown

### US-006: Post Food Item (5 points)

| Task                                     | Assignee | Estimate | Status  |
| ---------------------------------------- | -------- | -------- | ------- |
| Create Item model in Prisma schema       | Dev      | 0.5h     | ✅ Done |
| Run prisma db push for new model         | Dev      | 0.5h     | ✅ Done |
| Create itemController.createItem()       | Dev      | 2h       | ✅ Done |
| Add expiry date validation (future only) | Dev      | 1h       | ✅ Done |
| Create /api/items POST route             | Dev      | 0.5h     | ✅ Done |
| Build PostItem.jsx page                  | Dev      | 3h       | ✅ Done |
| Add client-side form validation          | Dev      | 1h       | ✅ Done |

### US-007: Photo Upload (5 points)

| Task                                      | Assignee | Estimate | Status  |
| ----------------------------------------- | -------- | -------- | ------- |
| Configure Multer middleware               | Dev      | 1h       | ✅ Done |
| Setup /uploads folder with static serving | Dev      | 0.5h     | ✅ Done |
| Add file validation (JPG/PNG, 5MB)        | Dev      | 1h       | ✅ Done |
| Add photo field to post form              | Dev      | 1h       | ✅ Done |
| Handle FormData in API request            | Dev      | 1h       | ✅ Done |
| Display photo in item cards               | Dev      | 1h       | ✅ Done |

### US-008: View My Posted Items (3 points)

| Task                               | Assignee | Estimate | Status  |
| ---------------------------------- | -------- | -------- | ------- |
| Create itemController.getMyPosts() | Dev      | 1h       | ✅ Done |
| Create /api/items/my-posts route   | Dev      | 0.5h     | ✅ Done |
| Build MyPosts.jsx page             | Dev      | 2h       | ✅ Done |
| Display item status badges         | Dev      | 1h       | ✅ Done |

### US-009: Live Items Feed (5 points)

| Task                                | Assignee | Estimate | Status  |
| ----------------------------------- | -------- | -------- | ------- |
| Setup Socket.io on server           | Dev      | 1h       | ✅ Done |
| Create socket.js client service     | Dev      | 1h       | ✅ Done |
| Create itemController.getAllItems() | Dev      | 1h       | ✅ Done |
| Build Dashboard.jsx page            | Dev      | 2h       | ✅ Done |
| Build ItemCard.jsx component        | Dev      | 2h       | ✅ Done |
| Style cards with macOS theme        | Dev      | 1h       | ✅ Done |

### US-010: Real-Time New Item (3 points)

| Task                                  | Assignee | Estimate | Status  |
| ------------------------------------- | -------- | -------- | ------- |
| Emit 'item:new' on item creation      | Dev      | 1h       | ✅ Done |
| Listen for 'item:new' in Dashboard    | Dev      | 1h       | ✅ Done |
| Add new item to state without refresh | Dev      | 1h       | ✅ Done |
| Test across multiple browser tabs     | Dev      | 0.5h     | ✅ Done |

---

## Sprint Burndown

| Day   | Remaining Points | Ideal |
| ----- | ---------------- | ----- |
| Day 1 | 21               | 21    |
| Day 2 | 18               | 18    |
| Day 3 | 15               | 15    |
| Day 4 | 12               | 12    |
| Day 5 | 8                | 9     |
| Day 6 | 4                | 6     |
| Day 7 | 0                | 3     |

**Sprint Velocity:** 21 story points  
**Cumulative Velocity:** 33 story points (Sprint 1 + 2)

---

## Key Decisions Made

1. **Photo Storage:** Store photos locally in /uploads rather than external service (simpler for MVP)
2. **Socket Events:** Use descriptive event names like `item:new` for clarity
3. **Card Design:** Adopted macOS-inspired glass effect for professional look

---

_Sprint 2 Plan - EcoChain Scrum Team_
