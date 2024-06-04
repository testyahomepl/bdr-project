import { expect, type Page} from "@playwright/test";

export class MenuPage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }

    protected async goToMenu(menuLabel: string) {
        await this.page.goto('https://wearmedicine.com/c/on');
        await this.page.getByRole('button', { name: 'Zaakceptuj wszystkie' }).click();
        await this.page.locator('[data-test="my_account_icon"]').click();
    }

    public async goToLogin() {
        await this.goToMenu('Zaloguj się');
    }
}

