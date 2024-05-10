const {test , expect} = require('@playwright/test')
test('search',async({page})=>{
   await page.goto('https://vachanonline.com/')
   await expect(page).toHaveTitle('VachanOnline | The Indian Languages Bible Study Site')
})
 test('searchtext',async({page})=>{
    await page.goto('https://vachanonline.com/')
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    //await page.locator('//*[@id="root"]/div/div[3]/div/div/button[1]/div').click();
    //await page.pause();
   //await page.locator('//[@class=material-icons css-lu2jod]').click();
   
    //await page.getByLabel
    await page.locator('//*[@id="root"]/div/div[4]/div[4]/a').click();
    await page.locator('//*[@id="root"]/div[2]/div[2]/div/nav/li[1]/div/div/i').click();
    await page.locator('//*[@class=MuiInputBase-input css-mnn31]').click();
    await page.locator('//*[@id="root"]/div[2]/div[1]/div[2]/div/div[1]/div[1]/form/div/input').click();
   await page.locator('//*[@id="root"]/div[2]/div[1]/div[2]/div/div[1]/div[1]/form/div/input').fill('Joy');
   //await page.pause()
   //await page.locator('//*[@id="root"]/div[2]/div[1]/div[2]/div/div[1]/div[1]/form/button/svg').click();
   //*[@id="root"]/div[2]/div[1]/div[2]/div/div[1]/div[1]/form/button/svg
  
 })
 