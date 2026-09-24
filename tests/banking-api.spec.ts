import { test, expect } from '@playwright/test';

const baseUrl = 'https://api.qaautomationlabs.com/v1';

test.describe('Banking API Tests', () => {

  test('Get all bank accounts successfully', async ({ request }) => {
    const response = await request.get(`${baseUrl}/accounts`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.data.length).toBeGreaterThan(0);
    expect(responseBody.pagination.totalItems).toBeGreaterThan(0);
  });

  test('Get a single bank account successfully', async ({ request }) => {
    const response = await request.get(`${baseUrl}/accounts/1`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.accountNumber).toBeTruthy();
    expect(responseBody.data.holder).toBeTruthy();
    expect(responseBody.data.balance).toBeGreaterThanOrEqual(0);
  });

  test('Verify bank account details', async ({ request }) => {
    const response = await request.get(`${baseUrl}/accounts/1`);

    expect(response.status()).toBe(200);

    const account = (await response.json()).data;

    expect(account).toHaveProperty('id');
    expect(account).toHaveProperty('accountNumber');
    expect(account).toHaveProperty('holder');
    expect(account).toHaveProperty('type');
    expect(account).toHaveProperty('balance');
    expect(account).toHaveProperty('currency');
    expect(account).toHaveProperty('status');
    expect(account).toHaveProperty('openedAt');
  });

  test('Verify pagination information for accounts', async ({ request }) => {
    const response = await request.get(`${baseUrl}/accounts`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.pagination.page).toBe(1);
    expect(responseBody.pagination.pageSize).toBeGreaterThan(0);
    expect(responseBody.pagination.totalPages).toBeGreaterThan(0);
  });

  test('Return 404 for an invalid account ID', async ({ request }) => {
    const response = await request.get(`${baseUrl}/accounts/999999`);

    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    expect(responseBody.error.code).toBe('NOT_FOUND');
    expect(responseBody.error.status).toBe(404);
  });

  test('Verify API response metadata', async ({ request }) => {
    const response = await request.get(`${baseUrl}/accounts/1`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.meta.requestId).toBeTruthy();
    expect(responseBody.meta.apiVersion).toBe('1.0.0');
  });

});