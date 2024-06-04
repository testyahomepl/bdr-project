import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({page}) => {
  ecomm = new Ecomm(page);
})


test('Poprawne logowanie ', async ({ page }) => {
  //given
  // await page.goto('https://wearmedicine.com/c/on');
  // await page.getByRole('button', { name: 'Zaakceptuj wszystkie' }).click();
  // await page.locator('[data-test="my_account_icon"]').click();
  await ecomm.menu().goToLogin();
  //when
  // await page.locator('[id="_username"]').fill(process.env.LOGIN!);
  // await page.locator('[id="_password"]').fill(process.env.PASSWORD!);
  // await page.getByRole('button', { name: 'Zaloguj się' }).click();
  await ecomm.login().loginToPanel();
  //then
  await ecomm.login().checkSuccessfulLogin()
});


