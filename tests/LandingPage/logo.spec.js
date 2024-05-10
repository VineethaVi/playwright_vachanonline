const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByRole('link', { name: 'iconlogo' }).click();
})