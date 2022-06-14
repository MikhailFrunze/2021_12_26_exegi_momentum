//1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль. Запишите два варианта синтаксиса (function declaration и arrow 
//function).

function getStringLength(string) {
    return `The length of the string is ${string.length}`;
}

let getStringLength2 = string => `The length of the string is ${string.length}`;

//2.Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. Запишите два 
//варианта синтаксиса (function declaration и arrow function).

function getExponentiation(base, exponent = 2) {
    return base ** exponent;
}

let getExponentiation2 = (base, exponent = 2) => {
    return base ** exponent;
}

//3. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор 
//и Math.max()).

let getBiggerNum = (num1, num2) => {
    return Math.max(num1, num2);
}


//4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.

let printSortedNumbers = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            console.log(num1 + ", " + num2 + ", " + num3);
        }
        else {
            console.log(num1 + ", " + num3 + ", " + num2);
        }
    }
    else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            console.log(num2 + ", " + num1 + ", " + num3);
        }
        else {
            console.log(num2 + ", " + num3 + ", " + num1);
        }
    }
    else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            console.log(num3 + ", " + num1 + ", " + num2);
        }
        else {
            console.log(num3 + ", " + num2 + ", " + num1);
        }
    }
}

