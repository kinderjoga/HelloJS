/**
 * Обязателен ли "else"?
 */


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

// Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
    if (age > 18) {
        return true; // Будет работать, т.к. если if вернет true, то здесь будет выход из функции.
    }
    // ...
    return confirm('Родители разрешили?');
}



/**
 * Перепишите функцию, используя оператор '?' или '||'
 */

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}


// Ответ

// Используя оператор ?

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// Используя оператор ||

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}


/**
 *  Функция min(a, b)
 */

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    return (a <= b) ? a : b;
};


/**
 * Функция pow(x,n)
 */

// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).


function pow(x, n) {
    if (n > 0 && Number.isInteger(n)) {
        return Math.pow(x, n);
    }
    return false;
}
