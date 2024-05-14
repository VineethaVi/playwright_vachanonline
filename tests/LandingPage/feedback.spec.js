const { test, expect, chromium } = require('playwright/test');
 
test("highlights", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
 
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
 
  await page.click('//a[normalize-space()="Feedback"]');
 
  // Wait for the new page to be opened
  const newPage = await context.waitForEvent('page');
 
  await newPage.waitForLoadState('domcontentloaded');
 
  await newPage.getByRole('button', { name: 'Start now' }).click();
 
  await newPage.fill('[aria-describedby="ra90f1124ef0a40c3bf00b1c47c63c369_validationError"]', "test-email");
 
  await newPage.fill('[aria-describedby="rb425038c5b164e77b716c1e7a9345748_validationError"]', "test-name");
 
  await newPage.click('[viewBox="0 0 2048 2048"]');
 
  await newPage.click('[aria-label="Website"]');
 
  await newPage.getByLabel('4.Feedback related toSingle').click();
// await newPage.locator('aria-label="Features"').click();
await newPage.getByText("Features").click();
  //await newPage.click('(//div[@role="option"])[2]');
 
  await newPage.click('[aria-label="Next"]');
 
  await newPage.getByLabel('5.Functionality/Feature being').fill("test-feature");
 
  await newPage.click('[aria-label="Next"]');
 
  await newPage.getByPlaceholder('Enter your answer').fill("test-feedback");
 
  await newPage.getByRole('button', { name: 'Submit' }).click();
 
  expect(await newPage.getByText("Your response was submitted.").isVisible());
  // Close the browser
  await browser.close();
});




// const { test, expect } = require('@playwright/test');
// test('feedback', async ({ page }) => {
//   //const page1 = await page1Promise;
  
//     await page.goto('https://vachandev.netlify.app/');
//     await page.getByRole('combobox').click();
//     await page.getByRole('option', { name: 'English' }).click();
//     await page.getByTestId('PersonIcon').locator('path').click();
//     await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
//     await page.getByLabel('Password *').click();
//     await page.getByLabel('Password *').fill('Bible123');
//     await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    
//  await page.getByText('Feedback').click();
// // await page.getByRole('button', { name: 'Start now' }).click();
// //await page1.getByRole('button', { name: 'Start now' }).click();
//  //await page.getByRole('button', { name: 'Start now' }).click();
//  // await page.getByText('Start now').click();
//  await page.getByRole('button', { name: 'Start now' }).click();
//   await page.getByPlaceholder('Enter your answer').click();
//   await page.getByPlaceholder('Enter your answer').fill('vineethavijayan668@gmail.com');
//   await page.getByText('Name').click();
//   await page.getByPlaceholder('Enter your answer').fill('vineetha');
//   await page.getByText('Platform').click();
// })