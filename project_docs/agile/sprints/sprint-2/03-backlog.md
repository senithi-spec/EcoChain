# Sprint 2 Backlog

**Sprint:** 2  
**Duration:** December 12-18, 2025  
**Sprint Goal:** Enable donors to post food items and build real-time dashboard  
**Committed Points:** 21

---

## Selected Product Backlog Items

| PBI ID | Title                | Priority | Points | Status  |
| ------ | -------------------- | -------- | ------ | ------- |
| US-006 | Post Food Item       | High     | 5      | ✅ Done |
| US-007 | Photo Upload         | Medium   | 5      | ✅ Done |
| US-008 | View My Posted Items | Medium   | 3      | ✅ Done |
| US-009 | Live Items Feed      | High     | 5      | ✅ Done |
| US-010 | Real-Time New Item   | High     | 3      | ✅ Done |

---

## Task Board

### US-006: Post Food Item (5 points)

| Task ID | Task Description                    | Estimate | Assignee | Status  |
| ------- | ----------------------------------- | -------- | -------- | ------- |
| T-006-1 | Add Item model to Prisma schema     | 1h       | Dev 1    | ✅ Done |
| T-006-2 | Run prisma db push for Item         | 0.5h     | Dev 1    | ✅ Done |
| T-006-3 | Create itemController.createItem()  | 2h       | Dev 1    | ✅ Done |
| T-006-4 | Add expiry date validation (future) | 1h       | Dev 1    | ✅ Done |
| T-006-5 | Create POST /api/items route        | 0.5h     | Dev 1    | ✅ Done |
| T-006-6 | Build PostItem.jsx page             | 2h       | Dev 2    | ✅ Done |
| T-006-7 | Add form fields (name, qty, expiry) | 1h       | Dev 2    | ✅ Done |
| T-006-8 | Add client-side validation          | 1h       | Dev 2    | ✅ Done |
| T-006-9 | Connect form to API                 | 1h       | Dev 2    | ✅ Done |

---

### US-007: Photo Upload (5 points)

| Task ID | Task Description                 | Estimate | Assignee | Status  |
| ------- | -------------------------------- | -------- | -------- | ------- |
| T-007-1 | Install and configure Multer     | 1h       | Dev 1    | ✅ Done |
| T-007-2 | Create /uploads directory        | 0.5h     | Dev 1    | ✅ Done |
| T-007-3 | Add file filter (JPG/PNG only)   | 0.5h     | Dev 1    | ✅ Done |
| T-007-4 | Add file size limit (5MB)        | 0.5h     | Dev 1    | ✅ Done |
| T-007-5 | Serve static files from /uploads | 0.5h     | Dev 1    | ✅ Done |
| T-007-6 | Add photo field to PostItem form | 1h       | Dev 2    | ✅ Done |
| T-007-7 | Handle FormData in API request   | 1h       | Dev 2    | ✅ Done |
| T-007-8 | Show photo preview before upload | 1h       | Dev 2    | ✅ Done |
| T-007-9 | Display photo in item cards      | 1h       | Dev 2    | ✅ Done |

---

### US-008: View My Posted Items (3 points)

| Task ID | Task Description                     | Estimate | Assignee | Status  |
| ------- | ------------------------------------ | -------- | -------- | ------- |
| T-008-1 | Create itemController.getMyPosts()   | 1h       | Dev 1    | ✅ Done |
| T-008-2 | Filter items by donorId              | 0.5h     | Dev 1    | ✅ Done |
| T-008-3 | Create GET /api/items/my-posts route | 0.5h     | Dev 1    | ✅ Done |
| T-008-4 | Build MyPosts.jsx page               | 2h       | Dev 2    | ✅ Done |
| T-008-5 | Display status badges                | 1h       | Dev 2    | ✅ Done |
| T-008-6 | Add empty state message              | 0.5h     | Dev 2    | ✅ Done |

---

### US-009: Live Items Feed (5 points)

| Task ID | Task Description                    | Estimate | Assignee | Status  |
| ------- | ----------------------------------- | -------- | -------- | ------- |
| T-009-1 | Install and setup Socket.io server  | 1h       | Dev 1    | ✅ Done |
| T-009-2 | Configure CORS for Socket.io        | 0.5h     | Dev 1    | ✅ Done |
| T-009-3 | Create socket.js client service     | 1h       | Dev 2    | ✅ Done |
| T-009-4 | Create itemController.getAllItems() | 1h       | Dev 1    | ✅ Done |
| T-009-5 | Create GET /api/items route         | 0.5h     | Dev 1    | ✅ Done |
| T-009-6 | Build Dashboard.jsx page            | 2h       | Dev 2    | ✅ Done |
| T-009-7 | Build ItemCard.jsx component        | 2h       | Dev 2    | ✅ Done |
| T-009-8 | Style cards with macOS theme        | 1h       | Dev 2    | ✅ Done |
| T-009-9 | Connect socket on page mount        | 0.5h     | Dev 2    | ✅ Done |

---

### US-010: Real-Time New Item (3 points)

| Task ID | Task Description                    | Estimate | Assignee | Status  |
| ------- | ----------------------------------- | -------- | -------- | ------- |
| T-010-1 | Emit 'item:new' event on create     | 1h       | Dev 1    | ✅ Done |
| T-010-2 | Include item data in event payload  | 0.5h     | Dev 1    | ✅ Done |
| T-010-3 | Listen for 'item:new' in Dashboard  | 1h       | Dev 2    | ✅ Done |
| T-010-4 | Add new item to state (top of list) | 0.5h     | Dev 2    | ✅ Done |
| T-010-5 | Test across multiple browser tabs   | 0.5h     | Both     | ✅ Done |
| T-010-6 | Add socket reconnection logic       | 0.5h     | Dev 1    | ✅ Done |

---

## Burndown Data

| Day | Date   | Tasks Remaining | Story Points Remaining |
| --- | ------ | --------------- | ---------------------- |
| 0   | Dec 12 | 45              | 21                     |
| 1   | Dec 13 | 38              | 18                     |
| 2   | Dec 14 | 30              | 14                     |
| 3   | Dec 15 | 22              | 11                     |
| 4   | Dec 16 | 14              | 8                      |
| 5   | Dec 17 | 6               | 4                      |
| 6   | Dec 18 | 0               | 0                      |

---

## Sprint Summary

| Metric           | Value |
| ---------------- | ----- |
| Total Tasks      | 45    |
| Tasks Completed  | 45    |
| Points Delivered | 21/21 |
| Completion Rate  | 100%  |

---

_Sprint 2 Backlog - EcoChain Development Team_
