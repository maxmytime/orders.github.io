'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Добавляем новый адрес доставки
    const newAddresTpl = `<div class="address">
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
        <div id="" class="basis">
            <!-- <div>
                <h2 class="is-size-5">Тут будет информация c кагого адреса грузить</h2>
            </div> -->

            <div class="field basis-panel">
                <label class="label">Базис</label>
                <div class="control is-flex is-justify-content-space-between">
                    <input class="input" type="text" name="order-basis" placeholder="">
                    <a id="1" class="button js-btn-basis-del">
                        <span class="icon is-small">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    </a>
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

                <!-- <div class="column is-12">
                    Поле объем
                    <label class="label mt-2">Вес</label>
                    <label class="checkbox is-flex mb-3">
                        <input class="mr-2 js-wt-checkbox" type="checkbox">
                        Диапазон
                    </label>
                    <div class="field has-addons">
                        <p class="control width-100 js-wt-min">
                            <input class="input js-order-basis-wt-min" type="text" name="order-basis-wt-min" placeholder="-">
                        </p>
                        <p class="control width-100 js-wt-max is-hidden">
                            <input class="input" type="text" name="order-basis-wt-max" placeholder="Максимум">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                Литр
                            </a>
                        </p>
                    </div>

                </div> -->

                <div class="column is-6">
                    <!-- Поле объем -->
                    <label class="label">Объем</label>
                    <label class="checkbox is-flex mb-3">
                        <input class="mr-2 js-volume-checkbox" type="checkbox">
                        Диапазон
                    </label>
                    <div class="field has-addons is-align-items-end">
                        <p class="control width-100 js-volume-min">
                            <input class="input js-order-basis-volume-min " type="text" name="order-basis-volume-min" placeholder="-">
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
                            <a id="2" class="button button-ico button-ico-color-gray js-btn-le-del">
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
                                            <input class="input" type="text" name="" value="" placeholder=""
                                        </p>
                                    </div>

                                </div>

                                <div class="column is-1">
                                    <a id="3" class="button button-ico button-ico-color-gray is-flex is-align-items-end js-btn-dael-del">
                                        <span class="icon">
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </span>
                                    </a>
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
    <!-- <div>
        <h2 class="is-size-5">Тут будет информация c кагого адреса грузить</h2>
    </div> -->

    <div class="field basis-panel">
        <label class="label">Базис</label>
        <div class="control is-flex is-justify-content-space-between">
            <input class="input" type="text" name="order-basis" placeholder="">
            <a id="1" class="button js-btn-basis-del">
                <span class="icon is-small">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </a>
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

        <!-- <div class="column is-12">
            Поле объем
            <label class="label mt-2">Вес</label>
            <label class="checkbox is-flex mb-3">
                <input class="mr-2 js-wt-checkbox" type="checkbox">
                Диапазон
            </label>
            <div class="field has-addons">
                <p class="control width-100 js-wt-min">
                    <input class="input js-order-basis-wt-min" type="text" name="order-basis-wt-min" placeholder="-">
                </p>
                <p class="control width-100 js-wt-max is-hidden">
                    <input class="input" type="text" name="order-basis-wt-max" placeholder="Максимум">
                </p>
                <p class="control">
                    <a class="button is-static">
                        Литр
                    </a>
                </p>
            </div>

        </div> -->

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
                    <a id="2" class="button button-ico button-ico-color-gray js-btn-le-del">
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
                                    <input class="input" type="text" name="" value="" placeholder=""
                                </p>
                            </div>

                        </div>

                        <div class="column is-1">
                            <a id="3" class="button button-ico button-ico-color-gray is-flex is-align-items-end js-btn-dael-del">
                                <span class="icon">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </span>
                            </a>
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
    <!-- <div>
        <h2 class="is-size-5">Тут будет информация о юридическом лице</h2>
    </div> -->

    <div class="field">
        <label class="label">Юридическое лицо</label>
        <div class="control is-flex">
            <input class="input" type="text" name="order-legal-entity" placeholder="">
            <a id="2" class="button button-ico button-ico-color-gray js-btn-le-del">
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
                            <input class="input" type="text" name="" value="" placeholder=""
                        </p>
                    </div>

                </div>

                <div class="column is-1">
                    <a id="3" class="button button-ico button-ico-color-gray is-flex is-align-items-end js-btn-dael-del">
                        <span class="icon">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
            </div>

        </div>
    </div>

</div>`;


    // Добавить сделку
    const newDael = `<div class="dael">
    <!-- <div>
        <h2 class="is-size-5">Тут будет информация о сделке</h2>
    </div> -->

    <div class="columns is-multiline is-variable is-1">

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
                    <input class="input" type="text" name="" value="" placeholder=""
                </p>
            </div>

        </div>

        <div class="column is-1">
            <a id="3" class="button button-ico button-ico-color-gray is-flex is-align-items-end js-btn-dael-del">
                <span class="icon">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </a>
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
            const container = containerSearch(el);
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

            eventBasisDel();
            eventELDel();
            eventDaelDel();
            ativeVolume();
            ativeBasisInput();
            ativeDaelInput();

        } else if (el.classList.contains('js-add-new-basis')) {
            const container = containerSearch(el);
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
            // const container = containerSearch(el);
            const container = containerSearchLE(el);
            container.insertAdjacentHTML('beforeEnd', newLegalEntityTpl);
            // height.innerHTML = document.body.scrollHeight;
            // addressContainer.style.height = String(document.body.scrollHeight) + 'px';
            eventELDel();
            eventDaelDel();
            ativeDaelInput();
        } else if (el.classList.contains('js-add-new-dael')) {
            const container = containerSearch(el);
            container.insertAdjacentHTML('beforeEnd', newDael);
            // height.innerHTML = document.body.scrollHeight;
            // addressContainer.style.height = String(document.body.scrollHeight) + 'px';
            eventDaelDel();
            ativeDaelInput();
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

    function containerSearchLE(e) {
        let parent = e;

        while (!parent.classList.contains('basis')) {
            parent = parent.parentElement;
        }
        return parent.querySelector('.legal-entity-container');
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
            return (width + 38) * count;
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

    // Удалить базис
    function eventBasisDel() {
        const btnBasisDel = document.querySelectorAll('.js-btn-basis-del');

        btnBasisDel.forEach(btn => {
            btn.addEventListener('click', e => {
                let parent = e.target;

                const basisCoun = document.querySelectorAll('.basis').length;

                if (basisCoun > 1) {
                    while (!parent.classList.contains('address')) {
                        parent = parent.parentElement;
                    }

                    const address = parent.querySelectorAll('.basis').length;
                    if (address > 1) {
                        parent = e.target;

                        while (!parent.classList.contains('basis')) {
                            parent = parent.parentElement;
                        }
                        parent.remove();
                    } else {
                        parent.remove();
                    }

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
                let basis = e.target;
                let classBasis;

                while (!basis.classList.contains('basis')) {
                    basis = basis.parentElement;
                }

                const count = basis.querySelectorAll('.legal-entity').length;

                if (count > 1) {
                    while (!parent.classList.contains('legal-entity')) {
                        parent = parent.parentElement;
                    }
                    parent.remove();
                }



            });
        });
    }

    eventELDel();

    // Удалить сделку
    function eventDaelDel() {
        const btnBasisDel = document.querySelectorAll('.js-btn-dael-del');

        btnBasisDel.forEach(btn => {
            btn.addEventListener('click', e => {
                let parent = e.target;
                let basis = e.target;

                while (!basis.classList.contains('basis')) {
                    basis = basis.parentElement;
                }

                const count = basis.querySelectorAll('.dael').length;

                if (count > 1) {

                    while (!parent.classList.contains('dael')) {
                        parent = parent.parentElement;
                    }
                    parent.remove();

                }

            });
        });
    }

    eventDaelDel();
});