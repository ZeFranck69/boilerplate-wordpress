import { addTransition } from '../utils/functions';

export default class Menu {

    distanceBeforeSticky = window.innerHeight / 10;

    constructor() {

        this.body = document.querySelector('body');
        this.header = document.getElementById('site-header');
        this.closeBtn = document.querySelector('.close-menu__wrapper');
        this.toggleBtn = document.querySelector('.burger-menu__wrapper');

        this.toggleBtn.addEventListener('click', () => this.toggleMenu());
        this.closeBtn.addEventListener('click', () => this.toggleMenu('remove'));
        window.addEventListener('scroll', this.stickyMenu);

        // REMOVE NO SCROLL ON PAGE CHANGE
        document.querySelector('body').classList.remove('no-scroll');
        this.header.classList.remove('active');

        const menuItems = document.querySelectorAll('.menu-item, .site-logo, .footer_phone-number, .footer-contact');
        menuItems.forEach(item => {
            item.addEventListener('click', ev => {
                const activeItems = document.querySelectorAll('.current_page_item');
                activeItems.forEach(activeItem => activeItem.classList.remove('current_page_item'));

                const link = item.querySelector('a');
                const newActivesLinks = document.querySelectorAll(`a[href="${link.href}"]`);
                link.parentElement.classList.add('current_page_item');
                newActivesLinks.forEach(item => item.parentElement.classList.add('current_page_item'));

            })

        });
        const hashtagLinks = document.querySelectorAll('a[href*="#"]');
        hashtagLinks.forEach(link => link.parentElement.classList.remove('current_page_item'));

    }

    stickyMenu = () => {
        let header = this.header;
        if (window.pageYOffset > this.distanceBeforeSticky && !this.isSticky()) {
            header.classList.add('sticky');
        }
        else if (window.pageYOffset < this.distanceBeforeSticky && this.isSticky()) {
            header.classList.remove('sticky');
        }
    };

    isSticky = () => this.header.classList.contains('sticky');

    toggleMenu = (action = 'toggle') => {
        const VALID_ACTIONS = ['add', 'remove', 'toggle'];
        if (!VALID_ACTIONS.includes(action))
            return console.error(`"${action}" is not allowed. Allowed actions: ${VALID_ACTIONS.join(' ')}`);

        this.body.classList[action]('no-scroll');
        this.header.classList[action]('active');
        this.header.setAttribute('aria-hidden', !this.header.classList.contains('active'));
    }
}