import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({page}) => {
  ecomm = new Ecomm(page);
})

test('Wysyłanie wiadomości przez formularz kontaktowy', async () => {

  // given  
  await ecomm.contact().goToContactForm()

  // when
  await ecomm.contact().completeContactForm()

  // then 
  await ecomm.contact().messageWasSent()

});



