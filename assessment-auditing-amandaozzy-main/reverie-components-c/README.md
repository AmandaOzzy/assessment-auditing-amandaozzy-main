# Auditing Assessment (15%) ~ Component C: Booking Form & Footer

In this project, you will receive one or more components (navigation, footer, card layout, etc.) that contain
deliberate accessibility issues that affect usability and performance for real users.

Working with the provided starter code, you will audit each component using keyboard testing, colour contrast checks, and automated tools, then document every issue in the provided log template. Once fixes have been applied, your completed code and issue log will serve as evidence of a full audit cycle.

You will apply the auditing methods and triage skills practiced in class: running axe DevTools, Accessibility Insights, or WAVE against each component; checking colour contrast ratios for text and nontext elements; navigating with the keyboard to verify focus order and operability; and writing code that correctly resolves each issue identified. You will classify every issue by WCAG 2.2 success criteria, severity, and user impact. The issue log and corrected code will demonstrate that your findings were systematic, and your fixes were grounded in what you learned.


## Requirements
Keyboard Testing
    - Navigate each component using the keyboard only and document any issues you find.

2. Automated Tools
    - Run axe DevTools, Accessibility Insights (FastPass and Tab Stops), and WAVE against each component. Record all violations and note where tools agree and where findings differ.

3. Colour Contrast
    - Check all foreground/background combinations for all text and non-text elements using WebAIM Contrast Checker and DevTools (Chrome, Firefox, etc.).

4. Manual Inspection
    - Review the component for issues that automated tools and contrast checks may not surface. Apply your judgment and draw on what you learned in class to identify any remaining barriers.

5. Issue Log
    - **Description**: a brief, plain-language description of the problem
    - **Location**: the component and element where the issue appears (e.g. Navigation — skip link; Card — image)
    - **Found by the testing method used**: Keyboard / axe / Accessibility Insights / WAVE / Contrast Checker / Manual
    - **WCAG 2.2 criterion**: the success criterion violated, including the SC number, name, and conformance level (e.g. 1.4.3 Contrast Minimum, AA)
    - **User impact**: who is affected and what the practical consequence is
    - **Severity**: Critical / Serious / Moderate / Minor
    - **Status**: Fixed / Not Fixed


**Use the provided Issue Log template**. Your log should reflect the use of all four testing methods. Findings
from automated tools alone will not demonstrate a complete audit.


## REMEIDATION REQUIREMENTS

Apply your fixes directly to the starter code files.

Your fixes must use correct, semantically appropriate HTML elements, attributes, and values as covered
in class. Your final code must be functional and must not introduce new accessibility or syntax errors.


## SUBMISSION

You must submit the following to Brightspace by the due date and time:

1. A GitHub link to your completed version of the starter code, Auditing Assessment that was forked
from the original repostitory.

2. The completed issue log named, lastname-audit-log.pdf placed in the root of your completed version
of the stater code (in your project folder).

Late submissions will not be accepted. See Digital Design’s Assessment Extension Guidelines


## ACADEMIC INTEGRITY

### Use of Generative AI Tools
For this assessment, the use of any Generative Artificial Intelligence (AI) tools is not permitted. This assessment is intended to measure your ability to generate your own work. Your unique comprehension and interpretation of the course content must be demonstrated in order to be successful. Using prohibited resources will be considered academic misconduct and addressed following SR 1.3 Academic Integrity Procedure.

### Incremental Development
You must demonstrate incremental development of your solution. This means you must begin work as soon as possible and commit often to the assignment repository. Each commit must demonstrate functional improvements to the solution. Just like in a professional environment, leaving a task untouched until right before the deadline is not acceptable — start early and make consistent progress.

Ensure all required code comments have been included.

Push your completed assessment to GitHub repository (this repo should be forked from the original) and the link submitted to Brightspace before the due date and time. Late pushes will be counted as late submissions and will not be accepted unless prior arrangements have been made. See Digital Design's Assessment Extension Guideline.


## Rubric (total 37)

- Keyboarding Testing (4)
- Automated Tools (3)
- Colour Contrast (2)
- Manual Inspection (2)
- Issue Log Documentation (14)
- Code Fixes (8)
- Validation (2)


### Keyboard Testing

