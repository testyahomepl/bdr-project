import { expect, type Page} from "@playwright/test";
import { fakerPL } from "@faker-js/faker";
import * as dotenv from 'dotenv'
dotenv.config()

export class ShoppingCart {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
       
    async addToCart() {
        await this.page.goto('https://wearmedicine.com/c/on');
        await this.page.getByRole('button', { name: 'Zaakceptuj wszystkie' }).click();
        await this.page.locator('.ArticleTemplate__articleContent__m9g1Y > .ClickableOverlay__linkOverlayArea__1sVAd').first().click();
        await this.page.getByLabel('Produkt: Koszula męska z kołnierzykiem klasycznym i nadrukiem kolor żółty:').click();
        await this.page.getByText('Wybierz rozmiar').click();
        await this.page.locator('[data-test="baseSelectDropdownList"] div').filter({ hasText: 'S' }).first().click();
        await this.page.getByRole('button', { name: ' Dodaj do koszyka' }).click();
    }

    async completeTheForm() {
        await this.page.locator('[data-test="cart_icon"]').click();
        await this.page.getByRole('link', { name: 'Idź do kasy' }).click();
        await this.page.getByRole('link', { name: 'Zakupy bez rejestracji' }).click();
        await this.page.locator('[data-test="addAddressButton"]').click();
        await this.page.locator('[data-test="firstName"]').fill(fakerPL.person.firstName());
        await this.page.locator('[data-test="surname"]').fill(fakerPL.person.lastName());
        await this.page.locator('[data-test="street"]').fill(fakerPL.location.street());
        await this.page.locator('[data-test="houseNumber"]').fill(fakerPL.number.int({max: 10}).toString());
        await this.page.locator('[data-test="postalCode"]').fill(fakerPL.location.zipCode());
        await this.page.locator('[data-test="city"]').fill(fakerPL.location.city());
        await this.page.locator('[data-test="phone"]').fill(fakerPL.phone.number());
        await this.page.locator('[data-test="email"]').fill(fakerPL.internet.email());
        await this.page.locator('[data-test="addressStepSubmitButton"]').click();
        await this.page.getByText('Kurier DPD11.90 zł').click();
        await this.page.getByText('Płatność przy odbiorze0.00 zł').click();
        await this.page.locator('span:has-text("Akceptuję")').check();
    }

    async goToCheckout() {
        await this.page.locator('[data-test="onePageCheckoutExternalPaymentButton"]').click();
        await expect(this.page.getByRole('heading', { name: 'Dziękujemy za zakupy!' })).toBeVisible();
    }
    
    async removeFromCart() {
        //  test na usuwanie 
    }

}


