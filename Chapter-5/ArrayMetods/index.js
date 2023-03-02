/**
 * Переведите текст вида border-left-width в borderLeftWidth
 */



function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}


/**
 * Фильтрация по диапазону
 */

function filterRange(arr, a, b) {

    let result = [];

    for (let item of arr) {
        if (item >= a && item <= b) {
            result.push(item);
        }
    }
    return result;
}


/**
 * Фильтрация по диапазону "на месте"
 */


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}


/**
 * Сортировать в порядке по убыванию
 */


let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr.sort().reverse();

alert(arr); // 8, 5, 2, 1, -10


/**
 * Скопировать и отсортировать массив
 * 
 */


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);


function copySorted(arr) {
    return arr.concat().sort()
}

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

/**
 * Создать расширяемый калькулятор
 */


function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            ch = split[1],
            b = +split[2]

        if (!this.methods[ch] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[ch](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}


/**
 * Трансформировать в массив имён
 */


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = arr.map(item => item.name);


/**
 * Трансформировать в объекты
 */


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }))



/**
 * Перемешайте массив
 */

let arr = [1, 2, 3];

arr.sort(() => Math.random() - 0.5);


/**
 * Получить средний возраст
 */


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];


function getAverageAge(users) {
    let age = 0;

    users.forEach(element => {
        age += element['age'];
    });

    return age / users.length;
}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28



/**
 * Оставить уникальные элементы массива
 */

function unique(arr) {
    return Array.from(new Set(arr));
}


/**
 * Создайте объект с ключами из массива
 */


function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}