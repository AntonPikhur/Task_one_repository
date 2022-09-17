// @ts-check
import { test, expect } from '@playwright/test';
const generatorPage = require ('../helper/generator.page')

test('test', async ({ page }) => {

    const genLogin = generatorPage.makeLogin(6);
    const genPass = generatorPage.makePass(8);
    const genEmail = generatorPage.makeEmail();

  // Go to https://www.redmine.org/
  await page.goto('https://www.redmine.org/');

  // Click .register
  await page.locator('.register').click();
  await expect(page).toHaveURL('https://www.redmine.org/account/register');

  // Click input[name="user\[login\]"]
  await page.locator('input[name="user\\[login\\]"]').click();

  // Fill input[name="user\[login\]"]
  await page.locator('input[name="user\\[login\\]"]').fill(genLogin);

  // Click input[name="user\[password\]"]
  await page.locator('input[name="user\\[password\\]"]').click();

  // Fill input[name="user\[password\]"]
  await page.locator('input[name="user\\[password\\]"]').fill(genPass);

  // Click input[name="user\[password_confirmation\]"]
  await page.locator('input[name="user\\[password_confirmation\\]"]').click();

  // Fill input[name="user\[password_confirmation\]"]
  await page.locator('input[name="user\\[password_confirmation\\]"]').fill(genPass);

  // Click input[name="user\[firstname\]"]
  await page.locator('input[name="user\\[firstname\\]"]').click();

  // Fill input[name="user\[firstname\]"]
  await page.locator('input[name="user\\[firstname\\]"]').fill(genLogin);

  // Click input[name="user\[lastname\]"]
  await page.locator('input[name="user\\[lastname\\]"]').click();

  // Fill input[name="user\[lastname\]"]
  await page.locator('input[name="user\\[lastname\\]"]').fill(genLogin);

  // Click input[name="user\[mail\]"]
  await page.locator('input[name="user\\[mail\\]"]').click();

  // Fill input[name="user\[mail\]"]
  await page.locator('input[name="user\\[mail\\]"]').fill(genEmail);

  // Click name=Submit
  await page.locator('//*[@name="commit"]').click();
  await expect(page).toHaveURL('https://www.redmine.org/login');

});