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
  await page.getByRole('link', { name: 'comment' }).click();
 
});