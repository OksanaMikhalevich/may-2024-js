// Part 1
// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let text1 = 'hello world';
let text2= 'lorem ipsum';
let text3 = 'javascript is cool';

console.log(text1.length);
console.log(text2.length);
console.log(text3.length);

let stringArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
let lengths = stringArray.map(item => item.length);
console.log(lengths)

// Part 2
// Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = text1.toUpperCase();
let toUpperCase2 = text2.toUpperCase();
let toUpperCase3 = text3.toUpperCase();

console.log(toUpperCase1);
console.log(toUpperCase2);
console.log(toUpperCase3);

// Part 3
//  Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase1 = toUpperCase1.toLowerCase();
let toLowerCase2 = toUpperCase2.toLowerCase();
let toLowerCase3 = toUpperCase3.toLowerCase();

console.log(toLowerCase1);
console.log(toLowerCase2);
console.log(toLowerCase3);

// Part 4
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// Part 5
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні';
function stringToArray (str) {
    return str.split(' ');
}

console.log(stringToArray(string));

// Part 6
// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

let conversionFromNumberToString = numbers.map((number) => number.toString());
console.log(conversionFromNumberToString);

// Part 7
// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums (array, direction) {
    if (Array.isArray(array)) {
        if (typeof direction === 'string' && direction === 'ascending') {
            return array.toSorted((num1, num2) => num1 - num2);
        }else if (typeof direction === 'string' && direction === 'descending') {
            return array.toSorted((num1, num2) => num2 - num1);
        }else {
            return 'Incorrect data';
        }
    }
}
let nums = [11,21,3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// Part 8
// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesAndDurationArraySort = coursesAndDurationArray.sort((monthDuration1, monthDuration2) => {
    return monthDuration2.monthDuration - monthDuration1.monthDuration;
})
console.log(coursesAndDurationArraySort);

let coursesAndDurationArrayFilter = coursesAndDurationArray.filter(monthDuration => monthDuration.monthDuration > 5);

console.log(coursesAndDurationArrayFilter);

let coursesAndDurationArrayId = coursesAndDurationArray.map((coursesAndDuration, index) => {
    let newObjectWithAId = {
        id: index + 1,
        title: coursesAndDuration.title,
        monthDuration: coursesAndDuration.monthDuration
    }
    return newObjectWithAId;
})

console.log(coursesAndDurationArrayId);

// Part 9
// описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cardSuits = ['spade', 'diamond','heart', 'clubs'];
let cardValues = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

let cards = [];
for (const cardSuit of cardSuits) {
    for (const value of cardValues) {
           let card = {cardSuit:cardSuit, cardValue:value};
           if (cardSuit === 'diamond' || cardSuit === 'heart') {
               card.color = 'red';
           }else {
               card.color = 'black';
           }
        cards.push(card);
    }
}

console.log(cards);

let spadeAce = cards.find((card) => {
   return (card.cardValue === 'ace' && card.cardSuit === 'spade');
})
console.log(spadeAce);

let cardsSix = cards.filter(card => card.cardValue === '6');
console.log(cardsSix);

let cardsRed = cards.filter(card => card.color === 'red');
console.log(cardsRed);

let cardsDiamond = cards.filter(card => card.cardSuit === 'diamond');
console.log(cardsDiamond);

let cardsClubs9Ace = cards.filter(card => card.cardSuit === 'clubs' && card.cardValue !== '6' && card.cardValue !== '7'
&& card.cardValue !== '8');
console.log(cardsClubs9Ace);

// Part 10
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let anObjectWithCardsBySuits = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else  if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    }else  if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(anObjectWithCardsBySuits);

// Part 11
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesModulesSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesModulesSass);

let coursesModulesDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesModulesDocker);