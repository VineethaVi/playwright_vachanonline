const { test, expect } = require('@playwright/test');
 
test('pbible', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Sign in').click();
    await page.getByLabel('Email Address *').click();
    await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Bible123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByLabel('Click here to read the Bible').click();
await page.getByLabel('Select a Bible in your language and version').click();
await page.locator('//*[@id="simple-menu"]/div[3]/ul/div[5]/div[1]/div[1]/p/span[1]').click();
await page.getByText('ESV : English Standard Version').click();
//await page.locator('//*[@id="root"]/div[2]/div/div/div/div[1]/div/div[1]/button[1]/div').click();
//   await page.getByRole('button', { name: 'English english' }).click();
//   await page.getByText('ESV : English Standard Version').click();
//   await page.getByLabel('Choose a Bible book and').click();
//   await page.getByRole('button', { name: '1 Peter' }).click();
})