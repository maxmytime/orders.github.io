'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const orderR = {
        "Status": "OK",
        "Errors": "",
        "Data": {
            "OrdersList": {
                "date": "19.07.2023",
                "time": "01:32:59",
                "number": "000000002",
                "author": "Степанов Михаил Сергеевич",
                "client": {
                    "name_client": "ВЭЛЛА",
                    "code_client": "КА-КА000428",
                    "type_client": "Тип B"
                },
                "type_order": "Бронь",
                "type_operation": "Доставка",
                "archieved": false,
                "date_order": {
                    "date_range": true,
                    "date_start": "20.07.2023",
                    "date_end": "21.07.2023"
                },
                "status_buh": "Обработана",
                "status_logistic": "2",
                "array_addresses": [{
                        "name_address": "Адрес 1 Адрес 1 Адрес 1 Адрес 1 Адрес 1 Адрес 1 Адрес 1",
                        "array_basises": [{
                            "basis": {
                                "name_basis": "ЯЯ",
                                "code_basis": ""
                            },
                            "product": {
                                "name_product": "ДТ ГОСТ зимнее",
                                "code_product": "000000018"
                            },
                            "nomenclature": {
                                "name_nomenclature": "Диз.топливо зимнее ДТ-З-К5, т",
                                "code_nomenclature": "00-00000126"
                            },
                            "volume": {
                                "range_volume": true,
                                "start_volume": 1000,
                                "end_volume": 2000
                            },
                            "delivery": {
                                "NDS_delivery": true,
                                "cost_delivery": 50000,
                                "cost_type_delivery": 'руб/л'
                            },
                            "documents": {
                                "type_docs": "Документы",
                                "urgency_docs": "До",
                                "urgency_in_due_docs": 0,
                                "urgency_until_docs": {
                                    "date": "20.07.2023",
                                    "time": "12:00:00"
                                }
                            },
                            "commentary": "Комментарии 1",
                            "array_counteragents": [{
                                "counteragent": {
                                    "name_counteragent": "ТЕХНОПАРК ООО",
                                    "code_counteragent": "5446003985"
                                },
                                "array_deals": [{
                                    "volume": 1000,
                                    "weight": 800,
                                    "cost": 100000,
                                    "type_cost": 'руб/т',
                                    "type_payment": "Предоплата на дату",
                                    "date_payment": "20.07.2023",
                                    "offset_payment": 3
                                }]
                            },
                            {
                                "counteragent": {
                                    "name_counteragent": "ТЕХНОПАРК ООО",
                                    "code_counteragent": "5446003985"
                                },
                                "array_deals": [{
                                    "volume": 1000,
                                    "weight": 800,
                                    "cost": 100000,
                                    "type_cost": "руб/л",
                                    "type_payment": "Отсрочка сдвиг",
                                    "date_payment": "",
                                    "offset_payment": 1
                                }]
                            }]
                        }]
                    },
                    {
                        "name_address": "Адрес 2 Адрес 2 Адрес 2 Адрес 2 Адрес 2 Адрес 1 Адрес 1",
                        "array_basises": [{
                            "basis": {
                                "name_basis": "ЯЯ",
                                "code_basis": ""
                            },
                            "product": {
                                "name_product": "ДТ ГОСТ летнее",
                                "code_product": "000000016"
                            },
                            "nomenclature": {
                                "name_nomenclature": "Диз.топливо летнее ДТ-Л-К5, л",
                                "code_nomenclature": "ТК-00000025"
                            },
                            "volume": {
                                "range_volume": false,
                                "start_volume": 500,
                                "end_volume": 500
                            },
                            "delivery": {
                                "NDS_delivery": false,
                                "cost_delivery": 50000,
                                "cost_type_delivery": 'руб/т'
                            },
                            "documents": {
                                "type_docs": "Документы + счет",
                                "urgency_docs": "Срочно в течение",
                                "urgency_in_due_docs": '2 часа',
                                "urgency_until_docs": {
                                    "date": "20.07.2023",
                                    "time": "12:00:00"
                                }
                            },
                            "commentary": "Комментарии 1",
                            "array_counteragents": [{
                                "counteragent": {
                                    "name_counteragent": "ТЕХНОПАРК ООО",
                                    "code_counteragent": "5446003985"
                                },
                                "array_deals": [{
                                    "volume": 500,
                                    "weight": 400,
                                    "cost": 100000,
                                    "type_cost": 'руб/л',
                                    "type_payment": "По факту отгрузки",
                                    "date_payment": "",
                                    "offset_payment": 0
                                },
                                {
                                    "volume": 500,
                                    "weight": 400,
                                    "cost": 100000,
                                    "type_cost": 'руб/т',
                                    "type_payment": "По факту отгрузки",
                                    "date_payment": "",
                                    "offset_payment": 0
                                }]
                            }]
                        }]
                    }
                ]
            }
        }
    };

    // Функция вставки элемента в заявку
    function render(elem, container) {
        // container.prepend(elem);
        container.insertAdjacentHTML('beforebegin', elem);
    }

    // Функции которые возвращают готовый элемент для вставки в заявку

    function getElemClient(obj) {
        return `<div class="columns is-gapless is-multiline client-panel">

                    <div class="column is-3 mb-5">
                        <div class="field mr-2">
                            <label class="label">Дата</label>
                            <div class="control">
                                <input data-start-date="${obj.date_order.date_start}" data-end-date="${obj.date_order.date_end}" class="input js-type-date-is-range" type="date" name="order-client-date" placeholder="">
                            </div>
                        </div>
                    </div>

                    <div class="column is-9"></div>

                    <div class="column is-2">
                        <div class="field mr-2">
                            <label class="label">Клиент</label>
                            <div class="control">
                                <input class="input" type="input" name="order-client-name" value="${obj.client.name_client}" placeholder="">
                            </div>
                        </div>
                    </div>

                    <div class="column is-1">
                        <div class="field mr-2">
                            <label class="label">Тип клиента</label>
                            <div class="control">
                                <input class="input" type="input" name="order-client-type" value="${obj.client.type_client}" placeholder="">
                            </div>
                        </div>
                    </div>

                    <div class="column is-2">
                        <div class="field mr-2">
                            <label class="label">Тип отгрузки</label>
                            <div class="control">
                                <div class="select width-100">
                                    <select class="width-100" name="order-client-type-shipment">
                                        <option value="Перемещение">Перемещение</option>
                                        <option value="Самовывоз">Самовывоз</option>
                                        <option value="Доставка">Доставка</option>
                                        <option value="Самовывоз СК">Самовывоз СК</option>
                                        <option value="С доставкой">С доставкой</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>`;
    }

    function getElemAddress(obj) {
        return `<div class="address">

                    <!-- Кнопки добавить удалить адрес -->
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
                            <input value="${obj.name_address}" class="input" type="text" name="order-address" placeholder="">
                        </div>
                    </div>

                    <!-- Базис контейнер -->
                    <div class="basis-container">

                        <!-- Базис -->


                    </div>

                </div>`;
    }

    function getElemBasis(obj) {
        return `<div id="" class="basis">

                    <!-- Шаблон базис начало -->
                    <div class="field basis-panel">
                        <label class="label">Базис</label>
                        <div class="control is-flex is-justify-content-space-between">
                            <input value="${obj.basis.name_basis}" class="input" type="text" name="order-address-basis" placeholder="">
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
                                    <input value="${obj.product.name_product}" data-product="${obj.product.code_product}" class="input" type="text" name="order-address-basis-product" placeholder="">
                                </div>
                            </div>

                        </div>

                        <div class="column is-6 is-6-mobile">
                            <!-- Поле номенклатура -->
                            <label class="label">Номенклатура</label>
                            <div class="field">
                                <p class="control is-flex is-justify-content-space-between is-align-items-center">
                                    <input value="${obj.nomenclature.name_nomenclature}" data-nomenclature="${obj.nomenclature.code_nomenclature}" class="input" type="text" name="order-address-basis-nomenclature" placeholder="">
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
                                <input class="mr-2 js-volume-checkbox" name="order-address-basis-volume-range" type="checkbox">
                                Диапазон
                            </label>
                            <div class="field has-addons is-align-items-end">
                                <p class="control width-100 js-volume-min">
                                    <input value="${obj.volume.start_volume}" class="input js-order-basis-volume-min" type="text" name="order-address-basis-volume-min" placeholder="-">
                                </p>
                                <p class="control width-100 js-volume-max is-hidden">
                                    <input value="${obj.volume.end_volume}" class="input" type="text" name="order-address-basis-volume-max" placeholder="Максимум">
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
                            <div class="control mb-2 js-order-address-basis-nds">
                                <label class="radio">
                                    <input type="radio" name="order-address-basis-nds">
                                    С НДС
                                </label>
                                <label class="radio">
                                    <input type="radio" name="order-address-basis-nds">
                                    Без НДС
                                </label>
                            </div>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input value="${obj.delivery.cost_delivery}" class="input" type="text" name="order-address-basis-value" placeholder="">
                                </p>
                                <p class="control">
                                    <span class="select">
                                        <select name="order-address-basis-unit">
                                            <option value"руб/л">руб/л</option>
                                            <option value"руб/т">руб/т</option>
                                            <option value"руб">руб</option>
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
                                        <select class="width-100" name="order-address-basis-document">
                                            <option value="Документы">Документы</option>
                                            <option value="Документы + счет">Документы + счет</option>
                                            <option value="Счет">Счет</option>
                                            <option value="Без документов">Без документов</option>
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
                                        <select class="width-100 js-order-basis-urgency" name="order-address-basis-urgency">
                                            <option value="-">-</option>
                                            <option value="Крайне срочно">Крайне срочно</option>
                                            <option value="Срочно в течение">Срочно в течение</option>
                                            <option value="До">До</option>
                                            <option value="В течение дня">В течение дня</option>
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
                                        <select class="width-100" name="order-address-basis-term">
                                            <option value="30 минут">30 минут</option>
                                            <option value="Час">Час</option>
                                            <option value="2 часа">2 часа</option>
                                            <option value="До конца рабочего дня">До конца рабочего дня</option>
                                            <option value="Утром следующего дня">Утром следующего дня</option>
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
                                        <input class="input" type="date" name="order-address-basis-date" placeholder="">
                                    </p>
                                </div>
                                <div class="field width-100 pl-4px">
                                    <p class="control width-100">
                                        <input class="input" type="time" name="order-address-basis-time" value="" placeholder="__:__">
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div class="column is-12">
                            <!-- Комментарий -->
                            <div class="field">
                                <label class="label mt-2">Комментарий</label>
                                <div class="control width-100 is-widescreen">
                                    <textarea class="textarea" name="order-address-basis-comment" placeholder=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Шаблон базис конец -->

                    <!-- ЮЛ контейнер -->
                    <div class="legal-entity-container">

                        <!-- Кнопка добавить Юр. лицо -->
                        <a class="button is-white js-add-new-legal-entity position-r15-b10">
                            <span class="js-add-new-legal-entity">Юр. лицо</span>
                            <span class="icon is-small js-add-new-legal-entity">
                                <i class="fa fa-plus-square-o js-add-new-legal-entity" aria-hidden="true"></i>
                            </span>
                        </a>

                        <!-- Юридическое лицо -->

                    </div>

                </div>`;
    }

    function getElemEL(obj) {
        return `<div class="legal-entity">

                    <!-- Шаблон ЮЛ начало -->
                    <hr>

                    <div class="field">
                        <label class="label">Юридическое лицо</label>
                        <div class="control is-flex">
                            <input value="${obj.counteragent.name_counteragent}" data-code_counteragent="${obj.counteragent.code_counteragent}" class="input" type="text" name="order-address-basis-legal-entity" placeholder="">
                        </div>
                    </div>

                    <!-- Удалить ЮЛ -->
                    <a class="button is-white position-r0-t10 js-btn-le-del">
                        <span class="icon">
                            <i class="fa fa-minus-square-o fa-lg" aria-hidden="true"></i>
                        </span>
                    </a>
                    <!-- Шаблон ЮЛ Конец -->

                    <!-- Сделка контейнер -->
                    <div class="dael-container">

                    <!-- Сделка -->

                    <!-- Кнопка добавить сделку -->
                    <a class="button is-white js-add-new-dael position-r0-b10">
                        <span class="js-add-new-dael">Сделка</span>
                        <span class="icon is-small js-add-new-dael">
                            <i class="fa fa-plus-square-o js-add-new-dael" aria-hidden="true"></i>
                        </span>
                    </a>

                        <!-- Шаблон сделка начало -->

                        <!-- Шаблон сделка конец -->
                    </div>

                </div>`;
    }

    function getElemDael(obj) {
        return `<div class="dael">

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
                                    <input value="${obj.volume}" class="input" type="text" name="order-address-basis-legal-entity-dael-volume" placeholder="">
                                </p>
                            </div>
                        </div>

                        <div class="column is-4">
                            <label class="label">Вес</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input value="${obj.weight}" class="input" type="text" name="order-address-basis-legal-entity-dael-wt" placeholder="">
                                </p>
                            </div>
                        </div>

                        <div class="column is-4">

                            <label class="label">Цена</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input value="${obj.cost}" class="input" type="text" name="order-address-basis-legal-entity-dael-price" placeholder="">
                                </p>
                                <p class="control">
                                    <span class="select">
                                        <select name="order-address-basis-legal-entity-dael-unit">
                                            <option value="руб/л">руб/л</option>
                                            <option value="руб/т">руб/т</option>
                                        </select>
                                    </span>
                                </p>
                            </div>

                        </div>

                        <div class="column is-4 js-order-dael-payment-type-container">

                            <label class="label">Тип оплаты</label>
                            <p class="control">
                                <span class="select width-100">
                                    <select class="width-100 js-order-dael-payment-type" name="order-address-basis-legal-entity-dael-payment-type">
                                        <option value="-">-</option>
                                        <option value="Предоплата на дату">Предоплата на дату</option>
                                        <option value="Предоплата до отгрузки">Предоплата до отгрузки</option>
                                        <option value="По факту отгрузки">По факту отгрузки</option>
                                        <option value="Отсрочка на дату">Отсрочка на дату</option>
                                        <option value="Отсрочка сдвиг">Отсрочка сдвиг</option>
                                    </select>
                                </span>

                            </p>

                        </div>

                        <div class="column is-4 js-order-dael-date is-hidden">

                            <label class="label">Дата</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="date" name="order-address-basis-legal-entity-dael-date" placeholder="">
                                </p>
                            </div>

                        </div>

                        <div class="column is-4 js-order-dael-dey is-hidden">

                            <label class="label">Количество дней</label>
                            <div class="field has-addons">
                                <p class="control is-flex is-justify-content-space-between">
                                    <input value="${obj.offset_payment}" class="input" type="text" name="order-address-basis-legal-entity-dael-number-of-days" value="" placeholder="">
                                </p>
                            </div>

                        </div>

                    </div>

                </div>`;
    }

    const client = document.querySelector('.client');

    let t = getElemClient(orderR.Data.OrdersList);

    render(t, client);

    // Функции вставки элементов адрес, базис, ЮЛ, сделка
    function insertElement(className, obj, callback) {
        const containers = document.querySelectorAll('.' + className);
        const container = containers[containers.length - 1];
        const element = callback(obj);
        container.insertAdjacentHTML('beforeend', element);
    }

    // Конструктор заявки
    const addressData = orderR.Data.OrdersList.array_addresses;
    addressData.forEach(address => {
        // Вставляем адрес
        insertElement('address-container', address, getElemAddress);

        const basisData = address.array_basises;
        basisData.forEach(basis => {
            // Вставляем базис
            insertElement('basis-container', basis, getElemBasis);
            // Активируем посля для ввода обьема
            ativeVolume();
            const volumeRange = document.querySelectorAll('input[name="order-address-basis-volume-range"]');
            volumeRange[volumeRange.length - 1].checked = basis.volume.range_volume;

            // активируем радио батон с нлс/ без ндс
            const ndsContainers = document.querySelectorAll('.js-order-address-basis-nds');
            const ndsContainer = ndsContainers[ndsContainers.length - 1];
            const nameRadio = Math.random();
            const ndsTrue = ndsContainer.querySelectorAll('input[type="radio"]')[0];
            const ndsFalse = ndsContainer.querySelectorAll('input[type="radio"]')[1];

            ndsTrue.setAttribute('name', nameRadio);
            ndsFalse.setAttribute('name', nameRadio);

            if (basis.delivery.NDS_delivery) {
                ndsTrue.checked = true;
            } else {
                ndsFalse.checked = true;
            }

            // Активируем еденицу измерения доставки
            const unitContainers = document.querySelectorAll('select[name="order-address-basis-unit"]');
            const unitContainer = unitContainers[unitContainers.length - 1];
            unitContainer.value = basis.delivery.cost_type_delivery;

            // Устанавливаем значение поля документы
            const docContainers = document.querySelectorAll('select[name="order-address-basis-document"]');
            const docContainer = docContainers[docContainers.length - 1];
            docContainer.value = basis.documents.type_docs;

            // Устанавливаем значение поля срочность
            const urgencyContainers = document.querySelectorAll('select[name="order-address-basis-urgency"]');
            const urgencyContainer = urgencyContainers[urgencyContainers.length - 1];
            urgencyContainer.value = basis.documents.urgency_docs;

            // Активирум поля срочность
            // Устанавливаем значение срочность дата
            const dateContainers = document.querySelectorAll('input[name="order-address-basis-date"]');
            const dateContainer = dateContainers[dateContainers.length - 1];
            const dateSrc = basis.documents.urgency_until_docs.date;
            const date = dateSrc.split('.');
            console.log(`${date[2]}-${date[1]}-${date[0]}`);
            dateContainer.value = `${date[2]}-${date[1]}-${date[0]}`;

            // Устанавливаем значение срочность время
            const timeContainers = document.querySelectorAll('input[name="order-address-basis-time"]');
            const timeContainer = timeContainers[timeContainers.length - 1];
            const timeSrc = basis.documents.urgency_until_docs.time;
            const time = timeSrc.split(':');
            timeContainer.value = `${time[0]}:${time[1]}`;

            // Устанавливаем значение поля срок
            const termContainers = document.querySelectorAll('select[name="order-address-basis-term"]');
            const termContainer = termContainers[termContainers.length - 1];
            termContainer.value = basis.documents.urgency_in_due_docs;

            // Устанавливаем значение поля комментарий
            const commentaryContainers = document.querySelectorAll('textarea[name="order-address-basis-comment"]');
            const commentaryContainer = commentaryContainers[commentaryContainers.length - 1];
            commentaryContainer.value = basis.commentary;

            const lpData = basis.array_counteragents;
            lpData.forEach(counteragent => {
                // Вставляем юридическое лицо
                insertElement('legal-entity-container', counteragent, getElemEL);

                const daelData = counteragent.array_deals;
                daelData.forEach(dael => {
                    // Вставляем сделку
                    insertElement('dael-container', dael, getElemDael);

                    // Устанавливаем значение едениц измерения
                    const daelUnitContainers = document.querySelectorAll('select[name="order-address-basis-legal-entity-dael-unit"]');
                    const daelUnitContainer = daelUnitContainers[daelUnitContainers.length - 1];
                    daelUnitContainer.value = dael.type_cost;

                    // Устанавливаем значение тип оплаты
                    const paymentTypeContainers = document.querySelectorAll('select[name="order-address-basis-legal-entity-dael-payment-type"]');
                    const paymentTypeContainer = paymentTypeContainers[paymentTypeContainers.length - 1];
                    paymentTypeContainer.value = dael.type_payment;

                    // Устанавливаем значение дата
                    const datePaymentContainers = document.querySelectorAll('input[name="order-address-basis-legal-entity-dael-date"]');
                    const datePaymentContainer = datePaymentContainers[datePaymentContainers.length - 1];
                    const datePaymentSrc = dael.date_payment;
                    const date = datePaymentSrc.split('.');
                    console.log(`${date[2]}-${date[1]}-${date[0]}`);
                    datePaymentContainer.value = `${date[2]}-${date[1]}-${date[0]}`;
                });

            });
            // insertElement('legal-entity-container', basis, getElemEL);

        });
        // insertElement('basis-container', testOrder, getElemBasis);
        // insertElement('legal-entity-container', testOrder, getElemEL);
        // insertElement('dael-container', testOrder, getElemDael);
    });


    // Добавляем новый адрес доставки
    const newAddresTpl = `<div class="address">

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
            <input class="input" type="text" name="order-address" placeholder="">
        </div>
    </div>


    <div class="basis-container">
        <!-- Базис -->
        <div id="" class="basis">

            <div class="field basis-panel">
                <label class="label">Базис</label>
                <div class="control is-flex is-justify-content-space-between">
                    <input class="input" type="text" name="order-address-basis" placeholder="">
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
                            <input class="input" type="text" name="order-address-basis-product" placeholder="">
                        </div>
                    </div>

                </div>

                <div class="column is-6 is-6-mobile">
                    <!-- Поле номенклатура -->
                    <label class="label">Номенклатура</label>
                    <div class="field">
                        <p class="control is-flex is-justify-content-space-between is-align-items-center">
                            <input class="input" type="text" name="order-address-basis-nomenclature" placeholder="">
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
                        <input class="mr-2 js-volume-checkbox" name="order-address-basis-volume-range" type="checkbox">
                        Диапазон
                    </label>
                    <div class="field has-addons is-align-items-end">
                        <p class="control width-100 js-volume-min">
                            <input class="input js-order-basis-volume-min" type="text" name="order-address-basis-volume-min" placeholder="-">
                        </p>
                        <p class="control width-100 js-volume-max is-hidden">
                            <input class="input" type="text" name="order-address-basis-volume-max" placeholder="Максимум">
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
                          <input type="radio" name="order-address-basis-nds">
                          С НДС
                        </label>
                        <label class="radio">
                          <input type="radio" name="order-address-basis-nds" checked>
                          Без НДС
                        </label>
                    </div>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-address-basis-value" placeholder="">
                        </p>
                        <p class="control">
                            <span class="select">
                                <select name="order-address-basis-unit">
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
                                <select class="width-100" name="order-address-basis-document">
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
                                <select class="width-100 js-order-basis-urgency" name="order-address-basis-urgency">
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
                                <select class="width-100" name="order-address-basis-term">
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
                                <input class="input" type="date" name="order-address-basis-date" value="2023-07-22" placeholder="">
                            </p>
                        </div>
                        <div class="field width-100 pl-4px">
                            <p class="control width-100">
                                <input class="input" type="time" name="order-address-basis-time" value="" placeholder="__:__">
                            </p>
                        </div>
                    </div>


                </div>

                <div class="column is-12">
                    <!-- Комментарий -->
                    <div class="field">
                        <label class="label mt-2">Комментарий</label>
                        <div class="control width-100 is-widescreen">
                            <textarea class="textarea" name="order-address-basis-comment" placeholder=""></textarea>
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
                            <input class="input" type="text" name="order-address-basis-legal-entity" placeholder="">
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
                                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-volume" placeholder="">
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-4">
                                    <label class="label">Вес</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-wt" placeholder="">
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-4">

                                    <label class="label">Цена</label>
                                    <div class="field has-addons">
                                        <p class="control width-100">
                                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-price" placeholder="">
                                        </p>
                                        <p class="control">
                                            <span class="select">
                                                <select name="order-address-basis-legal-entity-dael-unit">
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
                                            <select class="width-100 js-order-dael-payment-type" name="order-address-basis-legal-entity-dael-payment-type">
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
                                            <input class="input" type="date" name="order-address-basis-legal-entity-dael-date" value="2023-07-22" placeholder="">
                                        </p>
                                    </div>

                                </div>

                                <div class="column is-4 js-order-dael-dey is-hidden">

                                    <label class="label">Количество дней</label>
                                    <div class="field has-addons">
                                        <p class="control is-flex is-justify-content-space-between">
                                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-number-of-days" value="" placeholder="">
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
            <input class="input" type="text" name="order-address-basis" placeholder="">
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
                    <input class="input" type="text" name="order-address-basis-product" placeholder="">
                </div>
            </div>

        </div>

        <div class="column is-6 is-6-mobile">
            <!-- Поле номенклатура -->
            <label class="label">Номенклатура</label>
            <div class="field">
                <p class="control is-flex is-justify-content-space-between is-align-items-center">
                    <input class="input" type="text" name="order-address-basis-nomenclature" placeholder="">
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
                <input class="mr-2 js-volume-checkbox" name="order-address-basis-volume-range" type="checkbox">
                Диапазон
            </label>
            <div class="field has-addons is-align-items-end">
                <p class="control width-100 js-volume-min">
                    <input class="input js-order-basis-volume-min" type="text" name="order-address-basis-volume-min" placeholder="-">
                </p>
                <p class="control width-100 js-volume-max is-hidden">
                    <input class="input" type="text" name="order-address-basis-volume-max" placeholder="Максимум">
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
                  <input type="radio" name="order-address-basis-nds">
                  С НДС
                </label>
                <label class="radio">
                  <input type="radio" name="order-address-basis-nds" checked>
                  Без НДС
                </label>
            </div>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-address-basis-value" placeholder="">
                </p>
                <p class="control">
                    <span class="select">
                        <select name="order-address-basis-unit">
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
                        <select class="width-100" name="order-address-basis-document">
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
                        <select class="width-100 js-order-basis-urgency" name="order-address-basis-urgency">
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
                        <select class="width-100" name="order-address-basis-term">
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
                        <input class="input" type="date" name="order-address-basis-date" value="2023-07-22" placeholder="">
                    </p>
                </div>
                <div class="field width-100 pl-4px">
                    <p class="control width-100">
                        <input class="input" type="time" name="order-address-basis-time" value="" placeholder="__:__">
                    </p>
                </div>
            </div>


        </div>

        <div class="column is-12">
            <!-- Комментарий -->
            <div class="field">
                <label class="label mt-2">Комментарий</label>
                <div class="control width-100 is-widescreen">
                    <textarea class="textarea" name="order-address-basis-comment" placeholder=""></textarea>
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
                    <input class="input" type="text" name="order-address-basis-legal-entity" placeholder="">
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
                                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-volume" placeholder="">
                                </p>
                            </div>
                        </div>

                        <div class="column is-4">
                            <label class="label">Вес</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-wt" placeholder="">
                                </p>
                            </div>
                        </div>

                        <div class="column is-4">

                            <label class="label">Цена</label>
                            <div class="field has-addons">
                                <p class="control width-100">
                                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-price" placeholder="">
                                </p>
                                <p class="control">
                                    <span class="select">
                                        <select name="order-address-basis-legal-entity-dael-unit">
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
                                    <select class="width-100 js-order-dael-payment-type" name="order-address-basis-legal-entity-dael-payment-type">
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
                                    <input class="input" type="date" name="order-address-basis-legal-entity-dael-date" value="2023-07-22" placeholder="">
                                </p>
                            </div>

                        </div>

                        <div class="column is-4 js-order-dael-dey is-hidden">

                            <label class="label">Количество дней</label>
                            <div class="field has-addons">
                                <p class="control is-flex is-justify-content-space-between">
                                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-number-of-days" value="" placeholder="">
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
            <input class="input" type="text" name="order-address-basis-legal-entity" placeholder="">
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
                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-volume" placeholder="">
                        </p>
                    </div>
                </div>

                <div class="column is-4">
                    <label class="label">Вес</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-wt" placeholder="">
                        </p>
                    </div>
                </div>

                <div class="column is-4">

                    <label class="label">Цена</label>
                    <div class="field has-addons">
                        <p class="control width-100">
                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-price" placeholder="">
                        </p>
                        <p class="control">
                            <span class="select">
                                <select name="order-address-basis-legal-entity-dael-unit">
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
                            <select class="width-100 js-order-dael-payment-type" name="order-address-basis-legal-entity-dael-payment-type">
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
                            <input class="input" type="date" name="order-address-basis-legal-entity-dael-date" value="2023-07-22" placeholder="">
                        </p>
                    </div>

                </div>

                <div class="column is-4 js-order-dael-dey is-hidden">

                    <label class="label">Количество дней</label>
                    <div class="field has-addons">
                        <p class="control is-flex is-justify-content-space-between">
                            <input class="input" type="text" name="order-address-basis-legal-entity-dael-number-of-days" value="" placeholder="">
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
                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-volume" placeholder="">
                </p>
            </div>
        </div>

        <div class="column is-4">
            <label class="label">Вес</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-wt" placeholder="">
                </p>
            </div>
        </div>

        <div class="column is-4">

            <label class="label">Цена</label>
            <div class="field has-addons">
                <p class="control width-100">
                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-price" placeholder="">
                </p>
                <p class="control">
                    <span class="select">
                        <select name="order-address-basis-legal-entity-dael-unit">
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
                    <select class="width-100 js-order-dael-payment-type" name="order-address-basis-legal-entity-dael-payment-type">
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
                    <input class="input" type="date" name="order-address-basis-legal-entity-dael-date" value="2023-07-22" placeholder="">
                </p>
            </div>

        </div>

        <div class="column is-4 js-order-dael-dey is-hidden">

            <label class="label">Количество дней</label>
            <div class="field has-addons">
                <p class="control is-flex is-justify-content-space-between">
                    <input class="input" type="text" name="order-address-basis-legal-entity-dael-number-of-days" value="" placeholder="">
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
    const calendars = bulmaCalendar.attach('[name="order-client-date"]', options);

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
            if (vol.checked) {
                const parentEl = vol.parentElement.nextElementSibling;
                const min =parentEl.querySelector('.js-volume-min');
                const max =parentEl.querySelector('.js-volume-max');
                max.classList.remove('is-hidden');
                min.childNodes[1].setAttribute('placeholder', 'Минимум');
            }


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


            let container = section;

            while (!container.classList.contains('js-order-basis-urgency-container')) {
                container = container.parentElement;
            }

            const term = container.nextElementSibling;
            const datetime = container.nextElementSibling.nextElementSibling;

            if (section.value === 'Срочно в течение') {
                term.classList.remove('is-hidden');
                datetime.classList.add('is-hidden');
            } else if (section.value === 'До') {
                datetime.classList.remove('is-hidden');
                term.classList.add('is-hidden');
            } else {
                term.classList.add('is-hidden');
                datetime.classList.add('is-hidden');
            }

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

            let container = section;

            while (!container.classList.contains('js-order-dael-payment-type-container')) {
                container = container.parentElement;
            }

            const date = container.nextElementSibling;
            const dey = container.nextElementSibling.nextElementSibling;

            if (section.value === 'Предоплата на дату' || section.value === 'Отсрочка на дату') {
                date.classList.remove('is-hidden');
                dey.classList.add('is-hidden');
            } else if (section.value === 'Отсрочка сдвиг') {
                dey.classList.remove('is-hidden');
                date.classList.add('is-hidden');
            } else {
                date.classList.add('is-hidden');
                dey.classList.add('is-hidden');
            }

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
    class Order {
        constructor() {
            this.date = this.date();
            this.time = this.time();
            this.number = 'Ноява заявка';
            this.autor = 'Иванов Иван Иванович';
            this.client = {};
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

    class Client {
        constructor(order) {
            this.dateMin = order.querySelector('input[name=order-client-date]').value.split(' ')[0];
            this.dateMax = order.querySelector('input[name=order-client-date]').value.split(' ')[2];
            this.client = order.querySelector('input[name=order-client-name]').value;
            this.typeClient = order.querySelector('input[name=order-client-type]').value;
            this.typeShipment = order.querySelector('select[name=order-client-type-shipment]').value;
            this.address = [];
        }
    }

    class Address {
        constructor(address) {
            this.address = order.querySelector('input[name=order-address]').value;
            this.basis = [];
        }
    }

    class Basis {
        constructor(basis) {
            this.basis = basis.querySelector('input[name=order-address-basis]').value;
            this.product = basis.querySelector('input[name=order-address-basis-product]').value;
            this.nomenclature = basis.querySelector('input[name=order-address-basis-nomenclature]').value;
            this.volume = {
                range: basis.querySelector('input[name=order-address-basis-volume-range]').checked,
                min: basis.querySelector('input[name=order-address-basis-volume-min]').value,
                max: basis.querySelector('input[name=order-address-basis-volume-max]').value,
            };
            this.nds = {
                nds: basis.querySelector('input[name=order-address-basis-nds]').checked,
                value: basis.querySelector('input[name=order-address-basis-value]').value,
                unit: basis.querySelector('select[name=order-address-basis-unit]').value,
            };
            this.document = basis.querySelector('select[name=order-address-basis-document]').value;
            this.urgency = basis.querySelector('select[name=order-address-basis-urgency]').value;
            this.term = basis.querySelector('select[name=order-address-basis-term]').value;
            this.date = basis.querySelector('input[name=order-address-basis-date]').value;
            this.time = basis.querySelector('input[name=order-address-basis-time]').value;
            this.comment = basis.querySelector('textarea[name=order-address-basis-comment]').value;
            this.legalEntity = [];
        }
    }

    class LegalEntity{
        constructor(le) {
            this.legalEntity = le.querySelector('input[name=order-address-basis-legal-entity]').value;
            this.deal = [];
        }
    }

    class Dael{
        constructor(dael) {
            this.volume = dael.querySelector('input[name=order-address-basis-legal-entity-dael-volume]').value;
            this.wt = dael.querySelector('input[name=order-address-basis-legal-entity-dael-wt]').value;
            this.price = {
                value: dael.querySelector('input[name=order-address-basis-legal-entity-dael-price]').value,
                unit: dael.querySelector('select[name=order-address-basis-legal-entity-dael-unit]').value,
            };
            this.paymentType = dael.querySelector('select[name=order-address-basis-legal-entity-dael-payment-type]').value;
            this.date = dael.querySelector('input[name=order-address-basis-legal-entity-dael-date]').value;
            this.numberOfDays = dael.querySelector('input[name=order-address-basis-legal-entity-dael-number-of-days]').value;
        }
    }

    const buttonCreateOrder = document.querySelector('.js-create-order');

    buttonCreateOrder.addEventListener('click', (e) => {
        // Сбор данных о заявке и клиенте
        const orderContainer = document.querySelector('.order'),
              order = new Order(orderContainer),
              clientContainer = orderContainer.querySelector('.client'),
              client = new Client(clientContainer);

        order.client = client;

        // Сбор данных о адресах
        const addressContainer = clientContainer.querySelectorAll('.address');
        addressContainer.forEach(e => {
            const address = new Address(e);
            order.client.address.push(address);
            // Сбор данных о базисах
            const basisContainer = e.querySelectorAll('.basis');
            basisContainer.forEach(e => {
                const basis = new Basis(e),
                      lastChildBasis = order.client.address.length - 1;
                    order.client.address[lastChildBasis].basis.push(basis);
                    // Сбор данных о юредических лицах
                    const leContainer = e.querySelectorAll('.legal-entity');
                        leContainer.forEach(e => {
                            const le = new LegalEntity(e),
                                lastChildLE = order.client.address[lastChildBasis].basis.length - 1;
                            order.client.address[lastChildBasis].basis[lastChildLE].legalEntity.push(le);
                        // Сбор данных о сделках
                        const daelContainer = e.querySelectorAll('.dael');
                            daelContainer.forEach(e => {
                                const dael = new Dael(e),
                                    lastChildDael = order.client.address[lastChildBasis].basis[lastChildLE].legalEntity.length - 1;
                                order.client.address[lastChildBasis].basis[lastChildLE].legalEntity[lastChildDael].deal.push(dael);
                            });

                });
            });
        });

        console.log(JSON.stringify(order));
        // console.log(window.location.href + 'order');

        const hostName = window.location.href + 'order'

        // fetch('http://localhost:3003/order', {
        // fetch(hostName, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(order)
        // }).then(response => response.text())
        //   .then(commits => console.log(commits));
    });
});