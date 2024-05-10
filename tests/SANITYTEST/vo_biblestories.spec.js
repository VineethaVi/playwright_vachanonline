const { test, expect } = require('@playwright/test');
test('islstories', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('MenuIcon').click();
    await page.getByRole('link', { name: 'auto_stories Bible Stories' }).click();
    await page.getByRole('combobox').click();
    await page.getByText('indian sign language').click();
    await page.getByText('1.The Creation').click();
    await page.getByRole('link', { name: 'Sin Enters the World' }).click();
    await page.frameLocator('iframe[title="\\32 \\. Sin Enters the World \\| Open Bible Stories - Indian Sign Language \\(ISL\\)"]').getByLabel('Play', { exact: true }).click();
    await page.frameLocator('iframe[title="\\32 \\. Sin Enters the World \\| Open Bible Stories - Indian Sign Language \\(ISL\\)"]').getByLabel('Pause keyboard shortcut k').click();
    await page.locator('iframe[title="\\32 \\. Sin Enters the World \\| Open Bible Stories - Indian Sign Language \\(ISL\\)"]').click();
    await page.frameLocator('iframe[title="\\32 \\. Sin Enters the World \\| Open Bible Stories - Indian Sign Language \\(ISL\\)"]').locator('video').click();
})

test('storytext', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByTestId('MenuIcon').locator('path').click();
    await page.getByRole('link', { name: 'auto_stories Bible Stories' }).click();
    await page.getByRole('combobox').click();
    await page.getByText('hindi', { exact: true }).click();
    await page.getByRole('link', { name: 'पाप संसार में प्रवेश करता है' }).click();
    await page.locator('p:nth-child(4) > img').click();
  });