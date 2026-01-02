# Scrum Artifacts Summary

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Last Updated:** January 2, 2026

---

## Overview

This document provides a comprehensive summary of all Scrum artifacts created and maintained throughout the EcoChain project. Scrum defines three primary artifacts, each with a commitment that ensures transparency and focus.

---

## The Three Scrum Artifacts

| Artifact            | Commitment         | Purpose                         |
| ------------------- | ------------------ | ------------------------------- |
| **Product Backlog** | Product Goal       | What we want to build           |
| **Sprint Backlog**  | Sprint Goal        | What we're building this sprint |
| **Increment**       | Definition of Done | What we've built                |

---

# 1. Product Backlog

**Commitment:** Product Goal  
**Owner:** Product Owner

## Product Goal

> **"Create a real-time web platform that connects food donors with receivers, reducing food waste by enabling instant visibility and claiming of surplus food items."**

## Backlog Statistics

| Metric                  | Value               |
| ----------------------- | ------------------- |
| Total User Stories      | 23                  |
| Total Story Points      | 80                  |
| Stories Completed       | 23                  |
| Points Delivered        | 75                  |
| Backlog Items Remaining | 5 (future features) |

## Backlog by Priority

| Priority | Stories | Points | Status      |
| -------- | ------- | ------ | ----------- |
| High     | 12      | 43     | ✅ All Done |
| Medium   | 9       | 33     | ✅ All Done |
| Low      | 2       | 4      | ✅ All Done |

## Backlog by Epic

| Epic                   | Stories | Points | Status      |
| ---------------------- | ------- | ------ | ----------- |
| User Authentication    | 5       | 12     | ✅ Complete |
| Item Management        | 3       | 13     | ✅ Complete |
| Marketplace Dashboard  | 3       | 11     | ✅ Complete |
| Claim Management       | 3       | 13     | ✅ Complete |
| UI/UX Enhancements     | 4       | 12     | ✅ Complete |
| DevOps & Documentation | 3       | 11     | ✅ Complete |
| Error Handling         | 2       | 6      | ✅ Complete |

## Future Backlog (Post-Project)

| Item                | Priority | Notes               |
| ------------------- | -------- | ------------------- |
| QR Verification     | High     | Digital handover    |
| Admin Dashboard     | High     | User management     |
| Email Notifications | Medium   | Claim confirmations |
| Dietary Filters     | Medium   | Vegan, Gluten-Free  |
| Analytics Dashboard | Low      | Impact metrics      |

---

# 2. Sprint Backlog

**Commitment:** Sprint Goal  
**Owner:** Development Team

## Sprint Goals

| Sprint   | Sprint Goal                                                            | Status      |
| -------- | ---------------------------------------------------------------------- | ----------- |
| Sprint 1 | "Establish project foundation and complete user authentication system" | ✅ Achieved |
| Sprint 2 | "Enable donors to post food items and build real-time dashboard"       | ✅ Achieved |
| Sprint 3 | "Complete the food rescue cycle with claim functionality"              | ✅ Achieved |
| Sprint 4 | "Polish UI, add Docker support, and enhance error handling"            | ✅ Achieved |

## Sprint Backlog Summary

| Sprint    | PBIs Selected | Tasks Created | Completed | Rate     |
| --------- | ------------- | ------------- | --------- | -------- |
| Sprint 1  | 5             | 36            | 36        | 100%     |
| Sprint 2  | 5             | 45            | 45        | 100%     |
| Sprint 3  | 4             | 31            | 31        | 100%     |
| Sprint 4  | 8             | 52            | 52        | 100%     |
| **Total** | **22**        | **164**       | **164**   | **100%** |

## Velocity Progression

```
Sprint 1: ████████████ 12 pts
Sprint 2: █████████████████████ 21 pts
Sprint 3: ████████████████ 16 pts
Sprint 4: ██████████████████████████ 26 pts

Average Velocity: 18.75 pts/sprint
```

---

# 3. Increment

**Commitment:** Definition of Done  
**Owner:** Scrum Team

## Definition of Done

All increments met the following criteria:

✅ Code implemented and compiles without errors  
✅ Feature works in local development environment  
✅ Manual testing confirms acceptance criteria met  
✅ Code follows project conventions and is readable  
✅ Feature integrates with existing functionality  
✅ No critical bugs or blockers  
✅ PO has accepted the story

## Increment History

| Sprint | Increment        | Theme            | Milestone  |
| ------ | ---------------- | ---------------- | ---------- |
| 1      | Auth System      | Foundation       | -          |
| 2      | Post + Dashboard | Core Features    | -          |
| 3      | Claim Flow       | Full Cycle       | 🎉 **MVP** |
| 4      | Polish + Docker  | Production Ready | 🎉 **MRF** |

## Final Increment Features

### Authentication

- Donor registration with business name
- Receiver registration with Org ID
- JWT-based login/logout
- Session persistence

### Item Management

- Post items with name, quantity, expiry
- Photo upload (JPG/PNG, 5MB max)
- My Posts tracking

### Real-Time Dashboard

- Live items feed
- Socket.io integration
- Instant new item appearance

### Claim System

- One-click claiming
- Real-time removal
- Role-based access
- My Claims tracking

### Production Features

- macOS-inspired UI theme
- Responsive design
- Loading/empty states
- Docker deployment
- Error handling

---

# Scrum Events Record

## Events Conducted

| Event                | Count | Average Duration |
| -------------------- | ----- | ---------------- |
| Sprint Planning      | 4     | 1.5 hours        |
| Daily Scrum          | 28    | 12 minutes       |
| Sprint Review        | 4     | 35 minutes       |
| Sprint Retrospective | 4     | 30 minutes       |
| Backlog Refinement   | 3     | 25 minutes       |

## Sprint Planning Records

