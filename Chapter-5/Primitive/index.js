﻿/**
 * Можно ли добавить свойство строке?
 */

let str = "Привет";

str.test = 5;

alert(str.test);

// Ответ: Выедет undefined
// После получения свойства test удаляется объект-обертка
// поэтому после обращения выдает undefined.