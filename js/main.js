import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { HomePage } from "./pages/HomePage.js";

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();

    switch (currentPage) {
        case 'index.html':
            const homePage = new HomePage;
            homePage.init();
            break;
        
        default:
            const header = new Header();
            header.init();
            const footer = new Footer()
            footer.init();
            break;
    }
})
