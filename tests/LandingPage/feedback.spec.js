const { test, expect } = require('@playwright/test');
test('feedback', async ({ page }) => {
  //const page1 = await page1Promise;
  
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('PersonIcon').locator('path').click();
    await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Bible123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    
 await page.getByText('Feedback').click();
// await page.getByRole('button', { name: 'Start now' }).click();
//await page1.getByRole('button', { name: 'Start now' }).click();
 //await page.getByRole('button', { name: 'Start now' }).click();
  await page.getByText('Start now').click();
  await page.getByPlaceholder('Enter your answer').click();
  await page.getByPlaceholder('Enter your answer').fill('vineethavijayan668@gmail.com');
  await page.getByText('Name').click();
  await page.getByPlaceholder('Enter your answer').fill('vineetha');
  await page.getByText('Platform').click();
})