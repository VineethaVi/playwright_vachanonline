const { test, expect } = require('@playwright/test');
test('islv', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('button', { name: 'English english' }).click();
    await page.getByText('ESV : English Standard Version').click();
    await page.getByLabel('Choose a Bible book and').click();
    await page.getByRole('button', { name: 'Matthew' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();
    await page.getByLabel('Click here to read the Bible').click();
    await page.getByText('Menu').click();
   // await page.locator('//*[@id="root"]/header/div/span[5]/div/svg').click();
    await page.getByTitle('ISLV Bible').click();
   // await page.locator('.react-viewer-icon').first().click();
})