// Part 1
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaOfARectangleOrSquare = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number' && a > 0 && b > 0){
        return a * b;
    }

    return 'Incorrect data';
}

console.log(areaOfARectangleOrSquare(10, 20));

// Part 2
// створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = (r) => {
    if (typeof r === 'number' && r > 0) {
        // return Math.round(Math.PI * Math.pow(r, 2));
        return (Math.PI * Math.pow(r, 2)).toFixed(2);
    }

    return 'Incorrect data';
}

console.log(circleArea(12));

// Part 3
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea =  (r, h) => {
    if (typeof r === 'number' && typeof h === 'number' && r > 0 && h > 0){
        return (2 * Math.PI * r * (r + h)).toFixed(2);
    }

    return 'Incorrect data';
}

console.log(cylinderArea(5, 15));

// Part 4
// створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let outputOfArrayElements = (arr) => {
    if (Array.isArray(arr)) {
        for (const element of arr) {
            console.log(element);
        }
    }

    return 'Incorrect data';
}

outputOfArrayElements(users);

// Part 5
// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let createsTagParagraphWithText = (text) => {
    document.write(`<p>${text}</p>`);
}

createsTagParagraphWithText('Incorrect data');

// Part 6
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

let listCreation = (text) => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`);
}

listCreation('hello');

// Part 7
// створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let creatingAPersonalList = (text, number) => {
    if (typeof number === 'number' && number > 0){

        for (let i = 0; i < number; i++) {
            document.write(`<ul><li>${text}</li></ul>`);
        }
    }

    return 'Incorrect data';
}
creatingAPersonalList('hi', 10);

// Part 8
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

let creatingAListOfArrayElements = (array) => {
    if (Array.isArray(array)) {
        for (const element of array) {
            document.write(`<ul><li>${element}</li></ul>`);
        }
    }

    return 'Incorrect data';
}

// Part 9
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let creatingAListUsers = (array) => {
    if (Array.isArray(array)) {
        for (const element of array) {
            document.write(`<div>Id - ${element.id}, name - ${element.name}, age - ${element.age}</div>`);
        }
    }

    return 'Incorrect data';
}

// Part 10
// створити функцію яка повертає найменьше число з масиву

let returnTheSmallestNumberFromTheArray = (array) => {
    if (Array.isArray(array)) {
        return Math.min(...array);
    }

    return 'Incorrect data';
}

// Part 11
// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sumElementsArray = (array) => {
    let temp = 0;
    if (Array.isArray(array)) {
        for (const element of array) {
            if (typeof element === 'number') {
                temp += element;
            }
        }
    }

    return temp;
}

// Part 12
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

// Part 13
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let temp;
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            temp = element;
        }
    }
    return sumUAH / temp.value;
}
