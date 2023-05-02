'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // const formLogIn = document.querySelector('.form-login');

    // formLogIn.addEventListener('submit', (e) => {
    //     e.preventDefault();

        // const formData = new FormData(formLogIn);

        // console.log(formData.get("name"));
        // console.log(formData.get("pass"));

    //     let response = fetch('/orders', {
    //         method: 'POST',
    //         body: new FormData(formLogIn)
    //       });
    // });


    // Скрытие пароля при вводе
    const eyeOpen = document.querySelector('.fa-eye'),
          eyeClose = document.querySelector('.fa-eye-slash'),
          wrapperEye = document.querySelector('.form-icon-pass'),
          inputPass = document.querySelector('.input-pass'),
          passHidden = document.querySelector('.form-icon-pass-hidden');

    let pass, value = '';


    eyeOpen.classList.add('is-hidden');

    wrapperEye.addEventListener('click', (e) => {

        if (eyeClose.classList.contains('is-hidden')) {
            eyeClose.classList.remove('is-hidden');
            eyeOpen.classList.add('is-hidden');
            inputPass.style.color = '#fff';
            passHidden.classList.remove('is-hidden');
        } else {
            eyeClose.classList.add('is-hidden');
            eyeOpen.classList.remove('is-hidden');
            inputPass.style.color = '#333';
            passHidden.classList.add('is-hidden');
        }

    });

    inputPass.addEventListener('input', (e) => {
        pass = e.target.value;
        let iconHiddenPass = document.querySelectorAll('.fa-circle');
        iconHiddenPass.forEach(icon => {
            icon.remove();
        });
        value = '<i class="fa fa-circle"></i>'.repeat(pass.length);
        passHidden.insertAdjacentHTML('beforeend', value);
    });

});