/**
 * Создайте дату
 */

let myDate = new Date(2012, 1, 20, 3, 12);
alert(myDate);


/**
 * Покажите день недели
 * 
 */


function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}


/**
 * День недели в европейской нумерации
 */


function getLocalDay(date) {

    let day = date.getDay();

    return (day == 0) ? 7 : day;
}


/**
 * Какой день месяца был много дней назад?
 */


function getDateAgo(date, days) {
    let myDate = new Date(date);
    myDate.setDate(date.getDate() - days);
    return myDate.getDate();
}


/**
 * Сколько сегодня прошло секунд?
 */

function getSecondsToday() {
    let day = new Date();
    return day.getHours() * 3600 + day.getMinutes() * 60 + day.getSeconds();
}

/**
 * Сколько секунд осталось до завтра?
 */

function getSecondsToTomorrow() {
    let day = new Date();
    return (24 - day.getHours()) * 3600
        + (60 - day.getMinutes()) * 60
        + (60 - day.getSeconds());
}

alert(getSecondsToTomorrow());


function getSecondsToday() {
    let day = new Date();
    return 86400 - day.getHours() * 3600
        - day.getMinutes() * 60
        - day.getSeconds();
}

alert(getSecondsToTomorrow());


/**
 * Форматирование относительной даты
 */

function formatDate(date) {

    let time = (new Date() - date) / 1000;

    let data = date;
    let year = data.getFullYear().toString().slice(-2);
    let month = data.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = data.getDate();
    day = day < 10 ? '0' + day : day;
    let hour = data.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minutes = data.getMinutes();

    if (time < 1) {
        return 'прямо сейчас';
    } else if (time < 60) {
        return `${time} сек. назад`
    } else if (time < 3600) {
        time = Math.floor(time / 60);
        return `${time} мин. назад`
    } else {
        return `${day}.${month}.${year} ${hour}:${minutes}`
    }

}