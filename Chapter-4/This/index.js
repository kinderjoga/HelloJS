/**
 * Использование "this" в литерале объекта
 * 
 * Каким будет результат при обращении к свойству объекта ref? Почему?
 */


function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

/**Ошибка или ничего не выведется, т.к. user.ref ссылается на makeUser()*/


/**
 * Создайте калькулятор
 */


let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt('Enter A', '');
        this.b = +prompt('Enter B', '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


/**
 * Цепь вызовов
 * 
 */


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); 