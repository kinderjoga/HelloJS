/**
 * Привет, object
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:
 */

let user = Object();

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


/**
 * Проверка на пустоту
 */

function isEmpty(obj) {
    for (let key in obj) {
        if (obj[key] !== undefined) {
            return true
        }
        return false;
    }
}


/**
 * Объекты-константы
 * 
 * Напишите код для суммирования всех зарплат 
 * и сохраните результат в переменной sum. 
 * Должно получиться 390.
 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumPay(salaries) {
    let sum = 0;
    for (let name in salaries) {
        sum += salaries[name];
    }

    return sum;
}



/**
 * Умножаем все числовые свойства на 2
 * 
 * Создайте функцию multiplyNumeric(obj),
 *  которая умножает все числовые свойства объекта obj на 2
 */


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}


