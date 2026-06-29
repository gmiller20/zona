export class Header {
    constructor() {
        this.container = document.getElementById('header');

        this.menuItems = [
            { name: 'Новости', link: './news.html' },
            { name: 'Сотрудники', link: './employee.html' },
            { name: 'Пидорятня', link: './zeki.html' },
        ];
    }

    render() {
        this.container.innerHTML = `
                <div class="header-row">
                    <a href="/index.html">
                        <div class="header-title">
                            <div class="header-title-img">
                                <img src="/img/logo.svg" alt="Logo">
                            </div>
                            <div class="header-title-text">Зона.com</div>
                        </div>
                    </a>
                    <nav class="header-nav">
                        <ul>
                            ${this.menuItems.map(item => {
                                return `
                                    <li>
                                        <a href="${item.link}">
                                            ${item.name}
                                        </a>
                                    </li>
                                `;
                            }).join('')}
                        </ul>
                    </nav>
                    <a href="./form.html" class="header-btn btn">Сесть</a>
                </div>
        `;
    }
}

