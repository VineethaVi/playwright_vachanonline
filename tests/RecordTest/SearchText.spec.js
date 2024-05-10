import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Hindi' }).click();
  await page.getByLabel('अपनी भाषा और संस्करण में एक बाइबिल चुनें').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('पढ़ने के लिए बाइबल की एक किताब और अध्याय चुनें').click();
  await page.getByRole('button', { name: 'Genesis' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByPlaceholder('बाइबिल संदर्भ दर्ज करें').click();
  await page.getByPlaceholder('बाइबिल संदर्भ दर्ज करें').fill('Moses');
  await page.getByRole('button', { name: 'manage_search' }).click();
});