import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'Matthew' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.getByText('image_outline').click();
  await page.getByRole('img', { name: 'Israel in Gospel\'s Map' }).click();
  await page.locator('.react-viewer-close').click();
});