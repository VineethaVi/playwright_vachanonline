const { test, expect } = require('@playwright/test');
 
test('bookmark', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Sign in').click();
    await page.getByLabel('Email Address *').click();
    await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Bible123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: '1 Peter' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
//  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
//  await page.getByRole('button', { name: 'English english' }).click();
//  await page.getByText('ESV : English Standard Version').click();
//  await page.getByLabel('Click here to read the Bible').click();
//  await page.getByLabel('Choose a Bible book and').click();
//  await page.getByRole('button', { name: '1 Peter' }).click();
//  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByTestId('BookmarkIcon').locator('path').click();
  await page.getByTestId('BookmarkBorderIcon').click();
  await page.getByText('bookmark', { exact: true }).click();


// 
});