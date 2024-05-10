import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.locator('div').filter({ hasText: 'Select a Language' }).nth(4).click();
  await page.getByRole('option', { name: 'English' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get the app on the Google' }).click();
  const page1 = await page1Promise;
  await page1.getByAltText('Icon image').first().click();
});