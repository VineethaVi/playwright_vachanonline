 const { test, expect } = require('@playwright/test');
 test('signIn', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
  await page.getByText('Language preferenceSelect a').click();
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByTestId('PersonIcon').locator('path').click();
  await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Bible123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('account of current user').click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
})


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://vachandev.netlify.app/');
//   await page.getByText('Language preferenceSelect a').click();
//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'English' }).click();
//   await page.getByTestId('PersonIcon').locator('path').click();
//   await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
//   await page.getByLabel('Password *').click();
//   await page.getByLabel('Password *').fill('Bible123');
//   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
//   await page.getByLabel('account of current user').click();
//   await page.getByRole('button', { name: 'Sign Out' }).click();
// });