// ЗАДАЧА 1
// Реализуйте класс Car (Машина), который будет иметь следующие свойства:
// name (марка), model (модель), country (страна изготовитель), volume (объем двигателя)
// Создайте экземпляр этого класса
// Выведете в консоль все свойства созданного класса

class Car {
    constructor(name, model, country, volume){
        this.name = name;
        this.model = model;
        this.country = country;
        this.volume = volume;
    }
}

let car_1 = new Car('Opel', 'Corsa', 'Germany', 1.2);
let car_2 = new Car('Mercedes-Benz', 'S-Class', 'Germany', 3.5);
let car_3 = new Car('Toyota', 'Auris', 'Japan', 1.8);

let str = JSON.stringify(Car);

console.log(Car);

// ЗАДАЧА 2
// Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
// Создайте 3 экземпляра этого класса с разными свойствами
// Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса

class Country {
    constructor(name, capital, population, climate){
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climate = climate;
    }
}

let md = new Country('Moldova', 'Chisinau', 2618000, 'moderately continental');
let us = new Country('USA', 'Washington D.C.', 329000000,  'humid continental, humid subtropical, semi-arid, alpine, arid, oceanic, subarctic, polar, tropical');
let uk = new Country('UK', 'London', 67000000, 'temperate climate');

console.log(md.name);
console.log(us.capital);
console.log(uk.population);