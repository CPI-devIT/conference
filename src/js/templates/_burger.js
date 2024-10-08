import { disableScroll, enableScroll } from '../utils/index.js';
import SmoothScroll from 'smooth-scroll';

export const burger = () => {
    const burgerButton = document.querySelector('[data-burger-button]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('[data-menu-link]');
    const overlay = document.querySelector('[data-menu-overlay]');
    const buttonsContainer = document.querySelector(".header__account");
    const partner = document.querySelector(".header__partners");
    const header = document.querySelector(".header");


    const checkClass = () => {
        if (burgerButton.classList.contains('burger-button--active')) {
            burgerButton.setAttribute('aria-expanded', 'true');
            burgerButton.setAttribute('aria-label', 'закрыть меню');
            disableScroll();
        } else {
            burgerButton.setAttribute('aria-expanded', 'false');
            burgerButton.setAttribute('aria-label', 'открыть меню');
            enableScroll();
        }
    };

    const hideBurger = () => {
        burgerButton.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
        partner.classList.remove('header__partners--hidden');
        buttonsContainer.classList.remove('header__account--active');
        header.classList.remove('header--fixed');
        header.classList.remove('header--burger');
    }

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('burger-button--active');
        menu.classList.toggle('burger-menu--active');
        overlay.classList.toggle('overlay--active');
        partner.classList.toggle('header__partners--hidden');
        buttonsContainer.classList.toggle('header__account--active');
        header.classList.toggle('header--burger');
        header.classList.remove('header--fixed');
        checkClass();
    });

    overlay.addEventListener('click', () => {
        hideBurger();
        checkClass();
    });

    const scroll = (link) => {
        const id = link.getAttribute('href').slice(1);
        const anchor = document.getElementById(id);

        setTimeout(() => {
            var scroll = new SmoothScroll();
            scroll.animateScroll(anchor, link);
        }, 0)
    };

    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            hideBurger();
            checkClass();
            scroll(link);
        });
    });
};
