// Part 1
// створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let createElementDiv = document.createElement('div');
createElementDiv.classList.add('wrap', 'collapse','alpha', 'beta');
createElementDiv.style.backgroundColor = 'silver';
createElementDiv.style.color = 'yellow';
createElementDiv.innerText = 'hello';

document.body.appendChild(createElementDiv);

let createElementDivClone = createElementDiv.cloneNode(true);
document.body.appendChild(createElementDivClone);

// Part 2
// Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let array = ['Main','Products','About us','Contacts'];

let listCreation = document.createElement('ul');
for (const item of array) {
    let createAListAndTag = document.createElement('li');
    createAListAndTag.innerText = item;
    listCreation.appendChild(createAListAndTag);
}
document.body.appendChild(listCreation);

// Part 3
// Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray) {
    let createElementDiv = document.createElement('div');
    createElementDiv.innerText = `${element.title}, ${element.monthDuration}`;
    document.body.appendChild(createElementDiv);
}

// Part 4
// Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let createElementDiv = document.createElement('div');
    let createElementH1 = document.createElement('h1');
    let createElementP = document.createElement('p');

    createElementDiv.classList.add('item');
    createElementH1.classList.add('heading');
    createElementP.classList.add('description');

    createElementH1.innerText = `${element.title}`;
    createElementP.innerText = `${element.monthDuration}`;

    createElementDiv.append(createElementH1, createElementP);
    document.body.appendChild(createElementDiv);
}

// Part 5 (з додаткових)
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

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

for (const arrayElement of coursesArray) {

    let divElement = document.createElement('div');

    let titleElement = document.createElement('h2');
    titleElement.innerText = arrayElement.title;

    let monthDurationElement = document.createElement('div');
    monthDurationElement.innerText = `Month duration - ${arrayElement.monthDuration}`;

    let hourDurationElement = document.createElement('div');
    hourDurationElement.innerText = `Hour duration - ${arrayElement.hourDuration}`;

    let modulesElement = document.createElement('ul');

    for (const module of arrayElement.modules) {

        let liElement = document.createElement('li');
        liElement.innerText = module;
        modulesElement.appendChild(liElement);

    }

    divElement.append(titleElement, monthDurationElement, hourDurationElement, modulesElement);
    document.body.appendChild(divElement);
}