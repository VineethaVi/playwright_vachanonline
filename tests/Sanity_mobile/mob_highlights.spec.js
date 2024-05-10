const { test, expect } = require('@playwright/test');
test('commentaries', async ({ page }) => {
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
    await page.getByRole('list').getByText('IRV : Indian Revised Version').click();
    await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.getByText('इन बातों के पश्चात् यहूदियों का एक पर्व हुआ, और यीशु यरूशलेम को गया।').click();
  await page.locator('//*[@id="root"]/div[2]/div/div/div/div[3]').isVisible();
  await page.locator('//*[@id="root"]/div[2]/div/div/div/div[3]/div/div[1]/div[1]/div/svg[1]').click();
  //await page.getByText('Menu').click();
 // await page.getByTitle('Highlights').click();
})