const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
 
test ("highlights" , async ({browser,page})=> {
 
    const email = "jesni91@gmail.com";
    const password = "zane#2015";
 
    await page.goto("https://vachandev.netlify.app/");
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
 
 
    //SignIn
    await page.getByTestId('PersonIcon').locator('path').click();
    await page.getByLabel('Email Address *').fill(email);
    await page.getByLabel('Password *').fill(password);
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByRole('link', { name: 'border_color' }).click();
    await page.getByText('1 आदि में [a').click();
    await page.locator('[data-testid="LensRoundedIcon"][data-code="a"]').click();
 
    await getByText('border_color').click();
    expect(await page.getByRole('button', { name: 'Hin-IRV यूहन्ना 1:1 delete' }).isVisible());
})