
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  //await page.getByRole('option', { name: 'English' }).click();
  await page.getByRole('option', { name: 'Hindi' }).click();
  await page.getByTestId('PersonIcon').click();
  await page.getByLabel('ईमेल पता *').fill('vineethavijayan668@gmail.com');
  await page.getByLabel('पासवर्ड *').click();
  await page.getByLabel('पासवर्ड *').fill('Bible123');
  await page.getByRole('button', { name: 'साइन इन करें', exact: true }).click();await page.getByRole('link', { name: 'sign_language' }).click();
await page.getByLabel('पढ़ने के लिए बाइबल की एक किताब और अध्याय चुनें').click();
await page.getByRole('button', { name: 'Exodus' }).click();
await page.getByRole('button', { name: '1', exact: true }).click();
await page.frameLocator('iframe[title="Introduction To The Book Of Exodus \\| Holy Bible - Indian Sign Language Version \\(ISLV\\)"]').getByLabel('Play', { exact: true }).click();
await page.frameLocator('iframe[title="Introduction To The Book Of Exodus \\| Holy Bible - Indian Sign Language Version \\(ISLV\\)"]').getByLabel('Pause keyboard shortcut k').click();
await page.getByText('विवरण').first().click();
await page.getByTestId('ExpandLessIcon').click();
await page.getByRole('link', { name: 'iconlogo' }).click();
})