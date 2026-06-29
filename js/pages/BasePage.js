import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export class BasePage {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
    }

    init() {
        this.header.render();
        this.footer.render();
    }

    afterRender() {
        return '';
    }
}