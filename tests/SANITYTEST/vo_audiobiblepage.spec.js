const { test, expect } = require('@playwright/test');

 
test('audiobiblepage', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('MenuIcon').click();
    await page.getByRole('link', { name: 'audiobible' }).click();
})