const { test, expect } = require('@playwright/test');
test('whatsnew', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('PersonIcon').locator('path').click();
    await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Bible123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  //  await page.getByText('What's New').click();
  await page.getByRole('button',{ name: "What's New" }).click();
  await page.getByText('Features available on Vachan Online').click();
  await page.getByText('Close').click();
})