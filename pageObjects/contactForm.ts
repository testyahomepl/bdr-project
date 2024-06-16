import { expect, type Page} from "@playwright/test";
import { fakerPL } from "@faker-js/faker";
import * as dotenv from 'dotenv'
dotenv.config()

export class ContactForm {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
       
    async goToContactForm() {
        await this.page.goto('https://wearmedicine.com/c/on');
        await this.page.getByRole('button', { name: 'Zaakceptuj wszystkie' }).click();
        await this.page.getByRole('link', { name: 'Formularz kontaktowy' }).click();
    }

    async completeContactForm() {
        await this.page.locator('[data-test="name"]').fill(fakerPL.person.firstName() + ' ' + fakerPL.person.lastName());
        await this.page.getByPlaceholder('Email').fill(fakerPL.internet.email());
        await this.page.getByPlaceholder('Numer telefonu').fill(fakerPL.phone.number());
        await this.page.locator('[data-test="dynamicSelect"] div').click();
        await this.page.getByText('Inny').click();
        await this.page.locator('[data-test="baseSelectDropdownArrow"]').nth(3).click();
        await this.page.getByText('Podaj szczegółyInny').click();
        await this.page.locator('[data-test="baseSelectDropdownArrow"]').nth(2).click();
        await this.page.locator('[data-test="baseSelectDropdownList"]').getByRole('listitem').click();
        await this.page.getByPlaceholder('Treść').fill(fakerPL.lorem.words(20));
    }

    async messageWasSent() {
        await this.page.locator('[data-test="contactSubmitButton"]').click();
        await expect(this.page.getByText('Wiadomość została pomyślnie')).toBeVisible();
    }

}





