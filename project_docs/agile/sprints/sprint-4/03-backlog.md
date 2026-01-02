# Sprint 4 Backlog

**Sprint:** 4 (Final Sprint)  
**Duration:** December 26, 2025 - January 1, 2026  
**Sprint Goal:** Polish the MVP for demonstration  
**Committed Points:** 14  
**Theme:** Demo-Ready Polish

---

## Selected Product Backlog Items

| PBI ID | Title                      | Priority | Points | Status  |
| ------ | -------------------------- | -------- | ------ | ------- |
| US-015 | Update Item Status (Donor) | High     | 3      | ✅ Done |
| US-016 | Status Badge Display       | Medium   | 2      | ✅ Done |
| US-017 | Visual Polish              | Medium   | 5      | ✅ Done |
| BUG-01 | Double-Click Prevention    | High     | 2      | ✅ Done |
| BUG-02 | JWT Expiry Handling        | Medium   | 2      | ✅ Done |

---

## Task Board

### US-015: Update Item Status (Donor) (3 points)

| Task ID | Task Description                     | Estimate | Assignee | Status  |
| ------- | ------------------------------------ | -------- | -------- | ------- |
| T-015-1 | Create itemController.updateStatus() | 1h       | Dev 1    | ✅ Done |
| T-015-2 | Add PATCH /api/items/:id/status      | 0.5h     | Dev 1    | ✅ Done |
| T-015-3 | Validate donor owns item             | 0.5h     | Dev 1    | ✅ Done |
| T-015-4 | Emit status:updated socket event     | 0.5h     | Dev 1    | ✅ Done |
| T-015-5 | Add status dropdown in My Posts      | 1h       | Dev 2    | ✅ Done |
| T-015-6 | Handle API call on change            | 0.5h     | Dev 2    | ✅ Done |
| T-015-7 | Update local state on success        | 0.5h     | Dev 2    | ✅ Done |

---

### US-016: Status Badge Display (2 points)

| Task ID | Task Description                 | Estimate | Assignee | Status  |
| ------- | -------------------------------- | -------- | -------- | ------- |
| T-016-1 | Create StatusBadge.jsx component | 1h       | Dev 2    | ✅ Done |
| T-016-2 | Color code by status             | 0.5h     | Dev 2    | ✅ Done |
| T-016-3 | Integrate badge into ItemCard    | 0.5h     | Dev 2    | ✅ Done |
| T-016-4 | Add to My Posts and My Claims    | 0.5h     | Dev 2    | ✅ Done |
| T-016-5 | Make badges responsive           | 0.5h     | Dev 2    | ✅ Done |

---

### US-017: Visual Polish (5 points)

| Task ID  | Task Description                  | Estimate | Assignee | Status  |
| -------- | --------------------------------- | -------- | -------- | ------- |
| T-017-1  | Review and improve typography     | 1h       | Dev 2    | ✅ Done |
| T-017-2  | Add ItemCardSkeleton component    | 1h       | Dev 2    | ✅ Done |
| T-017-3  | Add skeleton to Dashboard loading | 0.5h     | Dev 2    | ✅ Done |
| T-017-4  | Add skeleton to My Posts loading  | 0.5h     | Dev 2    | ✅ Done |
| T-017-5  | Polish button styles consistently | 1h       | Dev 2    | ✅ Done |
| T-017-6  | Add hover effects to cards        | 0.5h     | Dev 2    | ✅ Done |
| T-017-7  | Add hover effects to buttons      | 0.5h     | Dev 2    | ✅ Done |
| T-017-8  | Improve empty state messages      | 0.5h     | Dev 2    | ✅ Done |
| T-017-9  | Add empty state illustrations     | 0.5h     | Dev 2    | ✅ Done |
| T-017-10 | Final responsive testing          | 1h       | Both     | ✅ Done |

---

### BUG-01: Double-Click Prevention (2 points)

| Task ID | Task Description                    | Estimate | Assignee | Status  |
| ------- | ----------------------------------- | -------- | -------- | ------- |
| B-01-1  | Add isSubmitting state to forms     | 0.5h     | Dev 2    | ✅ Done |
| B-01-2  | Disable claim button during call    | 0.5h     | Dev 2    | ✅ Done |
| B-01-3  | Disable create button during call   | 0.5h     | Dev 2    | ✅ Done |
| B-01-4  | Disable status dropdown during call | 0.5h     | Dev 2    | ✅ Done |
| B-01-5  | Add loading spinner to buttons      | 0.5h     | Dev 2    | ✅ Done |
| B-01-6  | Test all interactive elements       | 0.5h     | Both     | ✅ Done |

---

### BUG-02: JWT Expiry Handling (2 points)

| Task ID | Task Description                  | Estimate | Assignee | Status  |
| ------- | --------------------------------- | -------- | -------- | ------- |
| B-02-1  | Create axios response interceptor | 0.5h     | Dev 1    | ✅ Done |
| B-02-2  | Detect 401 responses globally     | 0.5h     | Dev 1    | ✅ Done |
| B-02-3  | Clear AuthContext on 401          | 0.5h     | Dev 1    | ✅ Done |
| B-02-4  | Clear localStorage on expiry      | 0.5h     | Dev 1    | ✅ Done |
| B-02-5  | Redirect to login page            | 0.5h     | Dev 1    | ✅ Done |
| B-02-6  | Show "Session expired" toast      | 0.5h     | Dev 2    | ✅ Done |
| B-02-7  | Test expiry flow end-to-end       | 0.5h     | Both     | ✅ Done |

---

## Burndown Data

| Day | Date   | Tasks Remaining | Story Points Remaining |
| --- | ------ | --------------- | ---------------------- |
| 0   | Dec 26 | 35              | 14                     |
| 1   | Dec 27 | 29              | 12                     |
| 2   | Dec 28 | 22              | 9                      |
| 3   | Dec 29 | 16              | 6                      |
| 4   | Dec 30 | 10              | 4                      |
| 5   | Dec 31 | 5               | 2                      |
| 6   | Jan 1  | 0               | 0                      |

---

## Sprint Summary

| Metric             | Value             |
| ------------------ | ----------------- |
| Total Tasks        | 35                |
| Tasks Completed    | 35                |
| Points Delivered   | 14/14             |
| Bugs Fixed         | 2/2               |
| Completion Rate    | 100%              |
| **Project Status** | **DEMO READY** 🎉 |

---

_Sprint 4 Backlog - EcoChain Development Team_
