import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.locator('li').filter({ hasText: 'import_contacts' }).click();
  await page.getByLabel('Select a Bible in your').nth(1).click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByRole('list').getByText('ESV : English Standard Version').click();
  await page.getByTestId('ImportExportIcon').click();
  await page.getByTestId('ImportExportIcon').click();
  await page.getByTestId('ImportExportIcon').click();
});