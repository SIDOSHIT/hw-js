// 1

// let str = 'Привет';

// str = str.toUpperCase();
// console.log(str)


// 2

// function searchStart(arr, str) {


//     const products = arr;
//     const search = str;
//     let result = [];

//     products.forEach((product) => {
//         if (product.toLowerCase().includes(search.toLowerCase())) {
//             result.push(product);
//             console.log(result);
//         }
//     });
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// 3

// let numb = 32.58884;

// console.log(Math.ceil(numb))
// console.log(Math.floor(numb))
// console.log(Math.round(numb))


// 4

// let numb = [52, 53, 49, 77, 21, 32];

// let minNumb = Math.min(...numb);
// let maxNumb = Math.max(...numb);

// console.log(minNumb);
// console.log(maxNumb);


// 5

// function randomNumb(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(randomNumb(10));


// 6

// function getRandomArrNumbers(numb) {
//     let arr = [];
//     for (let i = 0; i < Math.floor(numb / 2); ++i) {
//         arr.push(Math.round(Math.random() * numb));
//     }

//     return arr;

// }

// console.log(getRandomArrNumbers(12));


// 7

// function numb(numb1, numb2) {
//     return Math.round(Math.random() * (numb2 - numb1) + numb1);
// }


// console.log(numb(20, 100))


// 8

// let currentDate = new Date();

// console.log(currentDate)

// 9
// let currentDate = new Date();
// let days = 73 * 24 * 60 * 60 * 1000;
// let searchDate = currentDate - days;
// let daysAgo = new Date(searchDate);
// console.log(daysAgo);


// 10

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// let fullDate = "Дата: " + myDate.getDate() +
//     " " + months[myDate.getMonth()] +
//     " " + myDate.getFullYear() +
//     " - это " + days[myDate.getDay()];

// let fullTime = "Время: " + myDate.getHours() +
//     ":" + myDate.getMinutes() +
//     ":" + myDate.getSeconds();

// console.log(fullDate);
// console.log(fullTime);


// 11 Работа с макетом
// https://github.com/SIDOSHIT/2-nd_course-hw/pull/8