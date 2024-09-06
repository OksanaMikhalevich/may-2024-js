// Part 1
//створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array = [
    [123,456,789,987,654],
    ['one','two','three','four','five'],
    [true,false,'number',321,147]
]

for (let arrayElement of array) {
    console.log(arrayElement);
    for (const element of arrayElement) {
        console.log(element);
    }
}

// Part 2
//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArray = [];
emptyArray[0] = 123;
emptyArray[1] = 456;
emptyArray[2] = 789;
emptyArray[3] = '123';
emptyArray[4] = '456';
emptyArray[5] = '789';
emptyArray[6] = true;
emptyArray[7] = false;
emptyArray[8] = [123,456,789];
console.log(emptyArray);

// Part 3
//є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numberArray = [2,17,13,6,22,31,45,66,100,-18];
//  3.1
let num = 0;
while (num < numberArray.length){
    console.log(numberArray[num]);
    num++;
}
// 3.2
for (let i = 0; i < numberArray.length; i++) {
    const numberArrayElement = numberArray[i];
    console.log(numberArrayElement);
}