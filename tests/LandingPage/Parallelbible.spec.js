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
await page.getByRole('link', { name: 'import_contacts' }).click();
await page.getByLabel('अपनी भाषा और संस्करण में एक बाइबल चुनें').nth(1).click();
// await page.getByLabel('Select a Bible in your').nth(1).click();
await page.getByRole('button', { name: 'English english' }).click();
  await page.getByRole('list').getByText('ESV : English Standard Version').click();
//await page.getByRole('button', { name: 'हिंदी hindi' }).click();
//await page.getByRole('list').getByText('ESV : English Standard Version').click();
await page.getByRole('link', { name: 'iconlogo' }).click();
})