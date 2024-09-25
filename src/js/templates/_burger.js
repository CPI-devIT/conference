import { disableScroll, enableScroll } from '../utils/index.js';

export const burger = () => {
    const burgerButton = document.querySelector('[data-burger-button]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('[data-menu-link]');
    const overlay = document.querySelector('[data-menu-overlay]');
    const buttonsContainer = document.querySelector(".header__account");
    const partner = document.querySelector(".header__partners");
    const block = document.querySelector(".header");


    const checkClass = () => {
        if (burgerButton.classList.contains('burger-button--active')) {
            burgerButton.setAttribute('aria-expanded', 'true');
            burgerButton.setAttribute('aria-label', 'закрыть меню');
            // disableScroll();
        } else {
            burgerButton.setAttribute('aria-expanded', 'false');
            burgerButton.setAttribute('aria-label', 'открыть меню');
            // enableScroll();
        }
    };

       const showButton = () => {
        if (burgerButton.classList.contains('burger-button--active')) {
            partner.classList.add('header__partners--hidden');
            buttonsContainer.classList.add('header__account--active');
            block.classList.add('header--active');
        } else {
            partner.classList.remove('.header__partners--hidden');
            buttonsContainer.classList.remove('header__account--active');
            block.classList.remove('header--active');
        }
    };

    const hideBurger = () => {
        burgerButton.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
    }

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('burger-button--active');
        menu.classList.toggle('burger-menu--active');
        // overlay.classList.toggle('overlay--active');
        checkClass();
        showButton();
    });

    // overlay.addEventListener('click', () => {
    //     hideBurger();
    //     checkClass();
    //     showButton();
    // });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            hideBurger();
            enableScroll();
        });
    });



};
