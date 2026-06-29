import {BasePage} from "./BasePage.js";
import {FormSubmit} from "../utils/formSubmit.js";

export class FormPage extends BasePage {
    constructor() {
        super();
        this.formSubmit = new FormSubmit();
    }

    render() {
        this.formSubmit.init();
    }
}