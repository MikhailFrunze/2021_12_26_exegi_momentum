// ЗАДАЧА 1
// Дан массив с числами.
let arr = [17, -26, 3, -24, 79, -5, 18];
// 1.Создайте новый массив, состоящий только из отрицательных чисел. Выведите результат в консоль.

let new_arr = arr.filter(el => el < 0);
console.log(new_arr);

// 2. Создайте новый массив, состоящий только из четных чисел. Выведите результат в консоль.
let new_arr_1 = arr.filter(el => el % 2 === 0);
console.log(new_arr_1);

// 3. Напишите программу, высчитывающую количество отрицательных чисел в этом массиве. Выведите результат в консоль.
let negativeNumbers = 0;
arr.forEach(el => {
    if (el < 0) {
        negativeNumbers++;
    }
});

console.log(negativeNumbers);

//ЗАДАЧА 2
//Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
let arr_2 = [1, -6, 4, 0, 9, -5, 16];

let new_arr_2 = arr_2.filter(el => el >= 0);

console.log(new_arr_2);

let result = new_arr_2.map(el => {
    return Math.sqrt(el);
});

console.log(result);




