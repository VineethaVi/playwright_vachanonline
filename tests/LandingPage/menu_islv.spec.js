const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByText('Language preferenceSelect a').click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('MenuIcon').click();
    await page.getByRole('link', { name: 'sign_language ISLV Bible' }).click();
  
})


