# P2 - Banking API Automation

Playwright + TypeScript API automation project for testing banking account endpoints.

## Project Overview

This project focuses on validating API responses, status codes, JSON data, pagination, and negative scenarios.

## Application Under Test

Banking API practice environment:

https://api.qaautomationlabs.com/v1

## Tools and Technologies

- Playwright
- TypeScript
- Node.js
- REST API
- JSON
- GitHub Actions

## Test Coverage

The project covers these API scenarios:

- Get all bank accounts successfully
- Get a single bank account successfully
- Verify bank account details
- Verify pagination information
- Verify an invalid account ID returns `404`
- Verify API response metadata

## Validations

- HTTP status codes
- JSON response body
- Account details
- Account balance
- Pagination information
- Error responses
- Response metadata

## Project Structure

```text
P2-Banking-API-Automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── test-data/
├── tests/
│   └── banking-api.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Test Execution

Install dependencies:

```bash
npm install
```

Run all API tests:

```bash
npx playwright test
```

Run the banking API test file:

```bash
npx playwright test tests/banking-api.spec.ts
```

Run with the list reporter:

```bash
npx playwright test tests/banking-api.spec.ts --reporter=list
```

## GitHub Actions CI

GitHub Actions is configured to:

1. Check out the repository
2. Install npm dependencies
3. Run the Playwright API test suite

## Note

This project uses a public practice API. Test results can be affected by external service or network availability.

## What I Practiced

- API testing using Playwright and TypeScript
- HTTP status-code validation
- JSON response validation
- Positive and negative API scenarios
- Pagination validation
- GitHub Actions CI
