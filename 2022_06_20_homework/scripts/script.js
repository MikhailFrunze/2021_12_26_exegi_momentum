let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

//1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.

arr.unshift(67);
arr.push(56);

console.log(arr);

//2. Сформируйте массив из чисел меньше 100. Предложите два варианта решения (цикл for и метод .forEach). Выведите в консоль результат.

let new_arr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 100) {
        new_arr.push(arr[i]);
    }

}

console.log(new_arr);

let new_arr_2 = [];

arr.forEach(el => {
    if (el < 100) {
        new_arr_2.push(el);
    }
}
);

console.log(new_arr_2);

//3. Сформируйте массив, состоящий только из чисел, кончающихся на 7. Предложите два варианта решения (цикл for и метод .foreach).
let new_arr_3 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 7) {
        new_arr_3.push(arr[i]);
    }
}

console.log(new_arr_3);

let new_arr_4 = [];

arr.forEach(el => {
    if (el % 10 === 7) {
        new_arr_4.push(el);
    }
});

console.log(new_arr_4);

//4. Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'

let new_arr_5 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 100) {
        new_arr_5.push('>100');
    } else {
        new_arr_5.push('<100');
    }
}

console.log(new_arr_5);

let new_arr_6 = [];

arr.forEach(el => {
    if (el >= 100) {
        new_arr_6.push('>100');
    } else {
        new_arr_6.push('<100');
    }
});

console.log(new_arr_6);