import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Click to read the Verse').click();
  await page.getByRole('button', { name: 'Read 1 थिस्सलुनीकियों' }).click();
  await page.getByRole('link', { name: 'iconlogo' }).click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Click to read the Verse').click();
  await page.getByRole('button', { name: 'Read 1 Thessalonians' }).click();
});