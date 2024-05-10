const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByText('Language preferenceSelect a').click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('MenuIcon').click();
    await page.getByRole('link', { name: 'menu_book Study Bible' }).click();
    await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('button', { name: 'English english' }).click();
    await page.getByText('ESV : English Standard Version').click();
    await page.getByLabel('Choose a Bible book and').click();
    await page.getByRole('button', { name: 'Psalms' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();
  
})