# Test Plan

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Last Updated:** January 2, 2026

---

## 1. Introduction

### 1.1 Purpose

This Test Plan defines the testing approach, scope, resources, and schedule for the EcoChain project. It ensures that all features meet the requirements specified in the SRS and satisfy the Definition of Done.

### 1.2 Scope

Testing covers:

- User Authentication (Registration, Login, Session Management)
- Item Management (Posting, Photo Upload)
- Marketplace Dashboard (Real-time Feed)
- Claim Management (Claiming, Status Updates)
- UI/UX (Responsive Design, Error Handling)

### 1.3 Test Approach

Due to the coursework timeline and team size, we adopted a manual testing approach with documented test cases. Testing was performed iteratively after each sprint.

---

## 2. Test Strategy

### 2.1 Testing Levels

| Level                   | Description                       | Timing                   |
| ----------------------- | --------------------------------- | ------------------------ |
| **Unit Testing**        | Individual function verification  | During development       |
| **Integration Testing** | API endpoint and database testing | After feature completion |
| **System Testing**      | End-to-end user flows             | End of each sprint       |
| **Acceptance Testing**  | Verification against user stories | Sprint Review            |

### 2.2 Testing Types

| Type                      | Description                       | Tools                 |
| ------------------------- | --------------------------------- | --------------------- |
| **Functional Testing**    | Verify features work as specified | Manual, Postman       |
| **UI Testing**            | Verify user interface elements    | Browser DevTools      |
| **Responsive Testing**    | Verify mobile/desktop layouts     | Chrome DevTools       |
| **Compatibility Testing** | Verify cross-browser support      | Chrome, Firefox       |
| **Real-time Testing**     | Verify Socket.io updates          | Multiple browser tabs |

### 2.3 Test Environment

| Component | Specification                     |
| --------- | --------------------------------- |
| OS        | Windows 10/11                     |
| Browsers  | Chrome (latest), Firefox (latest) |
| Backend   | Node.js v18+ (local)              |
| Database  | SQLite (local file)               |
| Frontend  | Vite dev server (localhost:5173)  |
| Backend   | Express server (localhost:5000)   |

---

## 3. Test Deliverables

| Deliverable            | Description                    | Status      |
| ---------------------- | ------------------------------ | ----------- |
| Test Plan              | This document                  | ✅ Complete |
| Test Scenarios         | High-level test scenarios      | ✅ Complete |
| Test Cases             | Detailed test cases with steps | ✅ Complete |
| Bug Reports            | Documented issues found        | ✅ Complete |
| Sprint Testing Summary | Per-sprint test results        | ✅ Complete |

---

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

Testing can begin when:

- [ ] Feature code is complete and committed
- [ ] Development environment is set up
- [ ] Database is initialized with schema
- [ ] Both servers (frontend/backend) are running

### 4.2 Exit Criteria

Testing is complete when:

- [ ] All test cases executed
- [ ] All high/critical bugs fixed
- [ ] Acceptance criteria verified
- [ ] PO approval obtained

---

## 5. Test Schedule

| Sprint   | Testing Period       | Focus Area               |
| -------- | -------------------- | ------------------------ |
| Sprint 1 | Dec 10-11, 2025      | Authentication flows     |
| Sprint 2 | Dec 17-18, 2025      | Item posting, Dashboard  |
| Sprint 3 | Dec 24-25, 2025      | Claim functionality      |
| Sprint 4 | Dec 31 - Jan 1, 2026 | UI polish, Docker        |
| Buffer   | Jan 2-5, 2026        | Final regression testing |

---

## 6. Risk Assessment

| Risk                 | Impact | Mitigation                  |
| -------------------- | ------ | --------------------------- |
| Limited testing time | Medium | Prioritize critical paths   |
| No automated tests   | Medium | Detailed manual test cases  |
| Single tester        | High   | Peer review of test results |
| Environment issues   | Low    | Docker for consistent setup |

---

## 7. Defect Management

### 7.1 Severity Levels

| Severity     | Description               | Response Time      |
| ------------ | ------------------------- | ------------------ |
| **Critical** | System crash, data loss   | Immediate fix      |
| **High**     | Major feature not working | Fix within sprint  |
| **Medium**   | Feature works with issues | Fix in next sprint |
| **Low**      | Minor UI/cosmetic issues  | Backlog            |

### 7.2 Defect Workflow

```
Found → Logged → Assigned → Fixed → Verified → Closed
```

---

## 8. Approval

| Role          | Name        | Date        | Signature   |
| ------------- | ----------- | ----------- | ----------- |
| Product Owner | Team Member | Dec 5, 2025 | ✅ Approved |
| Scrum Master  | Team Member | Dec 5, 2025 | ✅ Approved |
| QA Lead       | Team Member | Dec 5, 2025 | ✅ Approved |

---

_Test Plan maintained by the EcoChain QA Team_
