/**
 * Скопирован ли массив?
 */

//Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // ?

// Ответ: выдаст 4, т.к. fruits и shoppingCart ссылаются на один массив


/**
 * Операции с массивами
 */

let myArray = new Array['Джаз', 'Блюз'];
myArray.push('Рок-н-ролл');
myArray[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
myArray.unshift("Рэп", "Регги");



/**
 * Вызов в контексте массива
 */

//Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // ?

//Ответ: Выведет a,b,unction () { alert(this);}); т.к. arr будет рассматриваться в контексте объекта.

/**
 * Сумма введённых чисел
 */

function sumInput() {

    let myArray = [];

    while (true) {

        let value = prompt("Enter num", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let result = 0;
    for (let num of myArray) {
        result += num;
    }
    return result;
}


/**
 * Подмассив наибольшей суммы
 */


function getMaxSubSum(arr) {
    let max = 0;
    let param = 0;
    for (let item of arr) {
        param += item;
        max = Math.max(max, param)
        param = param > 0 ? param : 0;
    }
    return max
}