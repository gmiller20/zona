export class Footer {
    constructor() {
        this.container = document.getElementById('footer');
    }

    render() {
        this.container.innerText = `
            ООО «Зона». Все права нарушены ©
        `;
    }
}