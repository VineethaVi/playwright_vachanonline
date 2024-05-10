const { test, expect } = require('@playwright/test');
 
test('readingplans', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('button', { name: 'English english' }).click();
    await page.getByText('ESV : English Standard Version').click();
    await page.getByLabel('Click here to read the Bible').click();
    await page.getByTitle('Dictionaries').click();
//await page.getByRole('button', { name: 'EBD keyboard_arrow_downn' }).click();
  await page.getByText('EBD : Easton\'s Bible').click();
  await page.getByRole('button', { name: 'a bow keyboard_arrow_downn' }).click();
  await page.getByText('Abel', { exact: true }).click();

 })





// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://vachandev.netlify.app/');
//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'English' }).click();
//   await page.getByRole('menuitem', { name: 'English' }).click();
//   await page.getByLabel('Select a Bible in your').click();
//   await page.getByRole('button', { name: 'English english' }).click();
//   await page.getByText('ESV : English Standard Version').click();
//   await page.getByLabel('Click here to read the Bible').click();
//   await page.getByText('format_shapes').click();
//   await page.getByRole('button', { name: 'EBD keyboard_arrow_downn' }).click();
//   await page.getByText('EBD : Easton\'s Bible').click();
//   await page.getByRole('button', { name: 'a bow keyboard_arrow_downn' }).click();
//   await page.getByText('Abel', { exact: true }).click();
// });