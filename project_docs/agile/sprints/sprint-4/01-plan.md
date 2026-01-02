# Sprint 4 Plan

**Project:** EcoChain  
**Sprint Number:** 4  
**Duration:** December 26, 2025 - January 1, 2026  
**Sprint Goal:** Polish the MVP for demonstration with status tracking and UI improvements  
**Theme:** Demo-Ready Polish

---

## Sprint Overview

### Sprint Goal

**Make the MVP demo-ready with status tracking updates, bug fixes, and UI polish**

### Team Capacity

| Team Member | Role     | Availability                  |
| ----------- | -------- | ----------------------------- |
| Full Team   | Dev Team | 70% (post-holiday, New Year's |

### Velocity Reference

- Sprint 1: 12 points
- Sprint 2: 21 points
- Sprint 3: 16 points
- Sprint 4 Commitment: 14 points (focus on polish)

---

## Sprint Backlog

### Selected User Stories

| ID     | Story                      | Priority | Points | Status  |
| ------ | -------------------------- | -------- | ------ | ------- |
| US-015 | Update Item Status (Donor) | High     | 3      | ✅ Done |
| US-016 | Status Badge Display       | Medium   | 2      | ✅ Done |
| US-017 | Visual Polish              | Medium   | 5      | ✅ Done |
| BUG-01 | Double-Click Prevention    | High     | 2      | ✅ Done |
| BUG-02 | JWT Expiry Handling        | Medium   | 2      | ✅ Done |

**Total Story Points:** 14

---

## Task Breakdown

### US-015: Update Item Status (Donor) (3 points)

| Task                                 | Assignee | Estimate | Status  |
| ------------------------------------ | -------- | -------- | ------- |
| Add status dropdown to donor's items | Dev 2    | 1h       | ✅ Done |
| Create updateStatus endpoint         | Dev 1    | 1h       | ✅ Done |
| Emit status:updated socket event     | Dev 1    | 1h       | ✅ Done |
| Update UI on status change           | Dev 2    | 1h       | ✅ Done |

### US-016: Status Badge Display (2 points)

| Task                           | Assignee | Estimate | Status  |
| ------------------------------ | -------- | -------- | ------- |
| Create StatusBadge component   | Dev 2    | 1h       | ✅ Done |
| Color code by status           | Dev 2    | 0.5h     | ✅ Done |
| Add badge to all item displays | Dev 2    | 1h       | ✅ Done |
| Make badges responsive         | Dev 2    | 0.5h     | ✅ Done |

### US-017: Visual Polish (5 points)

| Task                          | Assignee | Estimate | Status  |
| ----------------------------- | -------- | -------- | ------- |
| Review and improve typography | Dev 2    | 1h       | ✅ Done |
| Add loading skeletons         | Dev 2    | 2h       | ✅ Done |
| Polish button styles          | Dev 2    | 1h       | ✅ Done |
| Add hover effects             | Dev 2    | 1h       | ✅ Done |
| Improve empty states          | Dev 2    | 1h       | ✅ Done |
| Final responsive checks       | Dev 2    | 1h       | ✅ Done |

### BUG-01: Double-Click Prevention (2 points)

| Task                             | Assignee | Estimate | Status  |
| -------------------------------- | -------- | -------- | ------- |
| Add loading state to claim       | Dev 2    | 1h       | ✅ Done |
| Disable button during API call   | Dev 2    | 0.5h     | ✅ Done |
| Add loading state to create item | Dev 2    | 1h       | ✅ Done |
| Test all forms                   | Both     | 0.5h     | ✅ Done |

### BUG-02: JWT Expiry Handling (2 points)

| Task                           | Assignee | Estimate | Status  |
| ------------------------------ | -------- | -------- | ------- |
| Detect 401 response globally   | Dev 1    | 1h       | ✅ Done |
| Clear auth context on expiry   | Dev 1    | 0.5h     | ✅ Done |
| Redirect to login              | Dev 1    | 0.5h     | ✅ Done |
| Show "Session expired" message | Dev 2    | 0.5h     | ✅ Done |

---

## Demo Preparation Checklist

| Item                     | Status |
| ------------------------ | ------ |
| All features working     | ✅     |
| No console errors        | ✅     |
| Responsive on mobile     | ✅     |
| Demo script prepared     | ✅     |
| Sample data seeded       | ✅     |
| Docker deployment tested | ✅     |
| Edge cases handled       | ✅     |

---

## Sprint Burndown

| Day   | Remaining Points | Ideal |
| ----- | ---------------- | ----- |
| Day 1 | 14               | 14    |
| Day 2 | 12               | 12    |
| Day 3 | 9                | 10    |
| Day 4 | 6                | 8     |
| Day 5 | 4                | 6     |
| Day 6 | 2                | 4     |
| Day 7 | 0                | 2     |

**Sprint Velocity:** 14 story points  
**Total Project Velocity:** 63 story points (all sprints)

---

## Buffer Period (Jan 2-5)

After Sprint 4, we have a 4-day buffer for:

- Final bug fixes
- Demo practice
- Documentation review

---

_Sprint 4 Plan - EcoChain Scrum Team_
