/**
 * Перепишите с использованием функции-стрелки
 */


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);

// Решение

let askQuestion = (question, yes, no) => {
    return confirm(question) ? yes() : no();
};

askQuestion("Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение."));