| Criterion | Completed (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|
| Navigation: All interactive elements navigated by keyboard | Evidence in the issue log shows all interactive elements were tested. | No evidence of keyboard navigation in the issue log. | / 1 |
| Focus: Focus order verified and documented | Focus order findings are present in the issue log. | Focus order is absent from the issue log. | / 1 |
| Focus: Focus indicator visibility verified and documented | Focus indicator visibility is assessed and documented as a distinct finding in the issue log. | No focus indicator findings are present in the issue log. | / 1 |
| Traps: Keyboard traps checked and documented | Keyboard trap check is reflected in the issue log. | No evidence of keyboard trap testing in the issue log. | / 1 |

### Automated Tools

| Criterion | Completed (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|
| axe DevTools run and findings recorded | axe findings are present in the issue log. | No axe findings in the issue log. | / 1 |
| Accessibility Insights run and findings recorded | Accessibility Insights findings are present in the issue log. | No Accessibility Insights findings in the issue log. | / 1 |
| WAVE run and findings recorded | WAVE findings are present in the issue log. | No WAVE findings in the issue log. | / 1 |

### Colour Contrast

| Criterion | Completed (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|
| All text combinations checked and recorded | Text contrast ratios are recorded and assessed against WCAG thresholds in the issue log. | Text contrast checks are absent or incomplete in the issue log. | / 1 |
| All non-text combinations checked and recorded | Non-text contrast ratios are recorded and assessed against WCAG thresholds in the issue log. | Non-text contrast checks are absent from the issue log. | / 1 |

### Manual Inspection

| Criterion | Completed (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|
| Manual inspection findings are present in the issue log | At least one issue is documented with Found by: Manual, demonstrating independent judgment beyond tool output. | No manual findings are present in the issue log. | / 1 |
| Findings reflect course content beyond what automated tools surface | Manual entries identify issues consistent with topics covered in class (e.g. semantic structure, font rendering, link purpose, heading hierarchy). | Manual entries are absent or only repeat what automated tools already flagged. | / 1 |

### Issue Log Documentation

| Criterion | Completed (2 pts) | Satisfactory (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|---|
| Description: every entry includes a clear, plain-language description of the issue | Specific, locatable, and actionable. Clearly identifies what the issue is, where it occurs, and why it matters. | Present but vague. Issue is named but lacks enough detail to locate or act on. | Missing or too generic to be useful. | / 2 |
| Location: every entry identifies the component and element where the issue appears | Precise. Element, section, and selector or line reference all identified. | General. Section identified but element or selector unclear. | Missing or incorrect. | / 2 |
| Classification: WCAG 2.2 - every entry includes the SC number, name, and conformance level | Correct success criterion, level, and version cited with a clear connection to the issue. | Minor error. Right area but wrong SC number, level, or version. | Missing, incorrect, or no WCAG reference made. | / 2 |
| User Impact: every entry identifies the affected user group and practical consequence | Specific to a real user group and the actual barrier they face. | Present but generic. Mentions users without explaining the specific impact created by this issue. | Missing or unrelated to the actual issue. | / 2 |
| Severity: every entry has a rating of Critical, Serious, Moderate, or Minor | Justified and consistent. Severity rating aligns with WCAG level and the real-world impact on users. | Present but inconsistent or poorly justified. Rating given without clear reasoning. | Missing or does not align with the issue. | / 2 |
| Completeness: All testing methods reflected across entries | All significant issues found and documented for the assigned component. | Most issues found. One or two missed but the majority identified and logged. | Few or no issues identified. | / 2 |
| Professionalism: All entries are written in plain language without jargon, using correct spelling and grammar | Consistent and well-written throughout. Correct terminology used where needed, but writing is clear and accessible with no unnecessary jargon. | Inconsistent. Some entries are clear and appropriately written, others rely on jargon, are unclear, or use imprecise terminology. | Poor throughout. Unclear, incomplete, jargon-heavy, or unprofessional in presentation. | / 2 |

### Code Fixes

| Criterion | Completed (2 pts) | Satisfactory (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|---|
| Coverage: All issues identified in the issue log are addressed in the submitted code | All logged issues have a corresponding fix in the code. No identified issues left unaddressed. | Most logged issues are addressed. One or two fixes missing but the majority are present. | Few or no logged issues are addressed in the code. | / 2 |
| Correctness: HTML elements | All fixes use the correct semantic HTML elements. Choices follow course content, WCAG standards, and best practices, and are applied consistently wherever the same issue appears. No new HTML errors introduced. | Fixes are implemented using the correct HTML attributes as covered in class, with minor gaps. | Fixes are absent, use incorrect attributes or values, or do not reflect course content or WCAG standards. | / 2 |
| Correctness: HTML attributes | All fixes use the correct attributes and values. Choices are precise, follow course content and WCAG standards, and are applied consistently wherever the same issue appears. No new attribute errors introduced. | Most fixes use appropriate attributes and values. Minor gaps, inconsistencies, or one less precise value present. No significant new errors introduced. | One or more fixes use incorrect or inappropriate HTML attributes. | / 2 |
| Correctness (CSS): Contrast and styling | All contrast and styling fixes meet the applicable WCAG success criteria and follow best practices. Values are applied consistently across similar elements. Code is valid with no new errors introduced. | Most fixes meet WCAG standards. Minor gaps, one incorrect value, or inconsistencies across similar elements present. No significant new errors introduced. | Fixes are absent, use incorrect values, or do not meet WCAG standards. | / 2 |

### Validation

| Criterion | Completed (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|
| Code is valid and functional | Final code passes basic validation and renders without errors, warnings, or info. | Code contains validation errors, warnings, or info notices. | / 1 |
| No new accessibility or syntax errors introduced | Fixes do not create new issues beyond those already logged. | One or more new accessibility or syntax errors are present in the submitted code. | / 1 |

### Evidence

| Criterion | Completed (1 pt) | Not Completed (0 pts) | Score |
|---|---|---|---|
| Code Comments: All HTML fixes are commented with a reference to the issue log | All HTML fixes are clearly commented and traceable to the issue log. | HTML comments are missing, incomplete, or do not reference the issue log. | / 1 |
| Code Comments: All CSS fixes are commented with a reference to the issue log | All CSS fixes are clearly commented and traceable to the issue log. | CSS comments are missing, incomplete, or do not reference the issue log. | / 1 |