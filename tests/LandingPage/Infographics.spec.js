import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Hindi' }).click();
  await page.getByTestId('PersonIcon').click();
  await page.getByLabel('ईमेल पता *').fill('vineethavijayan668@gmail.com');
  await page.getByLabel('पासवर्ड *').click();
  await page.getByLabel('पासवर्ड *').fill('Bible123');
  await page.getByRole('button', { name: 'साइन इन करें', exact: true }).click();
await page.getByRole('link', { name: 'image', exact: true }).click();
await page.getByRole('img', { name: 'I AM Sayings' }).click();
await page.locator('.react-viewer-icon').first().click();
await page.getByRole('link', { name: 'iconlogo' }).click();
// await page.getByRole('link', { name: 'event' }).click();
// await page.getByRole('button', { name: 'Numbers 17' }).click();
// await page.getByRole('link', { name: 'iconlogo' }).click();
})