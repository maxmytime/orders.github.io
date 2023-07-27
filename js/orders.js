'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Список ордеров полученный с сервера
    let ordersList = {
        '16.07.2023': [
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            }
        ],
        '17.07.2023': [
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    },
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            },
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            }
        ],
        '18.07.2023': [
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    },
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            },
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            }
        ],
        '19.07.2023': [
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    },
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            },
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            }
        ],
        '20.07.2023': [
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    },
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            },
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            }
        ],
        '21.07.2023': [
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    },
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            },
            {
                'id': 'АД-000123',
                'address': [
                    {
                        'volume-min': 6400,
                        'volume-max': 8400,
                        'volume-unit': 'л',
                        'basis': 'Норд',
                        'address': 'г. Новосибирск, ул. Абаканская, 36',
                        'product': 'ВПК',
                        'nomenclature': 'Дизель',
                        'status': ['Статус', 'Статус'],
                    }
                ]
            }
        ],
    };

    // Слайдер
    class OrdersSlider {
        constructor(orders, btnNext, btnPrev, option) {
            this.days = option;
            this.dayWidth = '';
            this.position = option;
            this.btnNext = option;
            this.btnPrev = option;
        }

        set days(option) {
            const orders = document.querySelector(option.slider);
            const days = orders.querySelector(option.sliderContainer);
            days.style.transform = `translate3D(0px, 0px, 0px)`;

            this._days = days;
        }

        get days() {
            return this._days;
        }

        set btnNext(option) {
            const btn = document.querySelector(option.btnNext);

            btn.addEventListener('click', (e) => {
                console.log('Вперед');
            });

            this._btnNext = btn;
        }

        set btnPrev(option) {
            const btn = document.querySelector(option.btnPrev);

            btn.addEventListener('click', (e) => {
                console.log(this.position);
            });

            this._btnPrev = btn;
        }

        set position(option) {
            let regexp = /(?<=\()\d+|(?<=\()-\d+/g;
            let t = this.days.style.transform;
            this._position = Number(t.match(regexp)[0]);
            console.log(this.position);
        }

        get position() {
            return this._position;
        }

    }

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
            console.log(this.itemClientWidth);
        }

        set currentOrders(options) {
            this._currentOrders = this.container.querySelectorAll(`${options.currentOrders} > div > div`);
            console.log(this.currentOrders);
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
                    console.log(this.itemClientWidth * this.columns);
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
                console.log(Number(t.match(regexp)[0]), this.itemClientWidth, this.margin);
                let position = Number(t.match(regexp)[0]) - this.itemClientWidth - this.margin;
                if (position >= (this.itemClientWidth + this.margin) * -2) {
                    console.log(this.itemClientWidth * this.columns);
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
                const dateStr = `${dayOfTheWeek[date.getDay()]} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
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

    const ordersSlider = document.querySelector('.orders'),
          btnNext = document.querySelector('.orders-btn-next'),
          btnPrev = document.querySelector('.orders-btn-prev');

    // new OrdersSlider(ordersSlider, btnNext, btnPrev, {
    //     'slider': '.orders',
    //     'sliderContainer': '.orders-day',
    //     'btnNext': '.orders-btn-next',
    //     'btnPrev': '.orders-btn-prev'
    // });

    const w = document.querySelector('.kanban').clientWidth;
    console.log(w/6-6);

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

    // console.log(kanban.days);

});