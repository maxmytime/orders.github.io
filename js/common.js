'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Добавляем новый адрес доставки
    const newAddresTpl = `<div class="address">
                            <div>
                                <h2 class="is-size-5">Тут будет информация адресе поставки</h2>
                            </div>
                            <!-- Кнопка добавить Базис -->
                            <a class="button is-white js-add-new-basis">
                                <span class="js-add-new-basis">Базис</span>
                                <span class="icon is-small js-add-new-basis">
                                    <i class="fa fa-plus-square-o js-add-new-basis" aria-hidden="true"></i>
                                </span>
                            </a>

                            <div class="basis-container">
                                <!-- Базис -->
                                <div class="basis">
                                    <div>
                                        <h2 class="is-size-5">Тут будет информация c кагого адреса грузить</h2>
                                    </div>
                                    <!-- Кнопка добавить Юр. лицо -->
                                    <a class="button is-white js-add-new-legal-entity">
                                        <span class="js-add-new-legal-entity">Юр. лицо</span>
                                        <span class="icon is-small js-add-new-legal-entity">
                                            <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
                                        </span>
                                    </a>

                                    <div class="legal-entity-container">
                                        <!-- Юридическое лицо -->
                                        <div class="legal-entity">
                                            <div>
                                                <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
                                            </div>
                                            <!-- Кнопка добавить сделку -->
                                            <a class="button is-white js-add-new-dael">
                                                <span class="js-add-new-dael">Сделка</span>
                                                <span class="icon is-small js-add-new-dael">
                                                    <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                                                </span>
                                            </a>


                                            <div class="dael-container">
                                                <!-- Сделка -->
                                                <div class="dael">
                                                    <div>
                                                        <h2 class="is-size-5">Тут будет информация о сделке</h2>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>`;

    // Добавляем новый базис
    const newBasisTpl = `<div class="basis">
                            <div>
                                <h2 class="is-size-5">Тут будет информация c кагого адреса грузить</h2>
                            </div>
                            <!-- Кнопка добавить Юр. лицо -->
                            <a class="button is-white js-add-new-legal-entity">
                                <span class="js-add-new-legal-entity">Юр. лицо</span>
                                <span class="icon is-small js-add-new-legal-entity">
                                    <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
                                </span>
                            </a>

                            <div class="legal-entity-container">
                                <!-- Юридическое лицо -->
                                <div class="legal-entity">
                                    <div>
                                        <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
                                    </div>
                                    <!-- Кнопка добавить сделку -->
                                    <a class="button is-white js-add-new-dael">
                                        <span class="js-add-new-dael">Сделка</span>
                                        <span class="icon is-small js-add-new-dael">
                                            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                                        </span>
                                    </a>


                                    <div class="dael-container">
                                        <!-- Сделка -->
                                        <div class="dael">
                                            <div>
                                                <h2 class="is-size-5">Тут будет информация о сделке</h2>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>`;

    // Добавить новое юридическое лицо
    const newLegalEntityTpl = `<div class="legal-entity">
                                    <div>
                                        <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
                                    </div>
                                    <!-- Кнопка добавить сделку -->
                                    <a class="button is-white js-add-new-dael">
                                        <span class"js-add-new-dael">Сделка</span>
                                        <span class="icon is-small js-add-new-dael">
                                            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                                        </span>
                                    </a>


                                    <!-- Сделка -->
                                    <div class="dael">
                                        <div>
                                            <h2 class="is-size-5">Тут будет информация о сделке</h2>
                                        </div>

                                    </div>

                                </div>`;


    // Добавить сделку
    const newDael = `<div class="dael">
                        <div>
                            <h2 class="is-size-5">Тут будет информация о сделке</h2>
                        </div>

                     </div>`;

    // Обработка событий добовления элементов в заказ
    const order = document.querySelector('.order');
    const counter = document.querySelector('.counter-basis');
    const addressContainer = document.querySelector('.address-container');
    let counterBasis = basisNumberOfElements ();
    let basisWidth;
    let clientWidth;
    let basisAllWidt;
    let translateX;

    counter.innerHTML = counterBasis;

    order.addEventListener('click', (e) => {
        e.preventDefault();
        const el = e.target;

        if (el.classList.contains('js-add-new-address')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newAddresTpl);
            counter.innerHTML = basisNumberOfElements ();

            clientWidth = clientElementWidth ();
            basisAllWidt = basisWidthOfAllElements ();
            basisWidth = basisElementWidth ();
            if (clientWidth < basisAllWidt) {
                const step = positionTranslateX ();
                translateX = clientWidth - basisAllWidt;
                addressContainer.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

        } else if (el.classList.contains('js-add-new-basis')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newBasisTpl);
            counter.innerHTML = basisNumberOfElements ();

            clientWidth = clientElementWidth ();
            basisAllWidt = basisWidthOfAllElements ();
            basisWidth = basisElementWidth ();
            if (clientWidth < basisAllWidt) {
                const step = positionTranslateX ();
                translateX = clientWidth - basisAllWidt;
                addressContainer.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

        } else if (el.classList.contains('js-add-new-legal-entity')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newLegalEntityTpl);
        } else if (el.classList.contains('js-add-new-dael')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newDael);
        }
    });

    // Поиск контейнера куда будет добавлен новый элемент
    function containerSearch (e) {
        let parent = e;

        while (parent.tagName != 'A') {
            parent = parent.parentElement;
        }
       return parent.nextElementSibling;
    }

    // Слайдер

    const container = document.querySelector('.address-container');
    let moveX, clickX = 0, step = 0;

    container.style.transform = `translate3D(0px, 0px, 0px)`;

    container.addEventListener('pointermove', (e) => {

        moveX = e.offsetX;
        counterBasis = basisNumberOfElements ();
        basisWidth = basisElementWidth ();
        clientWidth = clientElementWidth ();
        console.log(basisWidth, clientWidth);

        if (counterBasis * basisWidth > clientWidth && clickX != 0) {
            step = positionTranslateX();
            translateX = (moveX - clickX + Number(step) > 0) ? 0 : moveX - clickX + Number(step);

            if (translateX > clientWidth - (counterBasis * basisWidth)) {
                container.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

        }
    });

    container.addEventListener('pointerdown', (e) => {
        clickX = e.offsetX;
    });

    container.addEventListener('pointerup', (e) => {
        clickX = 0;
    });

    // Возвращает текущее значение трансформ по оси X
    function positionTranslateX () {
        let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
        let t = container.style.transform;
        return t.match(regexp)[0];
    }

    // Возвращает текущее колличество базисов
    function basisNumberOfElements () {
        return document.querySelectorAll('.basis').length;
    }

    // Возвращает ширину элемента базис
    function basisElementWidth () {
        return document.querySelector('.basis').offsetWidth;
    }

    // Возвращает сумму ширин всех элементов базис
    function basisWidthOfAllElements () {
        const width = document.querySelector('.basis').offsetWidth;
        const count = document.querySelectorAll('.basis').length;

        return width * count;
    }

    // Возвращает ширину клиента
    function clientElementWidth () {
        return document.querySelector('.client').offsetWidth;
    }


});