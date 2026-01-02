# Project Metrics

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Last Updated:** January 2, 2026

---

## 1. Velocity Chart

### Sprint Velocity

| Sprint    | Committed | Delivered | Velocity       |
| --------- | --------- | --------- | -------------- |
| Sprint 1  | 12        | 12        | 12             |
| Sprint 2  | 21        | 21        | 21             |
| Sprint 3  | 16        | 16        | 16             |
| Sprint 4  | 26        | 26        | 26             |
| **Total** | **75**    | **75**    | **Avg: 18.75** |

### Velocity Trend

```
Sprint 4: ████████████████████████████████████████████████████ 26
Sprint 3: ████████████████████████████████ 16
Sprint 2: ██████████████████████████████████████████ 21
Sprint 1: ████████████████████████ 12
          0    5    10   15   20   25   30
```

### Velocity Analysis

- **Sprint 1 (12 pts):** Baseline sprint establishing team velocity
- **Sprint 2 (21 pts):** 75% increase as team gained momentum with familiar tech
- **Sprint 3 (16 pts):** Reduced due to holiday period (Christmas)
- **Sprint 4 (26 pts):** Highest velocity, focused polish work with clear scope

**Average Velocity:** 18.75 story points per sprint (1 week)

---

## 2. Burndown Charts

### Sprint 1 Burndown

| Day   | Ideal | Actual |
| ----- | ----- | ------ |
| Day 0 | 12    | 12     |
| Day 1 | 10.3  | 11     |
| Day 2 | 8.6   | 9      |
| Day 3 | 6.9   | 7      |
| Day 4 | 5.1   | 5      |
| Day 5 | 3.4   | 4      |
| Day 6 | 1.7   | 2      |
| Day 7 | 0     | 0      |

```
Points
12 |X---
10 |  X-X---
 8 |      X--X
 6 |          X--
 4 |             X--
 2 |                X--
 0 |___________________X
   D0  D1  D2  D3  D4  D5  D6  D7

   --- Ideal    X Actual
```

**Sprint 1 Analysis:** Closely followed ideal burndown. Slight delay mid-sprint due to SQLite enum issue, caught up by end.

---

### Sprint 2 Burndown

| Day   | Ideal | Actual |
| ----- | ----- | ------ |
| Day 0 | 21    | 21     |
| Day 1 | 18    | 18     |
| Day 2 | 15    | 14     |
| Day 3 | 12    | 11     |
| Day 4 | 9     | 8      |
| Day 5 | 6     | 5      |
| Day 6 | 3     | 2      |
| Day 7 | 0     | 0      |

```
Points
21 |X
18 |  X
15 |    X--
12 |       X--
 9 |          X--
 6 |             X--
 3 |                X--
 0 |___________________X
   D0  D1  D2  D3  D4  D5  D6  D7
```

**Sprint 2 Analysis:** Ahead of schedule throughout. Team momentum from Sprint 1 continued.

---

### Sprint 3 Burndown

| Day   | Ideal | Actual |
| ----- | ----- | ------ |
| Day 0 | 16    | 16     |
| Day 1 | 13.7  | 14     |
| Day 2 | 11.4  | 12     |
| Day 3 | 9.1   | 9      |
| Day 4 | 6.9   | 7      |
| Day 5 | 4.6   | 5      |
| Day 6 | 2.3   | 2      |
| Day 7 | 0     | 0      |

```
Points
16 |X
14 |  X--
12 |      X
 9 |        X--
 6 |           X--
 3 |              X--
 0 |_________________X
   D0  D1  D2  D3  D4  D5  D6  D7
```

**Sprint 3 Analysis:** Minor delays due to Christmas holidays, but team caught up. Completed all committed work.

---

### Sprint 4 Burndown

| Day   | Ideal | Actual |
| ----- | ----- | ------ |
| Day 0 | 26    | 26     |
| Day 1 | 22.3  | 23     |
| Day 2 | 18.6  | 18     |
| Day 3 | 14.9  | 14     |
| Day 4 | 11.1  | 9      |
| Day 5 | 7.4   | 5      |
| Day 6 | 3.7   | 2      |
| Day 7 | 0     | 0      |

