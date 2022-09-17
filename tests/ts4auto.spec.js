import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.redmine.org/
  await page.goto('https://www.redmine.org/');

  // Click input[name="q"]
  await page.locator('input[name="q"]').click();

  // Fill input[name="q"]
  await page.locator('input[name="q"]').fill('Redmine');

  // Press Enter
  await page.locator('input[name="q"]').press('Enter');
  await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/search?utf8=%E2%9C%93&wiki_pages=1&q=Redmine');

  // Click //*[@id="search-results"]/dt[1]/a
  await page.locator('//*[@id="search-results"]/dt[1]/a').click();
  await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/List_of_vendored_third-party_core_components');

});