import { Video } from './Video.js';

export class HeaderHome {
    constructor() {
        this.container = document.getElementById('header');
        this.video = new Video();
        this.menuItems = [
            { name: 'Новости', link: './pages/news.html' },
            { name: 'Сотрудники', link: './pages/employee.html' },
            { name: 'Пидорятня', link: './pages/zeki.html' }
        ];
    }

    render() {
        this.container.innerHTML = `
            <div class="header-row">
                <a href="./index.html">
                    <div class="header-title">
                        <div class="header-title-img">
                            <img src="./img/logo.svg" alt="Logo">
                        </div>
                        <div class="header-title-text">Зона.com</div>
                    </div>
                </a>
                <nav class="header-nav">
                    <ul>
                        ${this.menuItems.map(item => {
                return `
                                <li>
                                    <a href=${item.link}>${item.name}</a>
                                </li>
                            `;
            }).join('')}

                    </ul>
                </nav >

            <a href="./pages/form.html" class="header-btn btn">Сесть</a>
                </div >
            <div class="container">
                <section id="home">
                    <div class="card">
                        <div class="card-left">
                            <h1 class="card-title">Добро пожаловать на зону!</h1>
                            <div class="gimn-container">
                                <div class="gimn-title">Гимн зоны</div>
                                <div class="gimn-wrap">
                                    <audio src="./audio/gimn.mp3" class="gimn" controls preload="none">
                                        Ваш браузер не поддерживает аудио-плеер.
                                    </audio>
                                </div>
                            </div>
                        </div>
                        <div class="video-container" id="video-container"></div>
                    </div>
                </section>
            </div>
        `;

        this.video.render();
    }
}