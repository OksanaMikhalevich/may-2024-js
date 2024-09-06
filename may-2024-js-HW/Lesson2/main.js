// Part 1
//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [123, 456, 789, 'oksana', 'taras', 'dima', true, false, null, undefined];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// Part 2
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Володар Перснів. Частина перша: Братство Персня',
    pageCount: 704,
    genre: 'фантастика',
};
let book2 = {
    title: 'Володар Перснів. Частина друга: Дві вежі',
    pageCount: 576,
    genre: 'фантастика',
};
let book3 = {
    title: 'Володар Перснів. Частина третя: Повернення короля',
    pageCount: 704,
    genre: 'фантастика',
};

// Part 3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1_authors = {
    title: 'Володар Перснів. Частина перша: Братство Персня',
    pageCount: 704,
    genre: 'фантастика',
    authors: [
        {
            name: 'Джон Рональд Руел Толкін',
            age: 'помер у віці 81 рік',
        }
    ],
};
let book2_authors = {
    title: 'Володар Перснів. Частина друга: Дві вежі',
    pageCount: 576,
    genre: 'фантастика',
    authors: [
        {
            name: 'Джон Рональд Руел Толкін',
            age: 'помер у віці 81 рік',
        }
    ],
};
let book3_authors = {
    title: 'Володар Перснів. Частина третя: Повернення короля',
    pageCount: 704,
    genre: 'фантастика',
    authors: [
        {
            name: 'Джон Рональд Руел Толкін',
            age: 'помер у віці 81 рік',
        }
    ],
};

//  Part 4
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Поліна',
        username: 'Івахненко',
        password: 'V63ay8N6aJ',
    },
    {
        name: 'Зореслава',
        username: 'Рудник ',
        password: 'pH23y5SHr8',
    },
    {
        name: 'Лукина',
        username: 'Чекалюк',
        password: 'm7C4k5eB4K',
    },
    {
        name: 'Федір',
        username: 'Воловик',
        password: 'Mbv5F8Ce62',
    },
    {
        name: 'Лука',
        username: 'Бойцун',
        password: '6x4ygCJ22U',
    },
    {
        name: 'Ярина',
        username: 'Щасна',
        password: 'jL7S62cT8c',
    },
    {
        name: 'Валерія',
        username: 'Скакун',
        password: '5p8rJtS6U7',
    },
    {
        name: 'Пантелеймон',
        username: 'Цимбал',
        password: 'cv72M6Fm6A',
    },
    {
        name: 'Петро',
        username: 'Ярешко',
        password: '8sc6gA9A9Z',
    },
    {
        name: 'Омелян',
        username: 'Лупійчук',
        password: '4e8xe73DCX',
    },
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password,
users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);

// Part 5
//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weather = [
    {
        day: 'Monday',
        temperatureInTheMorning: 11,
        temperatureDuringTheDay: 24,
        temperatureInTheEvening: 17,
    },
    {
        day: 'Tuesday',
        temperatureInTheMorning: 12,
        temperatureDuringTheDay: 25,
        temperatureInTheEvening: 18,
    },
    {
        day: 'Wednesday',
        temperatureInTheMorning: 12,
        temperatureDuringTheDay: 25,
        temperatureInTheEvening: 18,
    },
    {
        day: 'Thursday',
        temperatureInTheMorning: 14,
        temperatureDuringTheDay: 29,
        temperatureInTheEvening: 20,
    },
    {
        day: 'Friday',
        temperatureInTheMorning: 17,
        temperatureDuringTheDay: 28,
        temperatureInTheEvening: 20,
    },
    {
        day: 'Saturday',
        temperatureInTheMorning: 18,
        temperatureDuringTheDay: 29,
        temperatureInTheEvening: 22,
    },
    {
        day: 'Sunday',
        temperatureInTheMorning: 19,
        temperatureDuringTheDay: 28,
        temperatureInTheEvening: 21,
    },
];

//Логічні розгалуження:

//Part 6
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = Boolean(+(prompt('Enter your number')));
// if (a){
//     console.log('Вірно');
// }
// else {
//     console.log('Невірно');
// }

//Part 7
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +(prompt('Enter your number'));
// let num_time = (typeof time !== "number") ? 'your data is incorrect'
//     : time <= 15 ? 'first part'
//     : time > 15 && time <= 30 ? 'second part'
//     : time > 30 && time <= 45 ? 'three part'
//     : time > 45 && time <= 59 ? 'four part'
//     : 'you enter incorrect time';
// console.log(num_time);
//
// if (typeof time !== "number"){
//     console.log('your data is incorrect')
// }
// else if (time <= 15){
//     console.log('first part');
// }
// else if (time > 15 && time <= 30){
//     console.log('second part');
// }
// else if (time > 30 && time <= 45){
//     console.log('three part');
// }
// else if (time > 45 && time <= 59){
//     console.log('four part');
// }
// else{
//     console.log('you enter incorrect time');
// }

// Part 8
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +(prompt('Enter your number'));
// let num_day = (typeof day !== 'number') ? 'your data is incorrect'
//     : day <= 10 ? 'first decade'
//     : day > 10 && day <=20 ? 'second decade'
//     : day > 20 && day <= 31 ? 'three decade'
//     : 'you enter incorrect day';
// console.log(num_day);
//
// if (typeof day !== 'number'){
//     console.log('your data is incorrect');
// }
// else if (day <= 10){
//     console.log('first decade');
// }
// else if (day > 10 && day <=20){
//     console.log('second decade');
// }
// else if (day > 20 && day <= 31){
//     console.log('three decade')
// }
// else {
//     console.log('you enter incorrect day');
// }

// Part 9
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = prompt('Enter the ordinal day of the week');
switch (schedule){
    case '1':
        console.log('Улюблена робота, лекція, опрацювання ДЗ');
    break;
    case '2':
        console.log('Улюблена робота, консультація, доопрацювання ДЗ');
    break;
    case '3':
        console.log('Улюблена робота, лекція, опрацювання ДЗ');
    break;
    case '4':
        console.log('Улюблена робота, консультація, доопрацювання ДЗ');
    break;
    case '5':
        console.log('Улюблена робота, лекція, кохве і фільм');
    break;
    case '6':
        console.log('Доопрацювання матеріалу виданого протягом тижня, закриття всіх хвостів');
    break;
    case '7':
        console.log('Вижити)');
    break;
}

// Part 10
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let num1 = +(prompt('Enter the first number'));
let num2 = +(prompt('Enter the second number'));
if (typeof num1 !== 'number' && typeof num2 !== 'number'){
    console.log('Your data is incorrect');
}
else if (num1 > num2){
    console.log(num1);
}
else if (num1 < num2){
    console.log(num2);
}
else if (num1 === num2){
    console.log('The first number is equal to the second');
}

let numComparison = (typeof num1 !== 'number' && typeof num2 !== 'number') ? 'Your data is incorrect'
    : num1 > num2 ? console.log(num1)
    : num1 < num2 ? console.log(num2)
    : num1 === num2 ? console.log('The first number is equal to the second')
    : console.log('Your data is incorrect');

//Part 11
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x = prompt('Enter your value');
// if (x === '' || x === 'null' || x === 'undefined' || x === 'NaN' || x === '0'){
//     x = 'default'
//     console.log(x);
// }
// else {
//     console.log(x);
// }

if (!x){
    console.log(x);
}
else {
    console.log(x);
}
// Part 12
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
}


