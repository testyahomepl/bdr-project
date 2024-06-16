
import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({page}) => {
  ecomm = new Ecomm(page);
})


test('kupienie produktu bez zakładania konta', async ({ page }) => {
  //given  
  await ecomm.shopping().addToCart();

  //when
  await ecomm.shopping().completeTheForm()
 
  //then
  await ecomm.shopping().goToCheckout()

});

