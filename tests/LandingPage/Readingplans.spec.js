import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByTestId('PersonIcon').click();
  await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Bible123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('link', { name: 'event' }).click();
  await page.getByRole('button', { name: 'गिनती 19' }).click();
});