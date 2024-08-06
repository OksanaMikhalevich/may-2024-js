// Part 1
// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

// String
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';

// Number
let number_1 = 1;
let number_10 = 10;
let number_999 = -999;
let number_123 = 123;
const PI = 3.14;
const E_num = 2.7;
let number_16 = 16;

// Boolean
let bool_true = true;
let bool_false = false;

// Console
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(number_1);
console.log(number_10);
console.log(number_999);
console.log(number_123);
console.log(PI);
console.log(E_num);
console.log(number_16);
console.log(bool_true);
console.log(bool_false);

//Part 2
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Оксана';
let middleName = 'Олександрівна';
let lastName = 'Михалевич';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

//Part 3
//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//Part 4
//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName_person = prompt('Як Вас звати?');
let middleName_person = prompt('Як Вас по-батькові?');
let age_person = prompt('Скільки Вам років?')
console.log(firstName_person + ' ' + middleName_person + '. ' + 'Вік' + ' - ' + age_person);