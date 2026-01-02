# Sprint 3 Backlog

**Sprint:** 3  
**Duration:** December 19-25, 2025  
**Sprint Goal:** Complete the food rescue cycle with claim functionality  
**Committed Points:** 16  
**Milestone:**  MVP Complete

---

## Selected Product Backlog Items

| PBI ID | Title                   | Priority | Points | Status  |
| ------ | ----------------------- | -------- | ------ | ------- |
| US-011 | Real-Time Item Removal  | High     | 3      | ✅ Done |
| US-012 | Claim Food Item         | High     | 8      | ✅ Done |
| US-013 | View My Claimed Items   | Medium   | 3      | ✅ Done |
| US-014 | Role-Based Claim Button | High     | 2      | ✅ Done |

---

## Task Board

### US-011: Real-Time Item Removal (3 points)

| Task ID | Task Description                       | Estimate | Assignee | Status  |
| ------- | -------------------------------------- | -------- | -------- | ------- |
| T-011-1 | Design item:claimed event structure    | 0.5h     | Dev 1    | ✅ Done |
| T-011-2 | Emit 'item:claimed' on claim           | 1h       | Dev 1    | ✅ Done |
| T-011-3 | Listen for 'item:claimed' in Dashboard | 1h       | Dev 2    | ✅ Done |
| T-011-4 | Remove item from state by ID           | 0.5h     | Dev 2    | ✅ Done |
| T-011-5 | Test removal across multiple windows   | 0.5h     | Both     | ✅ Done |

---

### US-012: Claim Food Item (8 points)

| Task ID  | Task Description                  | Estimate | Assignee | Status  |
| -------- | --------------------------------- | -------- | -------- | ------- |
| T-012-1  | Create itemController.claimItem() | 2h       | Dev 1    | ✅ Done |
| T-012-2  | Validate user is RECEIVER         | 0.5h     | Dev 1    | ✅ Done |
| T-012-3  | Validate item status is AVAILABLE | 0.5h     | Dev 1    | ✅ Done |
| T-012-4  | Update item status to RESERVED    | 0.5h     | Dev 1    | ✅ Done |
| T-012-5  | Link receiver ID to item          | 0.5h     | Dev 1    | ✅ Done |
| T-012-6  | Create PATCH /api/items/:id/claim | 0.5h     | Dev 1    | ✅ Done |
| T-012-7  | Add Claim button to ItemCard      | 1h       | Dev 2    | ✅ Done |
| T-012-8  | Handle claim API call             | 1h       | Dev 2    | ✅ Done |
| T-012-9  | Show success/error feedback       | 1h       | Dev 2    | ✅ Done |
| T-012-10 | Disable button during request     | 0.5h     | Dev 2    | ✅ Done |
| T-012-11 | Emit socket event after claim     | 0.5h     | Dev 1    | ✅ Done |
| T-012-12 | Test race condition handling      | 0.5h     | Both     | ✅ Done |

---

### US-013: View My Claimed Items (3 points)

| Task ID | Task Description                      | Estimate | Assignee | Status  |
| ------- | ------------------------------------- | -------- | -------- | ------- |
| T-013-1 | Create itemController.getMyClaims()   | 1h       | Dev 1    | ✅ Done |
| T-013-2 | Filter items by receiverId            | 0.5h     | Dev 1    | ✅ Done |
| T-013-3 | Create GET /api/items/my-claims route | 0.5h     | Dev 1    | ✅ Done |
| T-013-4 | Build MyClaims.jsx page               | 2h       | Dev 2    | ✅ Done |
| T-013-5 | Show donor info on claimed items      | 1h       | Dev 2    | ✅ Done |
| T-013-6 | Add empty state message               | 0.5h     | Dev 2    | ✅ Done |

---

### US-014: Role-Based Claim Button (2 points)

| Task ID | Task Description                     | Estimate | Assignee | Status  |
| ------- | ------------------------------------ | -------- | -------- | ------- |
| T-014-1 | Check user role in ItemCard          | 0.5h     | Dev 2    | ✅ Done |
| T-014-2 | Hide claim button for DONOR          | 0.5h     | Dev 2    | ✅ Done |
| T-014-3 | Show "Your Post" badge on own items  | 1h       | Dev 2    | ✅ Done |
| T-014-4 | Server-side role validation in claim | 0.5h     | Dev 1    | ✅ Done |
| T-014-5 | Return 403 if donor tries to claim   | 0.5h     | Dev 1    | ✅ Done |

---

## Burndown Data

| Day | Date   | Tasks Remaining | Story Points Remaining |
| --- | ------ | --------------- | ---------------------- |
| 0   | Dec 19 | 31              | 16                     |
| 1   | Dec 20 | 26              | 14                     |
| 2   | Dec 21 | 20              | 11                     |
| 3   | Dec 22 | 14              | 8                      |
| 4   | Dec 23 | 8               | 5                      |
| 5   | Dec 24 | 4               | 2                      |
| 6   | Dec 25 | 0               | 0                      |

---

## Sprint Summary

| Metric           | Value            |
| ---------------- | ---------------- |
| Total Tasks      | 31               |
| Tasks Completed  | 31               |
| Points Delivered | 16/16            |
| Completion Rate  | 100%             |
| **Milestone**    | **MVP COMPLETE** |

---

_Sprint 3 Backlog - EcoChain Development Team_
