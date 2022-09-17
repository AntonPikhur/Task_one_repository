// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    function makeLogin(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
          charactersLength));
        }
        return result;
      }

    function makeEmail() {
        var strValues = "abcdefg12345";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    }

    function makePass(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
        }
        return result;
    }

    const genLogin = makeLogin(6);
    const genPass = makePass(8);
    const genEmail = makeEmail();

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