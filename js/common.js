'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Добавляем новый адрес доставки
    const newAddresTpl = `                    <div class="address">

    <div class="field has-addons position-r5-t0">
        <p class="control mr-3">
            <!-- Кнопка удалить адрес -->
            <a class="button is-white js-del-address">
                <span class="icon ">
                    <i class="fa fa-minus-square-o fa-lg " aria-hidden="true"></i>
                </span>
            </a>
        </p>
        <p class="control">
            <!-- Кнопка добавить адрес -->
            <a class="button is-white js-add-new-address">
                <!-- <span class="js-add-new-address">Адрес</span> -->
                <span class="icon is-small js-add-new-address">
                    <i class="fa fa-plus-square-o js-add-new-address" aria-hidden="true"></i>
                </span>
            </a>
        </p>
    </div>

    <div class="field px-15px border-box">
        <label class="label">Адрес</label>
        <div class="control width-470px">
            <input class="input" type="text" name="order-address-date" placeholder="">
        </div>
    </div>


    <div class="basis-container">
        <!-- Базис -->
        <div id="" class="basis">

            <div class="field basis-panel">
                <label class="label">Базис</label>
                <div class="control is-flex is-justify-content-space-between">
                    <input class="input" type="text" name="order-basis" placeholder="">
                    <div class="field is-flex">
                        <p class="control ml-3">
                            <!-- Кнопка удалить адрес -->
                            <a class="button is-lite-gray js-btn-basis-del">
                                <span class="icon">
                                    <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>
                        </p>
                        <p class="control ml-3">
                            <!-- Кнопка добавить адрес -->
                            <a class="button is-lite-gray js-add-new-basis">
                                <!-- <span class="js-add-new-basis">Базис</span> -->
                                <span class="icon is-small js-add-new-basis">
                                    <i class="fa fa-plus-square-o js-add-new-basis" aria-hidden="true"></i>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="columns is-mobile is-variable is-1 is-multiline">
                <div class="column is-6 is-6-mobile">
                    <!-- Поле продукт -->
                    <div class="field">
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

                <div class="column is-6">
                    <!-- Поле объем -->
                    <label class="label">Объем</label>
                    <label class="checkbox is-flex mb-3">
                        <input class="mr-2 js-volume-checkbox" type="checkbox">
                        Диапазон
                    </label>
                    <div class="field has-addons is-align-items-end">
                        <p class="control width-100 js-volume-min">
                            <input class="input js-order-basis-volume-min" type="text" name="order-basis-volume-min" placeholder="-">
                        </p>
                        <p class="control width-100 js-volume-max is-hidden">
                            <input class="input" type="text" name="order-basis-volume-max" placeholder="Максимум">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                Литр
                            </a>
                        </p>
                    </div>

                </div>

                <div class="column is-6 is-6-mobile">
                    <!-- Поле доставка -->
                    <label class="label">Доставка</label>
                    <div class="control mb-2">
                        <label class="radio">
                          <input type="radio" name="foobar">
                          С НДС
                        </label>
                        <label class="radio">
                          <input type="radio" name="foobar" checked>
                          Без НДС
                        </label>
                    </div>
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

                <div class="column is-6 is-4-mobile">
                    <!-- Поле Документы -->
                    <label class="label">Документы</label>
                    <div class="field">
                        <p class="control">
                            <span class="select width-100">
                                <select class="width-100">
                                    <option>Документы</option>
                                    <option>Документы + счет</option>
                                    <option>Счет</option>
                                    <option>Без документов</option>
                                </select>
                            </span>
                        </p>
                    </div>

                </div>

                <div class="column is-6 is-4-mobile js-order-basis-urgency-container">
                    <!-- Поле Срочность -->
                    <label class="label">Срочность</label>
                    <div class="field">
                        <p class="control">
                            <span class="select width-100">
                                <select class="width-100 js-order-basis-urgency">
                                    <option>-</option>
                                    <option>Крайне срочно</option>
                                    <option>Срочно в течение</option>
                                    <option>До</option>
                                    <option>В течение дня</option>
                                </select>
                            </span>
                        </p>
                    </div>

                </div>

                <div class="column is-6 is-4-mobile js-order-basis-term is-hidden">
                    <!-- Поле Срочность -->
                    <label class="label">Срок</label>
                    <div class="field">
                        <p class="control">
                            <span class="select width-100">
                                <select class="width-100">
                                    <option>30 минут</option>
                                    <option>Час</option>
                                    <option>2 часа</option>
                                    <option>До конца рабочего дня</option>
                                    <option>Утром следующего дня</option>
                                </select>
                            </span>
                        </p>
                    </div>

                </div>

                <div class="column is-12 is-4-mobile js-order-basis-datetime is-hidden">
                    <!-- Поле До -->
                    <label class="label">До</label>
                    <div class="is-flex is-justify-content-space-between">
                        <div class="field has-addons width-100 pr-4px">
                            <p class="control width-100">
                                <input class="input" type="date" name="order-basis-datetime" value="2023-07-22" placeholder="">
                            </p>
                        </div>
                        <div class="field width-100 pl-4px">
                            <p class="control width-100">
                                <input class="input" type="time" name="" value="" placeholder="__:__">
                            </p>
                        </div>
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


            <div class="legal-entity-container">

                <!-- Кнопка добавить Юр. лицо -->
                <a class="button is-white js-add-new-legal-entity position-r15-b10">
                    <span class="js-add-new-legal-entity">Юр. лицо</span>
                    <span class="icon is-small js-add-new-legal-entity">
                        <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
                    </span>
                </a>
                <!-- Юридическое лицо -->
                <div class="legal-entity">

                    <hr>

                    <div class="field">
                        <label class="label">Юридическое лицо</label>
                        <div class="control is-flex">
                            <input class="input" type="text" name="order-legal-entity" placeholder="">
                        </div>
                    </div>

                    <!-- Удалить ЮЛ -->
                    <a class="button is-white position-r0-t10 js-btn-le-del">
                        <span class="icon">
                            <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                        </span>
                    </a>



                    <div class="dael-container">
                        <!-- Сделка -->

                    <!-- Кнопка добавить сделку -->
                    <a class="button is-white js-add-new-dael position-r0-b10">
                        <span class="js-add-new-dael">Сделка</span>
                        <span class="icon is-small js-add-new-dael">
                            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                        </span>
                    </a>

                        <div class="dael">

                            <a class="button is-white position-r0-t0 js-del-dael">
                                <span class="icon">
                                    <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                                </span>
                            </a>

                            <div class="columns is-multiline is-variable is-1 mt-4">

                                <div class="column is-4">
                                    <label class="label">Объем</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-wt" placeholder="">
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-4">
                                    <label class="label">Вес</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-volume" placeholder="">
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-4">

                                    <label class="label">Цена</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-prisce" placeholder="">
                                        </p>
                                        <p class="control">
                                            <span class="select">
                                                <select>
                                                    <option>руб/л</option>
                                                    <option>руб/т</option>
                                                </select>
                                            </span>
                                        </p>
                                    </div>

                                </div>

                                <div class="column is-4 js-order-dael-payment-type-container">

                                    <label class="label">Тип оплаты</label>
                                    <p class="control">
                                        <span class="select width-100">
                                            <select class="width-100 js-order-dael-payment-type">
                                                <option>-</option>
                                                <option>Предоплата на дату</option>
                                                <option>Предоплата до отгрузки</option>
                                                <option>По факту отгрузки</option>
                                                <option>Отсрочка на дату</option>
                                                <option>Отсрочка сдвиг</option>
                                            </select>
                                        </span>

                                    </p>

                                </div>

                                <div class="column is-4 js-order-dael-date is-hidden">

                                    <label class="label">Дата</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="date" name="order-dael-date" value="2023-07-22" placeholder="">
                                        </p>
                                    </div>

                                </div>

                                <div class="column is-4 js-order-dael-dey is-hidden">

                                    <label class="label">Количество дней</label>
                                    <div class="field has-addons">
                                        <p class="control is-flex is-justify-content-space-between">
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
    const newBasisTpl = `<div id="" class="basis">

    <div class="field basis-panel">
        <label class="label">Базис</label>
        <div class="control is-flex is-justify-content-space-between">
            <input class="input" type="text" name="order-basis" placeholder="">
            <div class="field is-flex">
                <p class="control ml-3">
                    <!-- Кнопка удалить адрес -->
                    <a class="button is-lite-gray js-btn-basis-del">
                        <span class="icon">
                            <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                        </span>
                    </a>
                </p>
                <p class="control ml-3">
                    <!-- Кнопка добавить адрес -->
                    <a class="button is-lite-gray js-add-new-basis">
                        <!-- <span class="js-add-new-basis">Базис</span> -->
                        <span class="icon is-small js-add-new-basis">
                            <i class="fa fa-plus-square-o js-add-new-basis" aria-hidden="true"></i>
                        </span>
                    </a>
                </p>
            </div>
        </div>
    </div>

    <div class="columns is-mobile is-variable is-1 is-multiline">
        <div class="column is-6 is-6-mobile">
            <!-- Поле продукт -->
            <div class="field">
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

        <div class="column is-6">
            <!-- Поле объем -->
            <label class="label">Объем</label>
            <label class="checkbox is-flex mb-3">
                <input class="mr-2 js-volume-checkbox" type="checkbox">
                Диапазон
            </label>
            <div class="field has-addons is-align-items-end">
                <p class="control width-100 js-volume-min">
                    <input class="input js-order-basis-volume-min" type="text" name="order-basis-volume-min" placeholder="-">
                </p>
                <p class="control width-100 js-volume-max is-hidden">
                    <input class="input" type="text" name="order-basis-volume-max" placeholder="Максимум">
                </p>
                <p class="control">
                    <a class="button is-static">
                        Литр
                    </a>
                </p>
            </div>

        </div>

        <div class="column is-6 is-6-mobile">
            <!-- Поле доставка -->
            <label class="label">Доставка</label>
            <div class="control mb-2">
                <label class="radio">
                  <input type="radio" name="foobar">
                  С НДС
                </label>
                <label class="radio">
                  <input type="radio" name="foobar" checked>
                  Без НДС
                </label>
            </div>
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

        <div class="column is-6 is-4-mobile">
            <!-- Поле Документы -->
            <label class="label">Документы</label>
            <div class="field">
                <p class="control">
                    <span class="select width-100">
                        <select class="width-100">
                            <option>Документы</option>
                            <option>Документы + счет</option>
                            <option>Счет</option>
                            <option>Без документов</option>
                        </select>
                    </span>
                </p>
            </div>

        </div>

        <div class="column is-6 is-4-mobile js-order-basis-urgency-container">
            <!-- Поле Срочность -->
            <label class="label">Срочность</label>
            <div class="field">
                <p class="control">
                    <span class="select width-100">
                        <select class="width-100 js-order-basis-urgency">
                            <option>-</option>
                            <option>Крайне срочно</option>
                            <option>Срочно в течение</option>
                            <option>До</option>
                            <option>В течение дня</option>
                        </select>
                    </span>
                </p>
            </div>

        </div>

        <div class="column is-6 is-4-mobile js-order-basis-term is-hidden">
            <!-- Поле Срочность -->
            <label class="label">Срок</label>
            <div class="field">
                <p class="control">
                    <span class="select width-100">
                        <select class="width-100">
                            <option>30 минут</option>
                            <option>Час</option>
                            <option>2 часа</option>
                            <option>До конца рабочего дня</option>
                            <option>Утром следующего дня</option>
                        </select>
                    </span>
                </p>
            </div>

        </div>

        <div class="column is-12 is-4-mobile js-order-basis-datetime is-hidden">
            <!-- Поле До -->
            <label class="label">До</label>
            <div class="is-flex is-justify-content-space-between">
                <div class="field has-addons width-100 pr-4px">
                    <p class="control width-100">
                        <input class="input" type="date" name="order-basis-datetime" value="2023-07-22" placeholder="">
                    </p>
                </div>
                <div class="field width-100 pl-4px">
                    <p class="control width-100">
                        <input class="input" type="time" name="" value="" placeholder="__:__">
                    </p>
                </div>
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


    <div class="legal-entity-container">

        <!-- Кнопка добавить Юр. лицо -->
        <a class="button is-white js-add-new-legal-entity position-r15-b10">
            <span class="js-add-new-legal-entity">Юр. лицо</span>
            <span class="icon is-small js-add-new-legal-entity">
                <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
            </span>
        </a>
        <!-- Юридическое лицо -->
        <div class="legal-entity">

            <hr>

            <div class="field">
                <label class="label">Юридическое лицо</label>
                <div class="control is-flex">
                    <input class="input" type="text" name="order-legal-entity" placeholder="">
                </div>
            </div>

            <!-- Удалить ЮЛ -->
            <a class="button is-white position-r0-t10 js-btn-le-del">
                <span class="icon">
                    <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                </span>
            </a>



            <div class="dael-container">
                <!-- Сделка -->

            <!-- Кнопка добавить сделку -->
            <a class="button is-white js-add-new-dael position-r0-b10">
                <span class="js-add-new-dael">Сделка</span>
                <span class="icon is-small js-add-new-dael">
                    <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                </span>
            </a>

                <div class="dael">

                    <a class="button is-white position-r0-t0 js-del-dael">
                        <span class="icon">
                            <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                        </span>
                    </a>

                    <div class="columns is-multiline is-variable is-1 mt-4">

                        <div class="column is-4">
                            <label class="label">Объем</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="text" name="order-wt" placeholder="">
                                </p>
                            </div>
                        </div>

                        <div class="column is-4">
                            <label class="label">Вес</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="text" name="order-volume" placeholder="">
                                </p>
                            </div>
                        </div>

                        <div class="column is-4">

                            <label class="label">Цена</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="text" name="order-prisce" placeholder="">
                                </p>
                                <p class="control">
                                    <span class="select">
                                        <select>
                                            <option>руб/л</option>
                                            <option>руб/т</option>
                                        </select>
                                    </span>
                                </p>
                            </div>

                        </div>

                        <div class="column is-4 js-order-dael-payment-type-container">

                            <label class="label">Тип оплаты</label>
                            <p class="control">
                                <span class="select width-100">
                                    <select class="width-100 js-order-dael-payment-type">
                                        <option>-</option>
                                        <option>Предоплата на дату</option>
                                        <option>Предоплата до отгрузки</option>
                                        <option>По факту отгрузки</option>
                                        <option>Отсрочка на дату</option>
                                        <option>Отсрочка сдвиг</option>
                                    </select>
                                </span>

                            </p>

                        </div>

                        <div class="column is-4 js-order-dael-date is-hidden">

                            <label class="label">Дата</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="date" name="order-dael-date" value="2023-07-22" placeholder="">
                                </p>
                            </div>

                        </div>

                        <div class="column is-4 js-order-dael-dey is-hidden">

                            <label class="label">Количество дней</label>
                            <div class="field has-addons">
                                <p class="control is-flex is-justify-content-space-between">
                                    <input class="input" type="text" name="" value="" placeholder="">
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>

