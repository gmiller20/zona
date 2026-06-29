import { HomePage } from './pages/HomePage.js';
import { NewsPage } from './pages/NewsPage.js';
import { EmployeePage } from './pages/EmployeePage.js';
import { ZekiPage } from './pages/ZekiPage.js';
import { FormPage } from './pages/FormPage.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();

    switch (currentPage) {
        case 'index.html':
            const homePage = new HomePage();
            homePage.init();
            break;
        case 'news.html':
            const newsPage = new NewsPage();
            newsPage.init();
            newsPage.render();
            break;
        case 'employee.html':
            const employeePage = new EmployeePage();
            employeePage.init();
            employeePage.render();
            break;
        case 'zeki.html':
            const zekiPage = new ZekiPage();
            zekiPage.init();
            zekiPage.render();
            break;
        case 'form.html':
            const formPage = new FormPage();
            formPage.init();
            formPage.render();
            break;
        default:
            const header = new Header();
            header.render();
            const footer = new Footer();
            footer.render();
            break;
    }
});


