/**
 * Фильтрация уникальных элементов массива
 */

function unique(arr) {
    return Array.from(new Set(arr));
}


/**
 * Отфильтруйте анаграммы
 */

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
}  



/**
 * Перебираемые ключи
 */

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

// Ответ: потому что keys это не массив, а .push это метод массива