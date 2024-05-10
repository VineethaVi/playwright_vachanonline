const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByText('Language preferenceSelect a').click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('LanguageIcon').click();
    await page.getByRole('menuitem', { name: 'Hindi' }).click();
    await page.getByTestId('LanguageIcon').click();
    await page.getByRole('menuitem', { name: 'English' }).click();
    
    // await page.getByLabel('Languages').click();
    // await page.getByText('English').click();
    //await page.getByText('Hindi').click();
})

// test('hindi', async ({ page }) => {
//    // await page.goto('https://vachandev.netlify.app/');
//     await page.getByText('Language preferenceSelect a').click();
//     await page.getByRole('combobox').click();
//     await page.getByRole('option', { name: 'English' }).click();
//     await page.getByLabel('Languages').click();
//     await page.getByText('Hindi').click();
// })






