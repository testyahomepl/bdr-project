
import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({page}) => {
  ecomm = new Ecomm(page);
})


test('Usuwanie produktu z koszyka', async () => {

  //given  
  await ecomm.shopping().addToCart();

  //when
  await ecomm.shopping().removeFromCart();
  
  //then
  await ecomm.shopping().isCartEmpty();
});


