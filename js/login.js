'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const inputPass = document.querySelector('input[name="password"]'),
          iconEyeSlash = document.querySelector('.pass-icon-eye-slash'),
          iconEye = document.querySelector('.pass-icon-eye');

    iconEyeSlash.addEventListener('click', (e) => {
        iconEyeSlash.classList.add('is-hidden');
        iconEye.classList.remove('is-hidden');
        inputPass.setAttribute('type', 'text');
    });

    iconEye.addEventListener('click', (e) => {
        iconEyeSlash.classList.remove('is-hidden');
        iconEye.classList.add('is-hidden');
        inputPass.setAttribute('type', 'password');
    });


    const btnEntrance = document.querySelector('.js-entrance');

    btnEntrance.addEventListener('click', (e) => {
        e.preventDefault();
        const login = document.querySelector('input[name="login"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const lp = login + ':' + password;

        console.log(window.btoa(lp));

        const url = 'http://vpn.glados.ru/base/hs/siteapi/GetOrdersList';

        const response = fetch(url, {
            headers: {
                'Authorization': `Basic ${lp}`,
            },
        });

        const text = response.text();

        console.log(text);

    });

});