```
Points
26 |X
22 |  X
18 |    X
14 |      X
10 |        X
 5 |          X
 2 |            X
 0 |______________X
   D0  D1  D2  D3  D4  D5  D6  D7
```

**Sprint 4 Analysis:** Consistently ahead of schedule. Team was highly motivated for final push.

---

## 3. Cumulative Flow

### Story Points Over Time

| Date   | Backlog | In Progress | Done | Total |
| ------ | ------- | ----------- | ---- | ----- |
| Dec 5  | 75      | 0           | 0    | 75    |
| Dec 11 | 63      | 0           | 12   | 75    |
| Dec 18 | 42      | 0           | 33   | 75    |
| Dec 25 | 26      | 0           | 49   | 75    |
| Jan 1  | 0       | 0           | 75   | 75    |

```
Story Points
75 |████████████████████████████████████████ Backlog
   |                    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Done
50 |████████████████████
   |            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
25 |████████████
   |    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 0 |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   Dec 5   Dec 11   Dec 18   Dec 25   Jan 1
```

---

## 4. Sprint Completion Table

| Sprint   | Start  | End    | Stories | Points | Completion |
| -------- | ------ | ------ | ------- | ------ | ---------- |
| Sprint 1 | Dec 5  | Dec 11 | 5       | 12     | 100%       |
| Sprint 2 | Dec 12 | Dec 18 | 5       | 21     | 100%       |
| Sprint 3 | Dec 19 | Dec 25 | 4       | 16     | 100%       |
| Sprint 4 | Dec 26 | Jan 1  | 8       | 26     | 100%       |
| Buffer   | Jan 2  | Jan 5  | 1       | 8      | 100%       |

### Completion Rate

```
Sprint 1: ████████████████████ 100%
Sprint 2: ████████████████████ 100%
Sprint 3: ████████████████████ 100%
Sprint 4: ████████████████████ 100%
Buffer:   ████████████████████ 100%
```

**Overall Completion Rate:** 100% (75/75 story points)

---

## 5. Bug Metrics

### Bugs by Sprint

| Sprint    | Found | Fixed in Sprint | Deferred | Fixed Later |
| --------- | ----- | --------------- | -------- | ----------- |
| Sprint 1  | 1     | 1               | 0        | 0           |
| Sprint 2  | 3     | 3               | 0        | 0           |
| Sprint 3  | 2     | 0               | 2        | 2           |
| Sprint 4  | 1     | 3               | 0        | 0           |
| **Total** | **7** | **7**           | **0**    | **0**       |

### Bug Severity Distribution

```
Critical: 0  ░░░░░░░░░░ 0%
High:     2  ██████░░░░ 29%
Medium:   5  ██████████ 71%
Low:      0  ░░░░░░░░░░ 0%
```

### Bug Resolution Time

| Bug     | Found  | Fixed  | Days |
| ------- | ------ | ------ | ---- |
| BUG-001 | Dec 6  | Dec 6  | 0    |
| BUG-002 | Dec 16 | Dec 17 | 1    |
| BUG-003 | Dec 23 | Dec 29 | 6    |
| BUG-004 | Dec 14 | Dec 14 | 0    |
| BUG-005 | Dec 15 | Dec 15 | 0    |
| BUG-006 | Dec 30 | Dec 30 | 0    |
| BUG-007 | Dec 24 | Dec 30 | 6    |

**Average Resolution Time:** 1.86 days

---

## 6. Test Metrics

### Test Case Execution

| Sprint   | Cases | Passed | Failed | Pass Rate |
| -------- | ----- | ------ | ------ | --------- |
| Sprint 1 | 8     | 7      | 1      | 87.5%     |
| Sprint 2 | 10    | 8      | 2      | 80%       |
| Sprint 3 | 8     | 7      | 1      | 87.5%     |
| Sprint 4 | 14    | 13     | 1      | 92.9%     |
| Final    | 30    | 30     | 0      | 100%      |

### Test Coverage by Module

| Module          | Test Cases | Coverage |
| --------------- | ---------- | -------- |
| Authentication  | 8          | 100%     |
| Item Management | 5          | 100%     |
| Dashboard       | 4          | 100%     |
| Claim           | 5          | 100%     |
| UI/UX           | 6          | 90%      |
| Docker          | 2          | 100%     |