</div>`;

    // Добавить новое юридическое лицо
    const newLegalEntityTpl = `<div class="legal-entity">

    <hr>

    <div class="field">
        <label class="label">Юридическое лицо</label>
        <div class="control is-flex">
            <input class="input" type="text" name="order-legal-entity" placeholder="">
        </div>
    </div>

    <!-- Удалить ЮЛ -->
    <a class="button is-white position-r0-t10 js-btn-le-del">
        <span class="icon">
            <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
        </span>
    </a>



    <div class="dael-container">
        <!-- Сделка -->

    <!-- Кнопка добавить сделку -->
    <a class="button is-white js-add-new-dael position-r0-b10">
        <span class="js-add-new-dael">Сделка</span>
        <span class="icon is-small js-add-new-dael">
            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
        </span>
    </a>

        <div class="dael">

            <a class="button is-white position-r0-t0 js-del-dael">
                <span class="icon">
                    <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                </span>
            </a>

            <div class="columns is-multiline is-variable is-1 mt-4">

                <div class="column is-4">
                    <label class="label">Объем</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-wt" placeholder="">
                        </p>
                    </div>
                </div>

                <div class="column is-4">
                    <label class="label">Вес</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-volume" placeholder="">
                        </p>
                    </div>
                </div>

                <div class="column is-4">

                    <label class="label">Цена</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-prisce" placeholder="">
                        </p>
                        <p class="control">
                            <span class="select">
                                <select>
                                    <option>руб/л</option>
                                    <option>руб/т</option>
                                </select>
                            </span>
                        </p>
                    </div>

                </div>

                <div class="column is-4 js-order-dael-payment-type-container">

                    <label class="label">Тип оплаты</label>
                    <p class="control">
                        <span class="select width-100">
                            <select class="width-100 js-order-dael-payment-type">
                                <option>-</option>
                                <option>Предоплата на дату</option>
                                <option>Предоплата до отгрузки</option>
                                <option>По факту отгрузки</option>
                                <option>Отсрочка на дату</option>
                                <option>Отсрочка сдвиг</option>
                            </select>
                        </span>

                    </p>

                </div>

                <div class="column is-4 js-order-dael-date is-hidden">

                    <label class="label">Дата</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="date" name="order-dael-date" value="2023-07-22" placeholder="">
                        </p>
                    </div>

                </div>

                <div class="column is-4 js-order-dael-dey is-hidden">

                    <label class="label">Количество дней</label>
                    <div class="field has-addons">
                        <p class="control is-flex is-justify-content-space-between">
                            <input class="input" type="text" name="" value="" placeholder="">
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </div>

