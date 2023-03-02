function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

let myObject = new Object();

myObject.number = 5;

multiplyNumeric(myObject);

console.log(myObject.number);