| Sprint | Date         | Committed Points | Notes             |
| ------ | ------------ | ---------------- | ----------------- |
| 1      | Dec 5, 2025  | 12               | Baseline sprint   |
| 2      | Dec 12, 2025 | 21               | 75% increase      |
| 3      | Dec 19, 2025 | 16               | Holiday reduction |
| 4      | Dec 26, 2025 | 26               | Final push        |

## Daily Scrum Highlights

| Sprint | Stand-ups | Key Discussions            |
| ------ | --------- | -------------------------- |
| 1      | 7         | SQLite enum issue resolved |
| 2      | 7         | Socket reconnection logic  |
| 3      | 7         | Holiday coordination       |
| 4      | 7         | Docker networking          |

## Sprint Review Outcomes

| Sprint | Stories Demoed | PO Acceptance |
| ------ | -------------- | ------------- |
| 1      | 5              | 5/5 ✅        |
| 2      | 5              | 5/5 ✅        |
| 3      | 4              | 4/4 ✅        |
| 4      | 8              | 8/8 ✅        |

## Retrospective Action Items

| Sprint | Actions Identified | Actions Completed |
| ------ | ------------------ | ----------------- |
| 1      | 3                  | 3 ✅              |
| 2      | 3                  | 3 ✅              |
| 3      | 3                  | 3 ✅              |
| 4      | 3                  | 3 ✅              |

---

# Scrum Roles

## Product Owner

**Responsibilities:**

- Maintained Product Backlog
- Prioritized user stories
- Defined acceptance criteria
- Accepted/rejected stories in review
- Communicated stakeholder needs

**Key Decisions:**

- MVP scope definition
- MRF feature selection
- Docker priority for team collaboration

## Scrum Master

**Responsibilities:**

- Facilitated all Scrum events
- Removed blockers (SQLite enum issue)
- Protected team from distractions
- Coached on Scrum practices
- Tracked metrics

**Key Actions:**

- Adapted sprint length to 1 week
- Adjusted capacity for holidays
- Ensured retrospective actions completed

## Development Team

**Responsibilities:**

- Self-organized task assignment
- Estimated story points
- Delivered increments
- Maintained code quality
- Tested features

**Achievements:**

- 100% delivery rate
- 100% bug fix rate
- On-time milestone delivery

---

# Quality Metrics

## Bug Tracking

| Metric              | Value     |
| ------------------- | --------- |
| Total Bugs Found    | 7         |
| Bugs Fixed          | 7         |
| Bugs Open           | 0         |
| Avg Resolution Time | 1.86 days |

## Bug by Severity

| Severity | Count | Fixed |
| -------- | ----- | ----- |
| Critical | 0     | 0     |
| High     | 2     | 2 ✅  |
| Medium   | 5     | 5 ✅  |
| Low      | 0     | 0     |

## Test Coverage

| Type       | Cases | Pass Rate |
| ---------- | ----- | --------- |
| Functional | 20    | 100%      |
| UI/UX      | 6     | 100%      |
| Docker     | 2     | 100%      |
| Regression | 30    | 100%      |

---

# Transparency Artifacts

## Information Radiators

### 1. Burndown Charts

Created for each sprint showing ideal vs actual progress.

### 2. Velocity Chart

Tracking team velocity across sprints.

### 3. Sprint Board

Kanban-style board with columns:

- To Do → In Progress → Review → Done

### 4. Cumulative Flow

Showing backlog, in-progress, and done over time.

---

# Lessons Learned

## Technical Lessons

| Lesson                              | Sprint | Action Taken              |
| ----------------------------------- | ------ | ------------------------- |
| SQLite doesn't support Prisma enums | 1      | Use String fields         |
| Socket.io needs reconnection logic  | 2      | Added reconnection config |
| Vite needs host:true for Docker     | 4      | Updated vite.config.js    |

## Process Lessons

| Lesson                              | Sprint | Improvement           |
| ----------------------------------- | ------ | --------------------- |
| 1-week sprints work for small teams | 1      | Maintained throughout |
| Front-load work before holidays     | 3      | Successful strategy   |
| Loading states prevent bugs         | 3      | Added to all buttons  |

## Team Lessons

| Lesson                                   | Impact           |
| ---------------------------------------- | ---------------- |
| Clear task division accelerates work     | Higher velocity  |
| Daily communication catches issues early | Quick resolution |
| Async stand-ups work during holidays     | Flexibility      |

---

# Project Completion

## Final Statistics

| Category | Metric         | Value   |
| -------- | -------------- | ------- |
| Time     | Duration       | 32 days |
| Time     | Sprints        | 4       |
| Scope    | Stories        | 23      |
| Scope    | Story Points   | 75      |
| Quality  | Bugs Fixed     | 7/7     |
| Quality  | Test Pass Rate | 100%    |
| Delivery | On-Time Rate   | 100%    |
| Delivery | Commitment Met | 100%    |

## Milestones Achieved

| Milestone | Target | Actual | Status     |
| --------- | ------ | ------ | ---------- |
| Sprint 1  | Dec 11 | Dec 11 | ✅ On Time |
| Sprint 2  | Dec 18 | Dec 18 | ✅ On Time |
| MVP       | Dec 25 | Dec 25 | ✅ On Time |
| MRF       | Jan 1  | Jan 1  | ✅ On Time |
| Docs      | Jan 5  | Jan 2  | ✅ Early   |

## Final Product

**EcoChain** is a complete, production-ready web application:

-  Full-stack React + Express application
-  Secure JWT authentication
-  Item posting with photo upload
-  Real-time Socket.io dashboard
-  Instant claim functionality
-  macOS-inspired polished UI
-  Docker containerization
-  Complete documentation

---

_Scrum Artifacts documented by the EcoChain Scrum Team_
