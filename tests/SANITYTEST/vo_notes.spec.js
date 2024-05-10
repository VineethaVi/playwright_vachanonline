
















const { test, expect } = require('@playwright/test');
 
test('notes', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Sign in').click();
    await page.getByLabel('Email Address *').click();
    await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Bible123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'Luke' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.getByText('1 Inasmuch as many have').click();
//     await page.getByLabel('Select a Bible in your').click();
//   await page.getByRole('button', { name: 'English english' }).click();
//   await page.getByText('ESV : English Standard Version').click();
//     await page.getByLabel('Choose a Bible book and').click();
//   await page.getByRole('button', { name: 'John' }).click();
//   await page.getByRole('button', { name: '1', exact: true }).click();
//   await page.getByLabel('Click here to read the Bible').click();
     await page.getByTitle("Notes").click();
//     await page.getByText('1 In the beginning was the').click();
    await page.locator('[type="button"][aria-label="add"]').click();
    await page.locator('[role="textbox"]').fill("Note for Luke 1:1");
    await page.getByText("Save").click();
     expect(await page.getByText("Note for Luke 1:1").nth(1).isVisible());
})

















// const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
// test('Notes', async({browser}) => { 
//     //Creating new default cognito instance and page without using global variables from playwright
//     await page.goto('https://vachandev.netlify.app/');
//     await page.getByRole('combobox').click();
//     await page.getByRole('option', { name: 'English' }).click();
//     //SignIn
//     await page.locator('//span[normalize-space()="Sign in"]').click();
//     await page.locator ('//input[@id="email"]').fill('vineethavijayan668@gmail.com');
//     await page.locator('//input[@id="password"]').fill('Bible123');
//     await page.locator('(//span[@class="MuiButton-label"][normalize-space()="Sign in"])[2]').click();
 
//     //open study mode, select a verse to add notes and verify notes created correctly
//     await page.getByText("START").click(); 
//     await page.getByTitle("Select a Bible in your language and version").click();
//     await page.locator('//span[normalize-space()="English"]').click();
//     await page.locator('//li[@value="eng-ESV"]').click();
//     // await page.getByRole('button', { name: 'John', exact: true })
//     // await page.locator('[data-bookcode="jhn"][data-chapter="1"]').click();
//     await page.getByTitle("Notes").click(); // click notes icon from side menu bar to add notes
//     //await page.locator('data-verse="2"').click(); //select second verse for adding notes
//     await page.getByText('2 He was in the beginning').click();
//     await page.locator('[type="button"][aria-label="add"]').click();
//     await page.locator('[role="textbox"]').fill("Note for John 1:2");
//     await page.getByText("Save").click();
//     expect(await page.getByText("Note for John 1:2").nth(1).isVisible());
// })