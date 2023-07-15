'use strict';

window.addEventListener('DOMContentLoaded', () => {

    class Archive {
        constructor(element) {
            this.btn = this.button(element);
            this.container = element.querySelector('.orders-day-footer-container');
        }

        button(element) {
            console.log(element);
            const btn = element.querySelector('.orders-day-footer-title');

            btn.addEventListener('click', () => {
                this.container.classList.toggle('is-hidden');
            });

        }
    }

    const archives = document.querySelectorAll('.orders-day-footer');

    archives.forEach(e => {
        new Archive(e);
    });


});