import { expect, type Page} from "@playwright/test";
import * as dotenv from 'dotenv'
dotenv.config()

export class LoginPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async loginToPanel() {
        await this.page.locator('[id="_username"]').fill(process.env.LOGIN!);
        await this.page.locator('[id="_password"]').fill(process.env.PASSWORD!);
        await this.page.getByRole('button', { name: 'Zaloguj się' }).click();
    }

    async checkSuccessfulLogin() {
        await expect(this.page.getByText('Witaj !')).toBeVisible();
    }
}

