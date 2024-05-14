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
  
  await page.locator('[aria-label="May 14, 2024"]').click();
  expect(await page.getByText('Bible references for 14-May-2024').isVisible());
  await page.getByRole('button', { name: 'Numbers 23' }).click();
  expect(await page.getByText('Balaam’s First Oracle').isVisible());
});