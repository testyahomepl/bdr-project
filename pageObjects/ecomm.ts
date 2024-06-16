import { Page } from "@playwright/test";
import { MenuPage } from "./menuPage";
import { LoginPage } from "./loginPage";
import { ShoppingCart } from "./shoppingCart";
import { ContactForm } from "./contactForm";


export class Ecomm {
    private readonly page: Page
    private readonly MenuPage: MenuPage
    private readonly LoginPage: LoginPage
    private readonly ShoppingCart: ShoppingCart
    private readonly ContactForm: ContactForm

    constructor(page: Page) {
        this.page = page
        this.MenuPage = new MenuPage(this.page)
        this.LoginPage = new LoginPage(this.page)
        this.ShoppingCart = new ShoppingCart(this.page)
        this.ContactForm = new ContactForm(this.page)
    }

    menu() {
        return this.MenuPage
    }
    login() {
        return this.LoginPage
    }
    shopping() {
        return this.ShoppingCart
    }
    contact() {
        return this.ContactForm
    }

}