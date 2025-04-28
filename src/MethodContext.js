import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    subscribe: function () {
        this.clickHandler = () => {
            this.count++;
        };
        EventEmitter.on('click', this.clickHandler);
    },
    unsubscribe: function () {
        EventEmitter.off('click', this.clickHandler);
    },
};

export const obj1 = {
    first: function () {
        const args = Array.from(arguments).reverse();
        return this.second.apply(this, args);
    },
    second: function () {},
};
