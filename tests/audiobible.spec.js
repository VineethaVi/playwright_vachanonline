import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachanonline.com/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('audio bible').click();
  await page.locator('#root div').filter({ hasText: 'Hindiयूहन्ना 1keyboard_arrow_downAudio Bible' }).locator('svg').click();
  await page.locator('#react-select-2-option-7').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.getByText('English ESV Audio Bible').click();
});