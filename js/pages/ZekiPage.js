import { zeki } from '../data/constants.js';
import { BasePage } from './BasePage.js';
import { VideoPidor } from '../components/VideoPidor.js';

export class ZekiPage extends BasePage {
    constructor() {
        super();
        this.container = document.getElementById('zeki');
        this.video = new VideoPidor();
        this.zeki = zeki;
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = `
            <div class="container">
                <div class="zeki">
                    <div class="card">
                        <div class="card-left">
                            <h1 class="card-title">Добро пожаловать в пидорятню!</h1>

                        </div>
                        <div class="video-container" id="video-container"></div>
                    </div>
                    <h1 class="zeki-title">Наши зеки</h1>
                    <div class="zeki-container">
                        ${this.zeki.map(zek => `
                            <div class="zeki-card">
                                <img src="${zek.img}" alt="${zek.name}" class="zeki-img">
                                <div class="employee-name">${zek.name}</div>
                                <div class="employee-info">${zek.position}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        this.video.render();
    }
}