---

## 7. Code Metrics

### Lines of Code (Approximate)

| Component | Files  | Lines     |
| --------- | ------ | --------- |
| Server    | 8      | ~500      |
| Client    | 15     | ~1200     |
| Config    | 6      | ~150      |
| **Total** | **29** | **~1850** |

### Code Distribution

```
Client (React):     ████████████████████████ 65%
Server (Express):   ████████████ 27%
Config/Docker:      ████ 8%
```

### API Endpoints

| Method | Endpoint             | Controller                 |
| ------ | -------------------- | -------------------------- |
| POST   | /api/auth/register   | authController.register    |
| POST   | /api/auth/login      | authController.login       |
| GET    | /api/auth/me         | authController.getMe       |
| GET    | /api/items           | itemController.getAll      |
| POST   | /api/items           | itemController.create      |
| PATCH  | /api/items/:id/claim | itemController.claim       |
| GET    | /api/items/my-posts  | itemController.getMyPosts  |
| GET    | /api/items/my-claims | itemController.getMyClaims |

**Total API Endpoints:** 8

---

## 8. Project Timeline

### Gantt Chart (Text)

```
December 2025                              January 2026
Week 1      Week 2      Week 3      Week 4     Buffer
Dec 5-11    Dec 12-18   Dec 19-25   Dec 26-Jan1  Jan 2-5

Sprint 1    ████████
Auth
            Sprint 2    ████████
            Posting/Dashboard

                        Sprint 3    ████████
                        Claim

                                    Sprint 4    ████████
                                    Polish/Docker

                                                Buffer  ████
                                                Docs/QA
```

### Milestone Achievements

| Milestone         | Target Date | Actual Date | Status       |
| ----------------- | ----------- | ----------- | ------------ |
| Sprint 1 Complete | Dec 11      | Dec 11      | ✅ On Time   |
| Sprint 2 Complete | Dec 18      | Dec 18      | ✅ On Time   |
| MVP Complete      | Dec 25      | Dec 25      | ✅ On Time   |
| MRF Complete      | Jan 1       | Jan 1       | ✅ On Time   |
| Final Submission  | Jan 5       | Jan 5       | ✅ On Time   |


---

## 9. Team Performance

### Story Points per Sprint

| Metric    | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Avg   |
| --------- | -------- | -------- | -------- | -------- | ----- |
| Committed | 12       | 21       | 16       | 26       | 18.75 |
| Delivered | 12       | 21       | 16       | 26       | 18.75 |
| Variance  | 0        | 0        | 0        | 0        | 0     |

### Commitment Reliability

```
100% |████████████████████████████████████████|
 90% |                                        |
 80% |                                        |
 70% |                                        |
     Sprint 1   Sprint 2   Sprint 3   Sprint 4
```

**Commitment Reliability:** 100% (delivered everything committed)

---

## 10. Summary Dashboard

```
┌──────────────────────────────────────────────────────┐
│                  ECOCHAIN METRICS                    │
├──────────────────────────────────────────────────────┤
│  Total Story Points     │  75 / 75        │  100%   │
│  Sprint Velocity (Avg)  │  18.75 pts      │         │
│  Bugs Found/Fixed       │  7 / 7          │  100%   │
│  Test Pass Rate         │  30 / 30        │  100%   │
│  Sprints Completed      │  4 / 4          │  100%   │
│  On-Time Delivery       │  4 / 4          │  100%   │
├──────────────────────────────────────────────────────┤
│  STATUS: ✅ PROJECT COMPLETE                         │
└──────────────────────────────────────────────────────┘
```

---

## Key Takeaways

1. **100% Delivery Rate:** All committed work was delivered in every sprint
2. **Increasing Velocity:** Team velocity improved from 12 to 26 points
3. **Zero Open Bugs:** All bugs were resolved within project timeline
4. **On-Time Milestones:** Every milestone met on target date
5. **High Test Coverage:** 100% final test pass rate

---

_Metrics compiled by the EcoChain Scrum Team_
