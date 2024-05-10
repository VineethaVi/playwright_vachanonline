import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByRole('link', { name: 'Read, annotate and search' }).click();
  await page.getByLabel('Select a Bible in your').nth(1).click();
  await page.getByRole('list').getByText('IRV : Indian Revised Version').click();
  await page.getByLabel('Select a Bible in your').nth(1).click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByLabel('Select a Bible in your').first().click();
  await page.locator('#simple-menu > .MuiBackdrop-root').first().click();
});































//import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://vachandev.netlify.app/');
//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'English' }).click();
//   await page.getByRole('link', { name: 'Read, annotate and search' }).click();
//   await page.getByText('import_contacts').click();
//   await page.getByLabel('Select a Bible in your').nth(1).click();
//   await page.getByRole('button', { name: 'English english' }).click();
//   await page.getByRole('list').getByText('ESV : English Standard Version').click();
// });

//import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://vachandev.netlify.app/');
//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'English' }).click();
//   await page.getByRole('link', { name: 'Read, annotate and search' }).click();
//  // await page.locator('li').filter({ hasText: 'import_contacts' }).click();
//   await page.getByLabel('Select a Bible in your').nth(1).click();
//   //await page.locator('#simple-menu > .MuiBackdrop-root').first().click();
//   //await page.getByLabel('Select a Bible in your').nth(1).click();
//   //await page.getByRole('button', { name: 'English english' }).click();
//   //await page.getByRole('list').getByText('ESV : English Standard Version').click();
//   //await page.getByText('ESVkeyboard_arrow_down').click();
//   await page.getByRole('button', { name: 'हिंदी hindi' }).click();
// //  await page.getByRole('list').getByText('IRV : Indian Revised Version').click();
// await page.getByText('IRV : Indian Revised Version').click();
// });