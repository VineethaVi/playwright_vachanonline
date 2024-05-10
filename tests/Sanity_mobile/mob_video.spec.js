const { test, expect } = require('@playwright/test');
 
test('videosidenav', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
   await page.getByRole('combobox').click();
   await page.getByRole('option', { name: 'English' }).click();
//     await page.getByLabel('Read, annotate and search Bibles and study material').click();
       await page.getByLabel('Click here to read the Bible').click();
    await page.getByText('videocam').click();
await page.getByRole('button', { name: 'Video Overview: New Testament' }).click();
await page.frameLocator('iframe').locator('video').click();
})