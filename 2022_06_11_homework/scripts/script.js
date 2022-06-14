/* 1. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov    '. Обновите/переопределите переменную user, записав в неё то же самое значение, но без лишних пробелов по краям. 
Выведите то, что получилось, в консоль. */
let user = '   Ivan Ivanov    ';
user = user.trim();
console.log(user);

/* 2. Напишите программу, которая выводит в консоль рандомное/случайное число от 0 до 1 и округляет его до третьего знака после точки. Тип выводимых данных должен быть number. */

function printRandom() {
    let number = Math.random();
    console.log(number);
    console.log(+number.toFixed(3));
}

printRandom();


/* 3. Выведите на экран первую и последнюю буквы предложения, записанного в константу text (текст строки произвольный), в следующем формате: */
const text = "Lorem ipsum dolor sit amet";
console.log(`First: ${text[0]}
Last: ${text[text.length - 1]}`);