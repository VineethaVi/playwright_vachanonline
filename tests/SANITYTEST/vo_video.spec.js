const { test, expect } = require('@playwright/test');
 
test('video', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('button', { name: 'English english' }).click();
    await page.getByText('ESV : English Standard Version').click();
    await page.getByLabel('Choose a Bible book and').click();
    await page.getByRole('button', { name: 'Matthew' }).click();
    await page.getByRole('button', { name: '1', exact: true }).click();
    await page.getByText('See scriptures come alive in images and videos').click();
    await page.getByRole('button',{name:'Overview: New Testament'}).click();
    await page.frameLocator('iframe').locator('video').click();
   // await page.getByRole('link', { name: 'See scriptures come alive in' }).click();
    //await page.getByRole('button', { name: 'Video Overview: New Testament' }).click();
    //await page.frameLocator('iframe').locator('video').click();
    await page.getByLabel('Close the modal by clicking').click();
  
   // await page.getByRole('video', { name:'video-stream html5-main-video' }).click();
   // await page.getByRole('button',{name:'ytp-play-button ytp-button'}).click();

})
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

// })