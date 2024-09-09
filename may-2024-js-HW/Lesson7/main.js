// Part 1
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User('1', 'Ладомира', 'Стецько', 'proyappauqueukou-7385@yopmail.com', '014-45-00977'),
    new User('2', 'Злата', 'Окуневська', 'troppabakalo-3569@yopmail.com', '716-33-04659'),
    new User('3', 'Устим', 'Чарнецький', 'freudoimmojeuzi-9362@yopmail.com', '664-36-23743'),
    new User('4', 'Сонцеслава', 'Володкович', 'beugraubrougredi-5566@yopmail.com', '984-99-37684'),
    new User('5', 'Елвіна', 'Юрчишин', 'deuliddoiritru-2815@yopmail.com', '581-62-81187'),
    new User('6', 'Жозефіна', 'Чернявська', 'proipreufissatau-5422@yopmail.com', '305-64-20719'),
    new User('7', 'Дан', 'Яхно', 'zecommawiha-9918@yopmail.com', '585-96-27003'),
    new User('8', 'Микита', 'Ерстенюк', 'hoddikuddavou-9020@yopmail.com', '290-10-20703'),
    new User('9', 'Ілля', 'Колодій', 'zasautupemmi-4640@yopmail.com', '592-70-09974'),
    new User('10', 'Олег', 'Троцький', 'quifriffugreicroi-4893@yopmail.com', '335-51-56449')
]
console.log(users);

// Part 2
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersFilter = users.filter((user) => {
    if (user.id % 2 === 0) {
       return user;
    }
})

console.log(usersFilter);

// Part 3
// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//  по зростанню
let usersSort = users.sort((index1, index2) => {
    return index1.id - index2.id;
})

console.log(usersSort);

// по спаданню
let sortInDescendingOrder = users.sort((index1, index2) => {
    return index2.id - index1.id;
})

console.log(sortInDescendingOrder);

// Part 4
// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let usersClient = [
    new Client('1', 'Ладомира', 'Стецько', 'proyappauqueukou-7385@yopmail.com', '014-45-00977', ['1', '2']),
    new Client('2', 'Злата', 'Окуневська', 'troppabakalo-3569@yopmail.com', '716-33-04659', ['2']),
    new Client('3', 'Устим', 'Чарнецький', 'freudoimmojeuzi-9362@yopmail.com', '664-36-23743', ['3', '4', '5']),
    new Client('4', 'Сонцеслава', 'Володкович', 'beugraubrougredi-5566@yopmail.com', '984-99-37684', ['4']),
    new Client('5', 'Елвіна', 'Юрчишин', 'deuliddoiritru-2815@yopmail.com', '581-62-81187', ['5', '6']),
    new Client('6', 'Жозефіна', 'Чернявська', 'proipreufissatau-5422@yopmail.com', '305-64-20719', ['6', '7', '8', '9']),
    new Client('7', 'Дан', 'Яхно', 'zecommawiha-9918@yopmail.com', '585-96-27003', ['7']),
    new Client('8', 'Микита', 'Ерстенюк', 'hoddikuddavou-9020@yopmail.com', '290-10-20703', ['8', '9', '10']),
    new Client('9', 'Ілля', 'Колодій', 'zasautupemmi-4640@yopmail.com', '592-70-09974', ['9']),
    new Client('10', 'Олег', 'Троцький', 'quifriffugreicroi-4893@yopmail.com', '335-51-56449', ['10', '11', '12', '13', '14']),
]

console.log(usersClient);

// Part 5
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let usersClientSort = usersClient.sort((index1, index2) => {
    return index1.order.length - index2.order.length;
})

console.log(usersClientSort);

// Part 6
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacturer, yearOfManufacture,  maximumSpeed, engineSize) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineSize = engineSize;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`);
    }

    this.info = function () {
        for (const element in this) {
            if (typeof this[element] !== 'function') {
                console.log(`${element} - ${this[element]}`);
            }
        }
    }

    this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed) {
        console.log(this.maximumSpeed = this.maximumSpeed + newSpeed);
    }

    this.changeYear = function changeYear (newValue) {
        console.log(this.yearOfManufacture = newValue);
    }

    this.addDriver = function addDriver (driver) {
        this.driver = driver;
    }
}
let car = new Car('Bugatti', 'France', 2021, 300, 3.0);

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(70);
car.changeYear(2020);
car.addDriver('Oksana');

// Part 7
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class  Cars {
    constructor(model, manufacturer, yearOfManufacture,  maximumSpeed, engineSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineSize = engineSize;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`);
        }

        this.info = function () {
            for (const element in this) {
                if (typeof this[element] !== 'function') {
                    console.log(`${element} - ${this[element]}`);
                }
            }
        }

        this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed) {
            console.log(this.maximumSpeed = this.maximumSpeed + newSpeed);
        }

        this.changeYear = function changeYear (newValue) {
            console.log(this.yearOfManufacture = newValue);
        }

        this.addDriver = function addDriver (driver) {
            this.driver = driver;
        }
    }
}

let cars = new Cars('Bugatti', 'France', 2021, 300, 3.0);

console.log(cars);
car.drive();
car.info();
car.increaseMaxSpeed(70);
car.changeYear(2020);
car.addDriver('Oksana');

// Part 8
// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends People {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}

class Prince extends People {
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }

    choiceCinderellas (array) {
        for (const element of array) {
            if (element.footSize === this.shoeSize){
                return element;
            }
        }
    }
}

let array = [
    new Cinderella('gnhmhk','17', '37'),
    new Cinderella('fsrtgyhuj','17', '39'),
    new Cinderella('aszxcv','17', '38'),
    new Cinderella('awert','17', '38.5'),
    new Cinderella('.lkj','17', '37.5'),
    new Cinderella('ngtyu','17', '36'),
    new Cinderella('juye3r','17', '36.5'),
]

let prince = new Prince('wertgf', '35', '38')
console.log(prince.choiceCinderellas(array));

let choiceCinderellas = array.find((cinderella) => {
    if (cinderella.footSize === prince.shoeSize) {
        return cinderella;
    }
})

console.log(choiceCinderellas);