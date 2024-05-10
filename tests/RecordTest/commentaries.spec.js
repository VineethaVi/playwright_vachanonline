// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://vachandev.netlify.app/');
//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'English' }).click();
//   await page.getByLabel('Select a Bible in your').click();
//   await page.getByRole('button', { name: 'English english' }).click();
//   await page.getByText('ESV : English Standard Version').click();
//   await page.getByLabel('Choose a Bible book and').click();
//   await page.getByRole('button', { name: 'Genesis' }).click();
//   await page.getByRole('button', { name: '1', exact: true }).click();
//   await page.getByLabel('Click here to read the Bible').click();
//   await page.getByText('comment', { exact: true }).click();
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('list').getByText('IRV : Indian Revised Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'यूहन्ना', exact: true }).click();
  await page.getByRole('button', { name: 'यूहन्ना', exact: true }).click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.getByText('comment', { exact: true }).click();
  await page.getByText('Introduction to यूहन्ना').click();
  await page.getByText('Introduction to यूहन्ना').click();
});