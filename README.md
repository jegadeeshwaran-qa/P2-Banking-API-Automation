Banking API Automation

Project Overview

This project contains API automation tests for a banking application using Playwright and TypeScript.

The main purpose of the project is to validate API responses, status codes, response data, negative scenarios, pagination, and response metadata.

Application Under Test

Banking API practice environment:

"https://api.qaautomationlabs.com/v1"

Tech Stack

- Playwright
- TypeScript
- Node.js
- REST API
- JSON

Test Scenarios

The project currently covers 6 API test scenarios:

1. Get all bank accounts successfully
2. Get a single bank account successfully
3. Verify bank account details
4. Verify pagination information
5. Verify invalid account ID returns 404
6. Verify API response metadata

Validations Covered

- HTTP status codes
- JSON response body
- Account details
- Account balance
- Pagination information
- Error response for invalid account ID
- Response metadata

Project Structure

P2-Banking-API-Automation/
├── tests/
│   └── banking-api.spec.ts
├── test-data/
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore

How to Run

Install dependencies:

npm install

Run the API tests:

npx playwright test

Run the banking API test file:

npx playwright test tests/banking-api.spec.ts

Run with the list reporter:

npx playwright test tests/banking-api.spec.ts --reporter=list

Test Result

The test suite has been executed successfully against the banking API practice environment.

Note: The API is an external practice environment, so occasional connection timeouts may occur due to server or network availability. The tests were also verified successfully after rerunning the affected test.