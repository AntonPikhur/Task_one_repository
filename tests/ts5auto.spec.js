import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.redmine.org/
  await page.goto('https://www.redmine.org/');

  // Click //*[@id="main-menu"]/ul/li[1]/a
  await page.locator('//*[@id="main-menu"]/ul/li[1]/a').click();
  await expect(page).toHaveURL('https://www.redmine.org/projects/redmine');

  // Click //*[@id="content"]/div[2]/div[2]/ul/li[1]/a
  await page.locator('//*[@id="content"]/div[2]/div[2]/ul/li[1]/a').click();
  await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/issues?set_filter=1&tracker_id=1');

  // Click //*[@id="issue-37676"]/td[2]/a
  await page.locator('//*[@id="issue-37676"]/td[2]/a').click();
  await expect(page).toHaveURL('https://www.redmine.org/issues/37676');

});