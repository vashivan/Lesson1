//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// const name = 'Ivan';
// const city = 'Ivan';
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // 
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// // вивести в консоль тип

// console.log(Number(a));
// console.log(parseInt(b));
// console.log(parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// const result = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(result);


//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// const numbers = [20, 10, 50, 40];
// console.log(Math.max(...numbers));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// const max = 4;
// const min = 2;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// const text = 'message';

// console.log(text.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let object = {};

// object.name = 'Ivan';
// object.age = 27;
// object.city = 'Ningbo';
// delete object.city;
// object['like flowers'] = true;

// console.log(object);

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }
