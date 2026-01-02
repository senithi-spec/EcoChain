# Definition of Done (DoD)

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Approved By:** EcoChain Scrum Team

---

## Purpose

The Definition of Done (DoD) is a shared understanding of what it means for a user story to be complete. All team members must agree that a story meets these criteria before it can be marked as "Done" and moved to the completed column.

> **Note:** Due to the coursework timeline and team size, we adapted our DoD to focus on local development and manual testing rather than production deployment.

---

## Definition of Done Checklist

### ✅ Code Quality

- [ ] **Code Implemented** — Feature code is written and compiles without errors
- [ ] **Code Follows Standards** — Consistent naming conventions, proper indentation, no console.log statements in production code
- [ ] **No Linting Errors** — ESLint passes without warnings (if configured)
- [ ] **DRY Principle** — No unnecessary code duplication
- [ ] **Comments Added** — Complex logic is documented with inline comments

### ✅ Functionality

- [ ] **Acceptance Criteria Met** — All criteria in the user story are satisfied
- [ ] **Feature Works Locally** — Tested in local development environment
- [ ] **Integration Verified** — Feature works with existing functionality
- [ ] **Edge Cases Handled** — Invalid inputs, empty states, error conditions
- [ ] **No Regressions** — Existing features still work after changes

### ✅ Testing

- [ ] **Manual Testing Complete** — Developer has tested all happy paths
- [ ] **Error Paths Tested** — Invalid inputs produce appropriate errors
- [ ] **Cross-Browser Check** — Works in Chrome (primary), Firefox (secondary)
- [ ] **Responsive Check** — Works on desktop and mobile viewports
- [ ] **Test Scenarios Documented** — QA test cases added to test document

### ✅ User Experience

- [ ] **UI Matches Design** — Follows macOS-inspired theme
- [ ] **Loading States Present** — User sees feedback during operations
- [ ] **Error Messages Clear** — User-friendly, non-technical language
- [ ] **Accessibility Basics** — Labels on form fields, sufficient contrast

### ✅ Documentation

- [ ] **Code Comments** — Complex functions have explanatory comments
- [ ] **API Documented** — New endpoints added to API docs
- [ ] **README Updated** — Any setup changes reflected in README

### ✅ Version Control

- [ ] **Committed to Git** — All changes committed with meaningful messages
- [ ] **Commit Messages Clear** — Format: `US-XXX: Description of change`
- [ ] **Branch Merged** — Feature branch merged to main (if using branching)
- [ ] **No Merge Conflicts** — Clean merge with latest main

### ✅ Team Approval

- [ ] **Peer Review** — At least one team member has reviewed the code
- [ ] **PO Acceptance** — Product Owner has verified the feature meets requirements
- [ ] **Demo Ready** — Feature can be demonstrated in Sprint Review

---

## Story-Specific DoD

### For Frontend Stories:

- [ ] Component renders without errors
- [ ] Styling matches design specifications
- [ ] State management works correctly
- [ ] API integration tested

### For Backend Stories:

- [ ] API endpoint returns correct data
- [ ] Database operations work correctly
- [ ] Authentication/authorization enforced
- [ ] Error responses are appropriate

### For Full-Stack Stories:

- [ ] End-to-end flow works completely
- [ ] Real-time updates function correctly
- [ ] No console errors in browser or server

---

## Definition of Done for Sprint

A Sprint is considered "Done" when:

- [ ] All committed stories meet the DoD
- [ ] Sprint Review completed with stakeholder feedback
- [ ] Sprint Retrospective conducted
- [ ] Backlog updated based on learnings
- [ ] Any bugs found are logged for next sprint

---

## Definition of Done for Release (MRF)

A Release is considered "Done" when:

- [ ] All MVP features complete and tested
- [ ] All MRF enhancements complete
- [ ] Docker deployment works
- [ ] Documentation is complete
- [ ] No critical or high-priority bugs
- [ ] Demo to stakeholders successful

---

## Exceptions & Escalation

If a story cannot meet all DoD criteria:

1. **Discuss in Daily Stand-up** — Raise the blocker
2. **Scrum Master Decision** — Determine if exception is valid
3. **Document Exception** — Note why DoD was partially met
4. **Create Follow-up Story** — Add remaining work to backlog

---

## DoD Review History

| Date         | Change                 | Reason                  |
| ------------ | ---------------------- | ----------------------- |
| Dec 5, 2025  | Initial DoD created    | Sprint 0 planning       |
| Dec 12, 2025 | Added responsive check | Mobile users identified |
| Dec 19, 2025 | Added Docker criteria  | DevOps story added      |
| Jan 2, 2026  | Final review           | Buffer period cleanup   |

---

_Definition of Done agreed upon by the entire Scrum Team during Sprint 0 Planning_