</div>`;

    // Добавить сделку
    const newDael = `<div class="dael">

    <a class="button is-white position-r0-t0 js-del-dael">
        <span class="icon">
            <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
        </span>
    </a>

    <div class="columns is-multiline is-variable is-1 mt-4">

        <div class="column is-4">
            <label class="label">Объем</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-wt" placeholder="">
                </p>
            </div>
        </div>

        <div class="column is-4">
            <label class="label">Вес</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-volume" placeholder="">
                </p>
            </div>
        </div>

        <div class="column is-4">

            <label class="label">Цена</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-prisce" placeholder="">
                </p>
                <p class="control">
                    <span class="select">
                        <select>
                            <option>руб/л</option>
                            <option>руб/т</option>
                        </select>
                    </span>
                </p>
            </div>

        </div>

        <div class="column is-4 js-order-dael-payment-type-container">

            <label class="label">Тип оплаты</label>
            <p class="control">
                <span class="select width-100">
                    <select class="width-100 js-order-dael-payment-type">
                        <option>-</option>
                        <option>Предоплата на дату</option>
                        <option>Предоплата до отгрузки</option>
                        <option>По факту отгрузки</option>
                        <option>Отсрочка на дату</option>
                        <option>Отсрочка сдвиг</option>
                    </select>
                </span>

            </p>

        </div>

        <div class="column is-4 js-order-dael-date is-hidden">

            <label class="label">Дата</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="date" name="order-dael-date" value="2023-07-22" placeholder="">
                </p>
            </div>

        </div>

        <div class="column is-4 js-order-dael-dey is-hidden">

            <label class="label">Количество дней</label>
            <div class="field has-addons">
                <p class="control is-flex is-justify-content-space-between">
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

    order.addEventListener('click', (e) => {
        // e.preventDefault();
        const el = e.target;

        if (el.classList.contains('js-add-new-address')) {
            const container = containerSearchAdd(el, 'address-container');
            container.insertAdjacentHTML('beforeEnd', newAddresTpl);

            basisSetWidth();

            clientWidth = clientElementWidth ();
            basisAllWidt = basisWidthOfAllElements();
            basisWidth = basisElementWidth ();
            if (clientWidth < basisAllWidt) {
                const step = positionTranslateX ();
                translateX = clientWidth - basisAllWidt - offSet;
                addressContainer.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

            eventAddressDel();
            eventBasisDel();
            eventELDel();
            eventDaelDel();
            ativeVolume();
            ativeBasisInput();
            ativeDaelInput();

        } else if (el.classList.contains('js-add-new-basis')) {
            const container = containerSearchAdd(el, 'basis-container');
            container.insertAdjacentHTML('beforeEnd', newBasisTpl);

            basisSetWidth();

            clientWidth = clientElementWidth ();
            basisAllWidt = basisWidthOfAllElements();
            basisWidth = basisElementWidth ();
            if (clientWidth < basisAllWidt) {
                const step = positionTranslateX ();
                translateX = clientWidth - basisAllWidt - offSet;
                addressContainer.style.transform = `translate3D(${translateX}px, 0, 0)`;
            }

            eventBasisDel();
            eventELDel();
            eventDaelDel();
            ativeVolume();
            ativeBasisInput();
            ativeDaelInput();

        } else if (el.classList.contains('js-add-new-legal-entity')) {
            const container = containerSearchAdd(el, 'legal-entity-container');
            container.insertAdjacentHTML('beforeEnd', newLegalEntityTpl);
            eventELDel();
            eventDaelDel();
            ativeDaelInput();
        } else if (el.classList.contains('js-add-new-dael')) {
            const container = containerSearchAdd(el, 'dael-container');
            container.insertAdjacentHTML('beforeEnd', newDael);
            eventDaelDel();
            ativeDaelInput();
        }
    });

    function containerSearchAdd (element, container) {
        let parent = element;

        while (!parent.classList.contains(container)) {
            parent = parent.parentElement;
        }
       return parent;
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
                translateX = 0;                             // Ставим ограничение движения в право
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
        try {

            return document.querySelector('.basis').offsetWidth;

          } catch (err) {

            // обработка ошибки

          }
    }

    // Возвращает сумму ширин всех элементов базис
    function basisWidthOfAllElements () {
        try {

            const width = document.querySelector('.basis').offsetWidth;
            const count = document.querySelectorAll('.basis').length;
            // return (width + 38) * count;
            return (width) * count;
          } catch (err) {

            // обработка ошибки

          }

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
                // e.style.width = '100%';
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
        // displayMode: 'dialog'
    };

    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[name="order-date"]', options);

    // Loop on each calendar initialized
    // calendars.forEach(calendar => {
    //     // Add listener to select event
    //     calendar.on('select', date => {
    //         console.log(date);
    //     });
    // });

    const option = {
        color: 'link',
        lang: 'ru',
        dateFormat: 'dd.MM.yyyy',
        // displayMode: 'dialog'
    };

    // Initialize all input of date type.
    const calendar = bulmaCalendar.attach('[name="order-dael-date"]', option);

    // Loop on each calendar initialized
    calendar.forEach(calendar => {
        // Add listener to select event
        calendar.on('show', date => {
            console.log(date);
        });
    });

    // Включить диапазон
    function ativeVolume() {
        const volumes = document.querySelectorAll('.js-volume-checkbox');

        volumes.forEach(vol => {
            vol.addEventListener('change', e => {
                const parentEl = e.target.parentElement.nextElementSibling;
                const min =parentEl.querySelector('.js-volume-min');
                const max =parentEl.querySelector('.js-volume-max');


                if (e.target.checked) {
                    max.classList.remove('is-hidden');
                    min.childNodes[1].setAttribute('placeholder', 'Минимум');
                } else {
                    max.classList.add('is-hidden');
                    min.childNodes[1].setAttribute('placeholder', '-');
                }

            });
        });
    }

    ativeVolume();

    // Включаем поля в базисе
    function ativeBasisInput() {
        const urgencys = document.querySelectorAll('.js-order-basis-urgency');

        urgencys.forEach(section => {
            section.addEventListener('change', e => {

                const option = e.target.value;
                let container = e.target;

                while (!container.classList.contains('js-order-basis-urgency-container')) {
                    container = container.parentElement;
                }

                const term = container.nextElementSibling;
                const datetime = container.nextElementSibling.nextElementSibling;

                if (option === 'Срочно в течение') {
                    term.classList.remove('is-hidden');
                    datetime.classList.add('is-hidden');
                } else if (option === 'До') {
                    datetime.classList.remove('is-hidden');
                    term.classList.add('is-hidden');
                } else {
                    term.classList.add('is-hidden');
                    datetime.classList.add('is-hidden');
                }

            });
        });
    }

    ativeBasisInput();

    // Включаем поля в сделке
    function ativeDaelInput() {
        const paymentType = document.querySelectorAll('.js-order-dael-payment-type');

        paymentType.forEach(section => {
            section.addEventListener('change', e => {

                const option = e.target.value;
                let container = e.target;

                while (!container.classList.contains('js-order-dael-payment-type-container')) {
                    container = container.parentElement;
                }

                const date = container.nextElementSibling;
                const dey = container.nextElementSibling.nextElementSibling;

                if (option === 'Предоплата на дату' || option === 'Отсрочка на дату') {
                    date.classList.remove('is-hidden');
                    dey.classList.add('is-hidden');
                } else if (option === 'Отсрочка сдвиг') {
                    dey.classList.remove('is-hidden');
                    date.classList.add('is-hidden');
                } else {
                    date.classList.add('is-hidden');
                    dey.classList.add('is-hidden');
                }

            });
        });
    }

    ativeDaelInput();

    // Удалить адрес
    function eventAddressDel() {
        const btnAddressDel = document.querySelectorAll('.js-del-address');

        btnAddressDel.forEach(btn => {
            btn.addEventListener('click', e => {
                let parent = e.target;
                const addressCoun = document.querySelectorAll('.address').length;
                const container = containerSearchAdd (parent, 'address');

                if (addressCoun > 1) {
                    container.remove();

                    if (basisWidthOfAllElements() < clientElementWidth()) {
                        const client = document.querySelector('.address-container');
                        client.style.transform = `translate3D(0px, 0px, 0px)`;
                    } else {
                        const client = document.querySelector('.address-container');
                        client.style.transform = `translate3D(-${basisWidthOfAllElements() - clientElementWidth()}px, 0px, 0px)`;
                    }

                }


            });
        });
    }

    eventAddressDel();

    // Удалить базис
    function eventBasisDel() {
        const btnBasisDel = document.querySelectorAll('.js-btn-basis-del');

        btnBasisDel.forEach(btn => {
            btn.addEventListener('click', e => {
                let parent = e.target;

                const address = containerSearchAdd(parent, 'address');
                const basisCoun = address.querySelectorAll('.basis').length;
                const container = containerSearchAdd(parent, 'basis');

                if (basisCoun > 1) {
                    container.remove();
                    if (basisWidthOfAllElements() < clientElementWidth()) {
                        const client = document.querySelector('.address-container');
                        client.style.transform = `translate3D(0px, 0px, 0px)`;
                    } else {
                        const client = document.querySelector('.address-container');
                        client.style.transform = `translate3D(-${basisWidthOfAllElements() - clientElementWidth()}px, 0px, 0px)`;
                    }
                }



            });
        });
    }

    eventBasisDel();

    // Удалить ЮЛ
    function eventELDel() {
        const btnBasisDel = document.querySelectorAll('.js-btn-le-del');

        btnBasisDel.forEach(btn => {
            btn.addEventListener('click', e => {
                let parent = e.target;
                const basis = containerSearchAdd(parent, 'basis');
                const LECoun = basis.querySelectorAll('.legal-entity').length;
                const container = containerSearchAdd(parent, 'legal-entity');

                if (LECoun > 1) {
                    container.remove();
                }

            });
        });
    }

    eventELDel();

    // Удалить сделку
    function eventDaelDel() {
        const btnBasisDel = document.querySelectorAll('.js-del-dael');

        btnBasisDel.forEach(btn => {
            btn.addEventListener('click', e => {
                let parent = e.target;
                const le = containerSearchAdd(parent, 'legal-entity');
                const daelCoun = le.querySelectorAll('.dael').length;
                const container = containerSearchAdd(parent, 'dael');

                if (daelCoun > 1) {
                    container.remove();
                }

            });
        });
    }

    eventDaelDel();

    // Создать заявку
    const buttonCreateOrder = document.querySelector('.js-create-order');

    class Order {
        constructor() {
            this.data = this.date();
            this.time = this.time();
            this.number = 'Ноява заявка';
            this.autor = 'Иванов Иван Иванович';
            this.client = {
                dateMin: document.querySelector('input[name="order-date"]').value,
                dateMax: "",
                client: "",
                typeClient: "",
                typeShipment: "",
                address: [{}]
            };
        }

        // Получаем текущую дату
        date() {
            const date = new Date();
            return date.getDate()+ ':' + date.getMonth() + ':' + date.getFullYear();
        }

        // Получаем текущее время
        time() {
            const time = new Date();
            return time.getHours()+ ':' + time.getMinutes() + ':' + time.getSeconds();
        }
    }

    buttonCreateOrder.addEventListener('click', (e) => {
        const order = new Order();

        console.log(order.client.dateMin);
    });
});