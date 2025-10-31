# Webmobi QA Testing Internship Assignment

## Project Overview
This project implements Cypress E2E tests for the event creation flow on Webmobi platforms, specifically targeting events.webmobi.com and certificates.webmobi.com. The tests cover user workflows including login, event creation, session management, attendee registration, and certificate generation.

## Test Coverage
- **User Login**: Validates authentication flow
- **Event Creation**: Tests event creation with form validation and API mocking
- **Session Management**: Adds sessions to created events
- **Attendee Registration**: Tests registration process
- **API Testing**: Validates GET /api/events and POST /api/events/register endpoints
- **Certificate Generation**: Tests certificate creation on certificates.webmobi.com
- **UI Validation**: Ensures form elements are visible and functional
- **Error Handling**: Tests API error responses (400, 401)

## Technologies Used
- **Cypress 15.5.0**: E2E testing framework
- **JavaScript**: Test scripting
- **API Mocking**: Using cy.intercept() for backend simulation
- **Fixtures**: JSON data for test inputs

## Test Execution
Run tests with: `npx cypress run`

## Key Features Tested
- Form validations and error messages
- API response validations (status codes, JSON structure)
- UI element visibility and interactions
- Mocked API responses for isolated testing
- Cross-domain testing (events and certificates platforms)

## Bug Reporting
Any issues found during testing are documented in `bug-report-.md`.

## Environment
- Node.js v22.20.0
- Cypress 15.5.0
- Browser: Electron 138 (headless)

## Submission Files
- `cypress/e2e/test-event.cy.js`: Main test file
- `cypress/fixtures/event-data.json`: Test data
- `README.md`: Project documentation
- `bug-report-.md`: Bug reports (if any)
- Test execution video (to be recorded separately)
