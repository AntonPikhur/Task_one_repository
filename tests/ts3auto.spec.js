// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.redmine.org/
  await page.goto('https://www.redmine.org/');

  // Click .login
  await page.locator('.login').click();
  await expect(page).toHaveURL('https://www.redmine.org/login');

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('atrops3');

  // Click input[name="password"]
  await page.locator('input[name="password"]').click();

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('atrops3');

  // Click //*/tr[4]/td[2]/input »
  await page.locator('//*/tr[4]/td[2]/input').click();
  const errorMsg = await page.locator('//*[@id="flash_error"]');
  await expect(errorMsg).toBeVisible();

});