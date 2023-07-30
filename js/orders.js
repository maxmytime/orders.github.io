'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Список ордеров полученный с сервера
    let ordersList = {
        "Status": "OK",
        "Errors": "",
        "Data": {
            "OrdersList": [{
                    "date": "19.07.2023",
                    "time": "01:32:35",
                    "number": "000000001",
                    "author": "Шитиков Роман Дмитриевич",
                    "client": {
                        "name_client": "Нефтесиб",
                        "code_client": "КА-КА000354",
                        "type_client": "Тип B"
                    },
                    "type_order": "Заявка",
                    "type_operation": "Перемещение",
                    "archieved": false,
                    "date_order": {
                        "date_range": false,
                        "date_start": "30.07.2023",
                        "date_end": "31.07.2023"
                    },
                    "status_buh": "Ожидает",
                    "status_logistic": "1",
                    "array_addresses": [{
                        "name_address": "ТестовыйАдрес",
                        "array_basises": [{
                            "name_basis": "ТестовыйБазис",
                            "name_product": "ТестовыйПродукт",
                            "volume": {
                                "range_volume": false,
                                "start_volume": 1000,
                                "end_volume": 1000
                            }
                        }]
                    }]
                },
                {
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
                        "date_start": "29.07.2023",
                        "date_end": "29.07.2023"
                    },
                    "status_buh": "Обработана",
                    "status_logistic": "2",
                    "array_addresses": [{
                        "name_address": "ТестовыйАдрес",
                        "array_basises": [{
                            "name_basis": "ТестовыйБазис",
                            "name_product": "ТестовыйПродукт",
                            "volume": {
                                "range_volume": false,
                                "start_volume": 1000,
                                "end_volume": 1000
                            }
                        }]
                    }]
                },
                {
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
                        "date_start": "29.07.2023",
                        "date_end": "30.07.2023"
                    },
                    "status_buh": "Обработана",
                    "status_logistic": "2",
                    "array_addresses": [{
                        "name_address": "ТестовыйАдрес",
                        "array_basises": [{
                            "name_basis": "ТестовыйБазис",
                            "name_product": "ТестовыйПродукт",
                            "volume": {
                                "range_volume": false,
                                "start_volume": 1000,
                                "end_volume": 1000
                            }
                        }]
                    }]
                },
                {
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
                        "date_start": "29.07.2023",
                        "date_end": "27.07.2023"
                    },
                    "status_buh": "Обработана",
                    "status_logistic": "2",
                    "array_addresses": [{
                        "name_address": "ТестовыйАдрес",
                        "array_basises": [{
                            "name_basis": "ТестовыйБазис",
                            "name_product": "ТестовыйПродукт",
                            "volume": {
                                "range_volume": false,
                                "start_volume": 1000,
                                "end_volume": 1000
                            }
                        }]
                    }]
                },
                {
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
                        "date_start": "29.07.2023",
                        "date_end": "03.08.2023"
                    },
                    "status_buh": "Обработана",
                    "status_logistic": "2",
                    "array_addresses": [{
                        "name_address": "ТестовыйАдрес",
                        "array_basises": [{
                            "name_basis": "ТестовыйБазис",
                            "name_product": "ТестовыйПродукт",
                            "volume": {
                                "range_volume": false,
                                "start_volume": 1000,
                                "end_volume": 1000
                            }
                        }]
                    }]
                },
                {
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
                        "date_start": "29.07.2023",
                        "date_end": "05.08.2023"
                    },
                    "status_buh": "Обработана",
                    "status_logistic": "2",
                    "array_addresses": [{
                        "name_address": "ТестовыйАдрес",
                        "array_basises": [{
                            "name_basis": "ТестовыйБазис",
                            "name_product": "ТестовыйПродукт",
                            "volume": {
                                "range_volume": false,
                                "start_volume": 1000,
                                "end_volume": 1000
                            }
                        }]
                    }]
                }
            ]
        }
    };



    // Слайдер
    // class OrdersSlider {
    //     constructor(orders, btnNext, btnPrev, option) {
    //         this.days = option;
    //         this.dayWidth = '';
    //         this.position = option;
    //         this.btnNext = option;
    //         this.btnPrev = option;
    //     }

    //     set days(option) {
    //         const orders = document.querySelector(option.slider);
    //         const days = orders.querySelector(option.sliderContainer);
    //         days.style.transform = `translate3D(0px, 0px, 0px)`;

    //         this._days = days;
    //     }

    //     get days() {
    //         return this._days;
    //     }

    //     set btnNext(option) {
    //         const btn = document.querySelector(option.btnNext);

    //         btn.addEventListener('click', (e) => {
    //             console.log('Вперед');
    //         });

    //         this._btnNext = btn;
    //     }

    //     set btnPrev(option) {
    //         const btn = document.querySelector(option.btnPrev);

    //         btn.addEventListener('click', (e) => {
    //             console.log(this.position);
    //         });

    //         this._btnPrev = btn;
    //     }

    //     set position(option) {
    //         let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
    //         let t = this.days.style.transform;
    //         this._position = Number(t.match(regexp)[0]);
    //         console.log(this.position);
    //     }

    //     get position() {
    //         return this._position;
    //     }

    // }

    class Kanban {
        constructor(container, options) {
            this.container = document.querySelector(container);
            this.containerClientWidth = this.container.clientWidth;
            this.margin = options.margin;
            this.columns = options.columns;
            this.itemClientWidth = options;
            this.overdueDeliveries = this.container.querySelector(options.overdueDeliveries);
            this.currentOrders = options;
            this.futureDeliveries = this.container.querySelector(options.futureDeliveries);
            this.days = options;
            this.btnNext = options;
            this.btnPrev = options;
        }

        set itemClientWidth(options) {
            const w = this.containerClientWidth / this.columns - options.margin;
            this._itemClientWidth = Number(w.toFixed(3));
        }

        set currentOrders(options) {
            this._currentOrders = this.container.querySelectorAll(`${options.currentOrders} > div > div`);
        }

        set btnPrev(options) {
            const btn = document.querySelector(options.btnNext);

            btn.addEventListener('click', (e) => {
                const days = document.querySelector(options.daysContainer);
                // let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
                let regexp = /(?<=\()\d+.\d+|(?<=\()-\d+.\d+|(?<=\()\d+|(?<=\()-\d+/g;
                let t = days.style.transform;
                let position = Number(t.match(regexp)[0]) + this.itemClientWidth + this.margin;
                console.log(Number(t.match(regexp)[0]), this.itemClientWidth, this.margin);
                if (position <= 0) {
                    days.style.transform = `translate3D(${position}px, 0px, 0px)`;
                }
            });

            this._btnNext = btn;
        }

        set btnNext(options) {
            const btn = document.querySelector(options.btnPrev);

            btn.addEventListener('click', (e) => {
                const days = document.querySelector(options.daysContainer);
                // let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
                let regexp = /(?<=\()\d+.\d+|(?<=\()-\d+.\d+|(?<=\()\d+|(?<=\()-\d+/g;
                let t = days.style.transform;
                // console.log(Number(t.match(regexp)[0]), this.itemClientWidth, this.margin);
                let position = Number(t.match(regexp)[0]) - this.itemClientWidth - this.margin;
                if (position >= (this.itemClientWidth + this.margin) * -2) {
                    // console.log(this.itemClientWidth * this.columns);
                    days.style.transform = `translate3D(${position}px, 0px, 0px)`;
                }
            });

            this._btnPrev = btn;
        }

        set days(options) {
            const days = document.querySelector(options.daysContainer);
            days.style.transform = `translate3D(-${this.itemClientWidth + this.margin}px, 0px, 0px)`;
            this._days = days;
        }

        get days() {
            return this._days;
        }

        // setPosition(options) {
        //     const days = document.querySelector(options.daysContainer);
        //     let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
        //     let t = days.style.transform;
        //     this._position = Number(t.match(regexp)[0]);
        //     console.log(this.position);
        // }

        // get position() {
        //     return this._position;
        // }

        get currentOrders() {
            return this._currentOrders;
        }

        get itemClientWidth() {
            return this._itemClientWidth;
        }

        setParam() {
            // ширина и марджин не отгруженых заявок
            this.overdueDeliveries.style.minWidth = `${this.itemClientWidth}px`;
            this.overdueDeliveries.style.marginRight = `${this.margin}px`;
            // ширина и марджин будущих заявок
            this.futureDeliveries.style.minWidth = `${this.itemClientWidth}px`;
            this.futureDeliveries.style.marginRight = `${this.margin}px`;
            // ширина и марджин текущих заявок
            const date = new Date(),
                  dayOfTheWeek = ['Вс', 'Пн', 'Вт', 'Ср','Чт','Пт','Сб'];
            let dayСounter = 0;

            date.setDate(date.getDate() - 2);

            this.currentOrders.forEach(order => {
                date.setDate(date.getDate() + dayСounter);
                order.style.minWidth = `${this.itemClientWidth}px`;
                order.style.marginRight = `${this.margin}px`;
                const dateStr = `${dayOfTheWeek[date.getDay()]} ${(String(date.getDate()).length > 1) ? date.getDate() : 0 + String(date.getDate())}.${(String(date.getMonth() + 1).length > 1) ? date.getMonth() + 1 : 0 + String(date.getMonth() + 1)}.${date.getFullYear()}`;
                order.querySelector('.orders-day-date').innerHTML = dateStr;
                dayСounter = 1;
            });
        }
    }

    // День
    // Ордер Как помечать ордер который выполнен частично, почему 2 кнопки статус это кнопки?
    // Адрес доставки
    // Архив
    class Archive {
        constructor(element) {
            this.btn = this.button(element);
            this.container = element.querySelector('.orders-day-footer-container');
        }

        button(element) {
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

    const kanban = new Kanban('.kanban', {
        margin: 6,
        columns: 6,
        overdueDeliveries: '.kanban-overdue-deliveries',
        futureDeliveries: '.kanban-future-deliveries',
        currentOrders: '.kanban-current-orders',
        btnNext: '.orders-btn-next',
        btnPrev: '.orders-btn-prev',
        daysContainer: '.orders-days'
    });

    kanban.setParam();

    function getDate(date) {
        let d = date.split('.');
        return `${d[0]}.${d[1]}`;
    }

    function dateConvertor(date) {
        const dateArr = date.split('.');

        for (let i = 0; i < dateArr.length; i++) {
            if (dateArr[i][0] === '0') {
                dateArr[i] = dateArr[i][1];
            }
        }

        return new Date(dateArr[2], dateArr[1], dateArr[0]);
    }

    function distributor(date, order) {
        const columns = document.querySelectorAll('.orders-day');

        columns.forEach(column => {
            const dateCol = column.querySelector('.orders-day-date').textContent.slice(3);
            const dateFirst = columns[1].querySelector('.orders-day-date').textContent.slice(3);
            const dateLast = columns[6].querySelector('.orders-day-date').textContent.slice(3);
            console.log(dateLast, dateFirst);

            if (dateConvertor(date) < dateConvertor(dateFirst)) {
                const columnBody = columns[0].querySelector('.orders-day-body');
                columnBody.insertAdjacentElement('beforeend', order);
            }

            if (dateConvertor(date) > dateConvertor(dateLast)) {
                const columnBody = columns[7].querySelector('.orders-day-body');
                columnBody.insertAdjacentElement('beforeend', order);
            }

            if (dateCol === date) {
                const columnBody = column.querySelector('.orders-day-body');
                columnBody.insertAdjacentElement('beforeend', order);
            }


        });
    }

    ordersList.Data.OrdersList.forEach(order => {
        let ordersOrder = document.createElement('div');
            ordersOrder.setAttribute('class', 'orders-order');
            ordersOrder.setAttribute('data-number', order.number);

        order.array_addresses.forEach(address => {

            address.array_basises.forEach(basis => {

                let item = `<div class="orders-order-item">
                                <div class="orders-order-item-volume">
                                    <span class="orders-order-item-volume-min">${getDate(order.date_order.date_start)}</span>
                                    <span>-</span>
                                    <span class="orders-order-item-volume-max">${getDate(order.date_order.date_end)}</span>
                                </div>
                                <div class="orders-order-item-body">
                                    <div>
                                        <span class="orders-order-item-addres">${address.name_address}</span>
                                        <span class="orders-order-item-basis">${basis.name_basis}</span>
                                    </div>
                                    <div>
                                        <span class="orders-order-item-addres">${order.client.name_client}</span>
                                        <span class="orders-order-item-product">${basis.name_product}</span>
                                    </div>
                                    <div>
                                        <span>
                                            <span class="orders-order-item-volume-min">${basis.volume.start_volume}</span>
                                            <span>-</span>
                                            <span class="orders-order-item-volume-max">${basis.volume.end_volume}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="orders-order-item-status">
                                    <span class="orders-order-item-status-state"></span>
                                    <br>
                                    <span class="orders-order-item-status-state"></span>
                                </div>
                            </div>`;

                ordersOrder.insertAdjacentHTML('afterbegin', item);

            });

        const dayTest = document.querySelector('.orders-day-body-test');
        distributor(order.date_order.date_end, ordersOrder);

        });

    });

    const orders = document.querySelectorAll('.orders-order');

    orders.forEach(order => {
        order.addEventListener('click', (e) => {
            console.log(order.getAttribute('data-number'));
            console.log(document.location);
            document.location = document.location.origin + '/index.html';
        });
    });

});