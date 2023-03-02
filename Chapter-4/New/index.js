/**
 *  Две функции - один объект
 */



//Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert(a == b); // true

// Ответ: Да, возможно, т.к. функции могут возвращать один и тот же объект.


/**
 * Создайте калькулятор при помощи конструктора, new Calculator
 * 
 */


function Calculator() {
    this.read = function () {
        this.a = +prompt('Enter A', '');
        this.b = +prompt('Enter B', '');
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


/**
 * Создайте new Accumulator
 */

function Accumulator(startingValue = 1) {
    this.value = startingValue;

    this.read = function () {
        this.value  += +prompt('Enter new num', 0);  
    }

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений