//const {test , expect} = require('@playwright/test')
import { test, expect } from '@playwright/test';
test('search',async({page})=>{
   await page.goto('https://vachandev.netlify.app/')
   await expect(page).toHaveTitle('VachanOnline | The Indian Languages Bible Study Site')
})
 test('searchreference',async({page})=>{
    await page.goto('https://vachandev.netlify.app/')
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    //select language from language drop-down
    
   
    await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('button', { name: 'English english' }).click();
   await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'Psalms' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('link', { name: 'Read and share the Bible in' }).click();
  await page.getByPlaceholder('Enter Bible Reference').click();
  await page.getByPlaceholder('Enter Bible Reference').fill('Genesis 1');
  await page.getByRole('button', { name: 'manage_search' }).click();
 //   await page.locator('//*[@id="root"]/div/div[4]/div/div/button[1]/div').click();
   // await page.locator('//button[@title="Select a Bible in your language and version"]').click();
   // await page.locator('//span[normalize-space()="English"]').click();
   // await page.locator('//li[@value="eng-ESV"]').click();
//select book from book drop-down
//await page.locator('//*[@id="root"]/div/div[4]/div/div/button[2]/div').click();

//await page.getByTitle("Choose a Bible book and chapter to read").click();
 //await page.getByRole('button', { name: 'John', exact: true })
 // await page.locator('[data-bookcode="jhn"][data-chapter="1"]').click();


  //search reference
  //await page.locator('//*[@id="root"]/div/div[1]/header/div/form/div/input').click();
  //await page.locator('//*[@id="root"]/div/div[1]/header/div/form/div/input').fill('Psalms 1');
    //await page.getByText("search").click();
   //await page.getByPlaceholder('Enter Bible Reference').fill('John 1');
  // await page.locator('input[placeholder="Enter Bible Reference"]').fill('John 1');

 });
 test('searchtext',async({page})=>{
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