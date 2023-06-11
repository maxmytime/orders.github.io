'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Добавляем новый адрес доставки
    const newAddresTpl = `                    <div class="address">
    <!-- <div>
        <h2 class="is-size-5 ml-5">Адрес</h2>
    </div> -->

    <div class="field">
        <label class="label">Адрес</label>
        <div class="control width-500px">
            <input class="input" type="text" name="order-address-date" placeholder="">
        </div>
    </div>

    <!-- Кнопка добавить Базис -->
    <a class="button is-white width-100px position-sticky js-add-new-basis">
        <span class="js-add-new-basis">Базис</span>
        <span class="icon is-small js-add-new-basis">
            <i class="fa fa-plus-square-o js-add-new-basis" aria-hidden="true"></i>
        </span>
    </a>

    <div class="basis-container">
        <!-- Базис -->
        <div class="basis">
            <!-- <div>
                <h2 class="is-size-5">Тут будет информация c кагого адреса грузить</h2>
            </div> -->

            <div class="field basis-panel">
                <label class="label">Базис</label>
                <div class="control is-flex is-justify-content-space-between">
                    <input class="input" type="text" name="order-basis" placeholder="">
                    <a class="button">
                        <span class="icon is-small">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>

            </div>

            <div class="columns is-mobile is-gapless is-multiline">
                <div class="column is-6 is-6-mobile">
                    <!-- Поле продукт -->
                    <div class="field mr-2">
                        <label class="label">Продукт</label>
                        <div class="control">
                            <input class="input" type="text" name="order-basis-product" placeholder="">
                        </div>
                    </div>

                </div>

                <div class="column is-6 is-6-mobile">
                    <!-- Поле номенклатура -->
                    <label class="label">Номенклатура</label>
                    <div class="field">
                        <p class="control is-flex is-justify-content-space-between is-align-items-center">
                            <input class="input" type="text" name="" placeholder="">
                            <a class="button button-ico button-ico-color-red">
                                <span class="icon icon-width">
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>

                <div class="column is-12">
                    <!-- Поле объем -->
                    <label class="label mt-2">Вес</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-basis-wt-min" placeholder="Минимум">
                        </p>
                        <p class="control width-100">
                            <input class="input" type="text" name="order-basis-wt-max" placeholder="Максимум">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                Литр
                            </a>
                        </p>
                    </div>

                </div>

                <div class="column is-12">
                    <!-- Поле объем -->
                    <label class="label mt-2">Объем</label>
                    <div class="field has-addons is-align-items-end">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-basis-wt-min" placeholder="Минимум">
                        </p>
                        <p class="control width-100">
                            <input class="input" type="text" name="order-basis-wt-max" placeholder="Максимум">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                Тонна
                            </a>
                        </p>
                    </div>

                </div>

                <div class="column is-12 is-12-mobile">
                    <!-- Поле доставка с учетом НДС -->
                    <label class="label mt-2">Доставка с учетом НДС</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="#" placeholder="">
                        </p>
                        <p class="control">
                            <span class="select">
                                <select>
                                    <option>руб/л</option>
                                    <option>руб/т</option>
                                    <option>руб</option>
                                </select>
                            </span>
                        </p>
                    </div>

                </div>

                <div class="column is-12">
                    <!-- Комментарий -->
                    <div class="field">
                        <label class="label mt-2">Комментарий</label>
                        <div class="control width-100 is-widescreen">
                            <textarea class="textarea" placeholder=""></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Кнопка добавить Юр. лицо -->
            <a class="button is-white js-add-new-legal-entity">
                <span class="js-add-new-legal-entity">Юр. лицо</span>
                <span class="icon is-small js-add-new-legal-entity">
                    <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
                </span>
            </a>



            <div class="legal-entity-container">
                <hr>
                <!-- Юридическое лицо -->
                <div class="legal-entity">
                    <!-- <div>
                        <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
                    </div> -->

                    <div class="field">
                        <label class="label">Юридическое лицо</label>
                        <div class="control is-flex">
                            <input class="input" type="text" name="order-legal-entity" placeholder="">
                            <a class="button button-ico button-ico-color-gray">
                                <span class="icon">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <!-- Кнопка добавить сделку -->
                    <a class="button is-white js-add-new-dael position-r0-b0">
                        <span class="js-add-new-dael">Сделка</span>
                        <span class="icon is-small js-add-new-dael">
                            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                        </span>
                    </a>


                    <div class="dael-container">
                        <!-- Сделка -->
                        <div class="dael">
                            <!-- <div>
                                <h2 class="is-size-5">Тут будет информация о сделке</h2>
                            </div> -->

                            <div class="columns is-multiline is-variable is-1">

                                <div class="column is-4">
                                    <label class="label">Объем</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-volume" placeholder="">
                                        </p>
                                        <p class="control">
                                            <span class="select">
                                                <select>
                                                    <option>л</option>
                                                    <option>т</option>
                                                </select>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-4">

                                    <label class="label">Стоимость</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-prisce" placeholder="">
                                        </p>
                                        <p class="control">
                                            <span class="select">
                                                <select>
                                                    <option>руб/л</option>
                                                    <option>руб/т</option>
                                                    <option>руб</option>
                                                </select>
                                            </span>
                                        </p>
                                    </div>

                                </div>

                                <div class="column is-4">

                                    <label class="label">Тип оплаты</label>
                                    <p class="control is-flex is-justify-content-space-between">
                                        <span class="select width-88">
                                            <select class="">
                                                <option>-</option>
                                                <option>Предоплата на дату</option>
                                                <option>Предоплата до отгрузки</option>
                                                <option>Предоплата по факту отгрузки</option>
                                                <option>Отсрочка на дату</option>
                                                <option>Отсрочка сдвиг</option>
                                            </select>
                                        </span>
                                        <a class="button button-ico button-ico-color-gray">
                                            <span class="icon">
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </p>

                                </div>

                                <div class="column is-4">

                                    <label class="label">Дата</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="date" name="order-dael-date" value="2023-07-22" placeholder="">
                                        </p>
                                    </div>

                                </div>

                                <div class="column is-4">

                                    <label class="label">Количество дней</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="" value="" placeholder="">
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>

</div>`;

    // Добавляем новый базис
    const newBasisTpl = `                            <div class="basis">
    <!-- <div>
        <h2 class="is-size-5">Тут будет информация c кагого адреса грузить</h2>
    </div> -->

    <div class="field basis-panel">
        <label class="label">Базис</label>
        <div class="control is-flex is-justify-content-space-between">
            <input class="input" type="text" name="order-basis" placeholder="">
            <a class="button">
                <span class="icon is-small">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </a>
        </div>

    </div>

    <div class="columns is-mobile is-gapless is-multiline">
        <div class="column is-6 is-6-mobile">
            <!-- Поле продукт -->
            <div class="field mr-2">
                <label class="label">Продукт</label>
                <div class="control">
                    <input class="input" type="text" name="order-basis-product" placeholder="">
                </div>
            </div>

        </div>

        <div class="column is-6 is-6-mobile">
            <!-- Поле номенклатура -->
            <label class="label">Номенклатура</label>
            <div class="field">
                <p class="control is-flex is-justify-content-space-between is-align-items-center">
                    <input class="input" type="text" name="" placeholder="">
                    <a class="button button-ico button-ico-color-red">
                        <span class="icon icon-width">
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                        </span>
                    </a>
                </p>
            </div>
        </div>

        <div class="column is-12">
            <!-- Поле объем -->
            <label class="label mt-2">Вес</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-basis-wt-min" placeholder="Минимум">
                </p>
                <p class="control width-100">
                    <input class="input" type="text" name="order-basis-wt-max" placeholder="Максимум">
                </p>
                <p class="control">
                    <a class="button is-static">
                        Литр
                    </a>
                </p>
            </div>

        </div>

        <div class="column is-12">
            <!-- Поле объем -->
            <label class="label mt-2">Объем</label>
            <div class="field has-addons is-align-items-end">
                <p class="control width-100">
                    <input class="input" type="text" name="order-basis-wt-min" placeholder="Минимум">
                </p>
                <p class="control width-100">
                    <input class="input" type="text" name="order-basis-wt-max" placeholder="Максимум">
                </p>
                <p class="control">
                    <a class="button is-static">
                        Тонна
                    </a>
                </p>
            </div>

        </div>

        <div class="column is-12 is-12-mobile">
            <!-- Поле доставка с учетом НДС -->
            <label class="label mt-2">Доставка с учетом НДС</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="#" placeholder="">
                </p>
                <p class="control">
                    <span class="select">
                        <select>
                            <option>руб/л</option>
                            <option>руб/т</option>
                            <option>руб</option>
                        </select>
                    </span>
                </p>
            </div>

        </div>

        <div class="column is-12">
            <!-- Комментарий -->
            <div class="field">
                <label class="label mt-2">Комментарий</label>
                <div class="control width-100 is-widescreen">
                    <textarea class="textarea" placeholder=""></textarea>
                </div>
            </div>
        </div>
    </div>

    <!-- Кнопка добавить Юр. лицо -->
    <a class="button is-white js-add-new-legal-entity">
        <span class="js-add-new-legal-entity">Юр. лицо</span>
        <span class="icon is-small js-add-new-legal-entity">
            <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
        </span>
    </a>



    <div class="legal-entity-container">
        <hr>
        <!-- Юридическое лицо -->
        <div class="legal-entity">
            <!-- <div>
                <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
            </div> -->

            <div class="field">
                <label class="label">Юридическое лицо</label>
                <div class="control is-flex">
                    <input class="input" type="text" name="order-legal-entity" placeholder="">
                    <a class="button button-ico button-ico-color-gray">
                        <span class="icon">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
            </div>

            <!-- Кнопка добавить сделку -->
            <a class="button is-white js-add-new-dael position-r0-b0">
                <span class="js-add-new-dael">Сделка</span>
                <span class="icon is-small js-add-new-dael">
                    <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                </span>
            </a>


            <div class="dael-container">

            </div>

        </div>
    </div>

</div>`;

    // Добавить новое юридическое лицо
    const newLegalEntityTpl = `                                    <div class="legal-entity">
    <!-- <div>
        <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
    </div> -->

    <div class="field">
        <label class="label">Юридическое лицо</label>
        <div class="control is-flex">
            <input class="input" type="text" name="order-legal-entity" placeholder="">
            <a class="button button-ico button-ico-color-gray">
                <span class="icon">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </a>
        </div>
    </div>

    <!-- Кнопка добавить сделку -->
    <a class="button is-white js-add-new-dael position-r0-b0">
        <span class="js-add-new-dael">Сделка</span>
        <span class="icon is-small js-add-new-dael">
            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
        </span>
    </a>


    <div class="dael-container">

    </div>

</div>`;


    // Добавить сделку
    const newDael = `                                            <div class="dael">
    <!-- <div>
        <h2 class="is-size-5">Тут будет информация о сделке</h2>
    </div> -->

    <div class="columns is-multiline is-variable is-1">

        <div class="column is-4">
            <label class="label">Объем</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-volume" placeholder="">
                </p>
                <p class="control">
                    <span class="select">
                        <select>
                            <option>л</option>
                            <option>т</option>
                        </select>
                    </span>
                </p>
            </div>
        </div>

        <div class="column is-4">

            <label class="label">Стоимость</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-prisce" placeholder="">
                </p>
                <p class="control">
                    <span class="select">
                        <select>
                            <option>руб/л</option>
                            <option>руб/т</option>
                            <option>руб</option>
                        </select>
                    </span>
                </p>
            </div>

        </div>

        <div class="column is-4">

            <label class="label">Тип оплаты</label>
            <p class="control is-flex is-justify-content-space-between">
                <span class="select width-88">
                    <select class="">
                        <option>-</option>
                        <option>Предоплата на дату</option>
                        <option>Предоплата до отгрузки</option>
                        <option>Предоплата по факту отгрузки</option>
                        <option>Отсрочка на дату</option>
                        <option>Отсрочка сдвиг</option>
                    </select>
                </span>
                <a class="button button-ico button-ico-color-gray">
                    <span class="icon">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                </a>
            </p>

        </div>

        <div class="column is-4">

            <label class="label">Дата</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="date" name="order-dael-date" value="2023-07-22" placeholder="">
                </p>
            </div>

        </div>

        <div class="column is-4">

            <label class="label">Количество дней</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="" value="" placeholder="">
                </p>
            </div>

        </div>
    </div>

</div>`;

    // Обработка событий добовления элементов в заказ
    const order = document.querySelector('.order');
    const counter = document.querySelector('.counter-basis');
    const height = document.querySelector('.height');
    const addresHeight = document.querySelector('.address-height');
    const addressContainer = document.querySelector('.address-container');
    const offSet = 0;
    let counterBasis = basisNumberOfElements ();
    let basisWidth;
    let clientWidth;
    let basisAllWidt;
    let translateX;
    let translateStart;
    let translateEnd;

    basisSetWidth();

    // counter.innerHTML = counterBasis;
    // height.innerHTML = document.body.scrollHeight;
    // addressContainer.style.height = String(document.body.scrollHeight) + 'px';

    order.addEventListener('click', (e) => {
        // e.preventDefault();
        const el = e.target;

        if (el.classList.contains('js-add-new-address')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newAddresTpl);

            basisSetWidth();

            // counter.innerHTML = basisNumberOfElements ();

            clientWidth = clientElementWidth ();
            basisAllWidt = basisWidthOfAllElements(38);
            basisWidth = basisElementWidth ();
            if (clientWidth < basisAllWidt) {
                const step = positionTranslateX ();
                translateX = clientWidth - basisAllWidt - offSet;
                addressContainer.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

        } else if (el.classList.contains('js-add-new-basis')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newBasisTpl);

            basisSetWidth();

            // counter.innerHTML = basisNumberOfElements ();

            clientWidth = clientElementWidth ();
            basisAllWidt = basisWidthOfAllElements(37);
            basisWidth = basisElementWidth ();
            if (clientWidth < basisAllWidt) {
                const step = positionTranslateX ();
                translateX = clientWidth - basisAllWidt - offSet;
                addressContainer.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

        } else if (el.classList.contains('js-add-new-legal-entity')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newLegalEntityTpl);
            // height.innerHTML = document.body.scrollHeight;
            // addressContainer.style.height = String(document.body.scrollHeight) + 'px';
        } else if (el.classList.contains('js-add-new-dael')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newDael);
            // height.innerHTML = document.body.scrollHeight;
            // addressContainer.style.height = String(document.body.scrollHeight) + 'px';
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

    container.style.transform = `translate3D(-${offSet}px, 0px, 0px)`;

    container.addEventListener('pointermove', (e) => {

        moveX = e.offsetX;                         // Значие координаты курсора по оси X
        counterBasis = basisNumberOfElements();    // Количество элементов базис
        basisWidth = basisElementWidth();          // Ширина элемента базис
        clientWidth = clientElementWidth();        // Ширина элемента клиент
        basisAllWidt = basisWidthOfAllElements();  // Ширина всех элементов базис
        // console.log(positionTranslateX());         // Выводим в консоль текущее положение трансформации по оси X

        // Если ширина всех элементов базис больше ширины клиента и координата клика не равна 0
        if (basisAllWidt > clientWidth && clickX != 0) {
            step = positionTranslateX();            // Текущее положение трансформации по оси X

            // Вычисляем новое знаечение трансформации по оси Х
            // Если координата по осии Х минус координата клика по осии Х плюс текущее положении трансформации по оси Х больше 0
            if (moveX - clickX + Number(step) > -offSet) {
                translateX = -11;                             // Ставим ограничение движения в право
            } else {
                translateX = moveX - clickX + Number(step);
            }

            // Если новое значение трансформации больше чем ширина клиента минус ширина всех базисов
            // Ставим ограничение движения в лево
            if (translateX > clientWidth - basisAllWidt) {
                container.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

        }
    });

    container.addEventListener('pointerdown', (e) => {
        translateStart = positionTranslateX();
        clickX = e.offsetX;
        container.style.transition = 'none';
    });

    container.addEventListener('pointerup', (e) => {

        container.style.transition = '0.1s';

        if (clientWidth < 900) {
            basisWidth = basisElementWidth();          // Ширина элемента базис
            translateEnd = positionTranslateX();       // Значение трансформации в момент отпускания клавишиы мыши

            if (translateStart > translateEnd) {
                translateX = translateStart - basisWidth;
                container.style.transform = `translate3D(${translateX}px, 0, 0)`;
            } else if (translateStart < translateEnd) {
                translateX = translateStart + basisWidth;
                container.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }
        }

        clickX = 0;
    });


    // Возвращает текущее значение трансформ по оси X
    function positionTranslateX () {
        let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
        let t = container.style.transform;
        return Number(t.match(regexp)[0]);
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
    function basisWidthOfAllElements (step) {
        const width = document.querySelector('.basis').offsetWidth;
        const count = document.querySelectorAll('.basis').length;

        return (width + step) * count;
    }

    // Возвращает ширину клиента
    function clientElementWidth() {
        return document.querySelector('.client').offsetWidth;
    }

    // Устанавливает ширину элементам .basis и .basis-container
    function basisSetWidth() {
        const cW = clientElementWidth();
        const b = document.querySelectorAll('.basis');

        if (cW < 900) {
            b.forEach(e => {
                e.style.width = cW +'px';
            });
            console.log(cW);
        } else {
            b.forEach(e => {
                e.style.width = `500px`;
            });
        }

    }

    // Календарь

    const options = {
        color: 'link',
        isRange: true,
        lang: 'ru',
        dateFormat: 'dd.MM.yyyy',
    };

    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[name="order-date"]', options);

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
        // Add listener to select event
        calendar.on('select', date => {
            console.log(date);
        });
    });

    const option = {
        color: 'link',
        lang: 'ru',
        dateFormat: 'dd.MM.yyyy',
    };

    // Initialize all input of date type.
    const calendar = bulmaCalendar.attach('[name="order-dael-date"]', option);

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
        // Add listener to select event
        calendar.on('select', date => {
            console.log(date);
        });
    });


});