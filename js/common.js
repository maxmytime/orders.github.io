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

    const currentUrl = window.location.pathname;
    console.log(currentUrl);

    if (currentUrl == '/' || currentUrl == '/index.html') {
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
    }

    // Аккордион

    if (currentUrl == '/order.html') {
        const akkordeon = document.querySelector('.akkordeon'),
        akkordeonAddItem = document.querySelector('.akkordeon-add-item');

        akkordeon.addEventListener('click', (e) => {
            e.preventDefault();
            let element = e.target;

            if (element.classList.contains('akkordeon-title')) {
                const akkordeonItem = document.querySelectorAll('.akkordeon-item');
                akkordeonItem.forEach((e) => {
                    e.classList.remove('akkordeon-item-active');
                });
                element.parentNode.parentNode.classList.add('akkordeon-item-active');
            } else if (element.classList.contains('akkordeon-remove-item')) {
                const parentElem = element.parentNode.parentNode;
                parentElem.remove();
            } else if (element.classList.contains('akkordeon-add-product')) {
                const prodact = `
                <div class="akkordeon-product is-flex mb-3 is-flex-wrap-wrap">
                    <h6 class="is-size-6 has-text-weight-bold width-75">Продукт</h6>
                    <a href="#" class="button is-small has-text-danger akkordeon-remove-product is-ghost width-25 has-text-right is-inline-block">- Удалить</a>
                    <div class="field width-100">
                        <div class="control">
                            <input class="input" name="product" type="text" placeholder="Продукт">
                        </div>
                    </div>
                </div>`;
                element.insertAdjacentHTML('beforeBegin', prodact);
            } else if (element.classList.contains('akkordeon-remove-product')) {
                const parentRemove = element.parentNode;
                parentRemove.remove();
            }

        });

        // Добавить элемент в аккордион
        akkordeonAddItem.addEventListener('click', (e) => {
            e.preventDefault();

            const akkordeonItem = document.querySelectorAll('.akkordeon-item');
            akkordeonItem.forEach((e) => {
                e.classList.remove('akkordeon-item-active');
            });

            const value = `
                    <div class="akkordeon-item mb-4 akkordeon-item-active">
                        <div class="akkordeon-head is-flex">
                            <h5 class="is-size-5 has-text-weight-bold akkordeon-title width-100">Первый заголовок</h5>
                            <a href="#" class="button is-small has-text-danger akkordeon-remove-item is-ghost">- Удалить</a>
                        </div>
                        <div class="akkordeon-content">
                            <div class="field">
                                <div class="control">
                                    <input class="input" name="partner" type="text" placeholder="Партнер">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input" name="basis" type="text" placeholder="Базис">
                                </div>
                            </div>
                            <div class="akkordion-product-list">
                                <div class="akkordion-product is-flex mb-3">
                                    <h6 class="is-size-6 has-text-weight-bold akkordeon-title width-100">Продукт</h6>
                                    <a href="#" class="button is-small has-text-danger akkordeon-remove-item is-ghost">- Удалить</a>
                                </div>

                                <a href="#" class="button is-small akkordeon-add-product is-ghost has-text-grey mt-3">+ Продукт</a>
                            </div>
                        </div>
                    </div>`;

            akkordeonAddItem.insertAdjacentHTML('beforeBegin', value);
        });


    }



});