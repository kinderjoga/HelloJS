/**
 * Сумма свойств объекта
 * 
 */

function sumSalaries(salaries) {

    return Object.fromEntries(
        Object.values(salaries).reduce((a, b) => a + b, 0)
    );
}


/**
 *  Подсчёт количества свойств объекта
 * 
 */

function count(obj) {
    return Object.keys(obj).length;
}
