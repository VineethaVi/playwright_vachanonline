const { test, expect } = require('@playwright/test');
test('songs', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('MenuIcon').click();
    await page.getByRole('link', { name: 'songs' }).click();
    await page.getByRole('link', { name: 'यीशु दे पिच्‍छे' }).click();
    //await page.locator('//*[@id="root"]/div/div[2]/div[2]/div/audio').click();
    await page.locator('//*[@id="root"]/div/div[2]/div[2]/div/audio').click();
})