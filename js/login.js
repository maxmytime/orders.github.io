'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const btnEntrance = document.querySelector('.js-entrance');

    btnEntrance.addEventListener('click', (e) => {
        e.preventDefault();
        const login = document.querySelector('input[name="login"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const user = {
            login: login,
            password: password
        };

        const hostName = window.location.href + 'login';

        // fetch('http://localhost:3003/order', {
        fetch(hostName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }).then(response => response.text())
          .then(commits => console.log(commits));
    });

});