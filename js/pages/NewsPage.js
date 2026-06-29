import {news} from '../data/constants.js';
import { BasePage } from './BasePage.js';

export class NewsPage extends BasePage {
    constructor() {
        super();
        this.container = document.getElementById('news');
        this.news = news.reverse();
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = `<section>
            <div class="container">
                <h1 class="news-title-big">Новости зоны</h1>
                <div class="news">
                    ${this.news.map(newsItem => `
                        <div class="news-card">
                            <img src=${newsItem.img} alt="" class="news-img">
                            <div class="news-content">
                                <div class="news-title-row">
                                    <div class="news-date">${newsItem.date}</div>
                                    <h2 class="news-title">${newsItem.title}</h2>
                                </div>
                                <div class="news-text">
                                    ${newsItem.HTMLcontent}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>`;
    }
}