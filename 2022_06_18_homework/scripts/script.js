//Напишите функцию с циклом for, которая выводит числа в консоль от 100 до 0 с шагом 10.

let getNumHundredToZero = () => {
    for (let i = 100; i >= 0; i -= 10) {
        console.log(i);

    }
}

getNumHundredToZero();


//Напишите функцию с циклом for, которая выводит числа в консоль от 25 до 66 c шагом 3.

let getNumStepThree = () => {
    for (let i = 25; i <= 66; i += 3) {
        console.log(i);
    }
    console.log(66);
}

getNumStepThree();


//Напишите функцию с циклом for, которая перемножает числа от 3 до 6. Выведите результат в консоль.

let multiplyThreeToSix = () => {
    let result = 1;
    for (let i = 3; i <= 6; i++) {
        result *= i;
    }
    return result;
}

console.log(multiplyThreeToSix());


//Задана переменная n. Напишите функцию, которая с помощью цикла for считает сумму чисел от 1 до n и выводит в консоль.

let printSum = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(printSum(5));

//Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

let printChar = string => {
    for (let i = 0; i <= string.length - 1; i++)
        console.log(string[i]);
}

printChar("Mihail");

//Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 и 5. Выведите сумму в консоль.

let printSumDivByThreeAndFive = () => {
    let res = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += i;
            //console.log(i); - this way I can test if the function executes the condition correctly
        };
    }
    return res;
}

console.log(printSumDivByThreeAndFive());