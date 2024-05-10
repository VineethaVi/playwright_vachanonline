import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByTestId('PersonIcon').locator('path').click();
  await page.getByLabel('Email Address *').fill('vineethavijayan668@gmail.com');
 // await page.getByLabel('Email Address *').press('Tab');
  await page.getByLabel('Password *').fill('Bible123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.getByText('The sick man answered him, “Sir, I have no one to put me into the pool when the water is stirred up, and while I am going another steps down before me.”').click();
 // await page.getByTestId(name:'b').click();
 await page.locator('//*[@id="root"]/div[2]/div[1]/div/div/div[3]/div').isVisible();
 await page.getByTestId('LensRoundedIcon').nth(2).click();
 //await page.getByRole('option', { name: 'b' }).click();
  
  //await page.locator('li').filter({ hasText: 'border_color' }).click();
//   await page.getByLabel('Close').click();
//   await page.getByText('7 The sick man answered him').click();
//   await page.getByText('2 Now there is in Jerusalem').click();
//   await page.locator('#root').getByText('2', { exact: true }).click();
//   await page.getByText('2 Now there is in Jerusalem').click();
//   await page.getByText('3 In these lay a multitude of').click();
//   await page.getByLabel('Close').click();
//   await page.getByText('5 One man was there who had').click();
//   await page.getByText('5 One man was there who had').click({
//     button: 'right'
//   });
//   await page.getByText('5', { exact: true }).nth(1).click();
//   await page.getByText('settings').click();
//   await page.getByLabel('Hover Verse').uncheck();
//   await page.locator('div:nth-child(8) > .MuiBackdrop-root').click();
//   await page.getByText('7 The sick man answered him').click();
//   await page.getByText('43 I have come in my Father’s').click();
//   await page.getByText('border_color').click();
});