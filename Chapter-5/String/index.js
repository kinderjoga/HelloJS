/**
 * Сделать первый символ заглавным
 */

function ucFirst(str) {
    if (str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    return str;
}


/**
 * Проверка на спам
 */

function checkSpam(str) {
    let newstr = str.toLowerCase();
    if (newstr.includes('viagra') || newstr.includes('xxx')) return true;
    return false;
}

/**
 * Усечение строки
 */

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength - 1) + "…";
    }
    return str;
}


/**
 * Выделить число
 */

function extractCurrencyValue(str) {
    return +str.slice(1);
  }