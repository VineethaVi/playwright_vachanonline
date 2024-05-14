const { test, expect,chromium} = require('@playwright/test');

test('test', (async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByTestId('ShareIcon').click();
link=await page.locator('//textarea[@id="share-url"]').innerText();
await newPage.goto('link');
//  await page.getByText('1 Thessalonians 5:21 eng-ULB').click();
//   await page.getByText('1 Thessalonians 5:21 eng-ULB').click();
//   await page.getByText('1 Thessalonians 5:21 eng-ULB').click();
//   await page.getByText('1 Thessalonians 5:21 eng-ULB').click();
//   await page1.goto('https://vachandev.netlify.app/');
//   await page.getByText('1 Thessalonians 5:21 eng-ULB').click({
//     button: 'right'
//   });
  await page2.goto('https://vachandev.netlify.app/read?version=eng-ULB&reference=1th.5.21');
   await page2.getByRole('button', { name: 'Read 1 Thessalonians' }).click();
   await page.getByLabel('Click to read the Verse').click();
}))