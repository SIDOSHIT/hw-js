// 1
// let arr = [1, 5, 4, 10, 0, 3];

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] >= 10) break;
//         console.log(arr[index]);
// }


// 2
// let arr = [1, 5, 4, 10, 0, 3];

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === 4) break;
//         console.log(index);
// }


// 3
// let arr = [1, 3, 5, 10, 20];

// arr = arr.join(' ');
// console.log(arr)


// 4
// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 0; j < 3; j++) {
//         arr[i].push(1);
//     }
// }

// console.log(arr);


// 5
// let arr = [1, 1, 1];

// arr.push(2, 2, 2);

// console.log(arr)


// 6
// let arr = [9, 8, 7, 'a', 6, 5];

// arr = arr.sort();
// arr.pop();

// console.log(arr);


// 7
// let arr = [9, 8, 7, 6, 5];

// let userAnswer = Number(prompt('Введите число от 1 до 10:'));

// let search = arr.includes(userAnswer);

// console.log(search);




// 8
// let str = 'abcdef';

// str = str.split('');
// str.reverse();

// str = str.join('');
// console.log(str);


// 9
// let arr = [
//     [1, 2, 3,],
//     [4, 5, 6]
// ];
// arr = arr[0] + ","+ arr[1];

// arr = arr.split(',');
// console.log(arr);


// 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let item of arr) {
//     item = item + 1;
//     console.log(item)
// }


// 11
// let arr = [];
// let Even = [];

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }


// for (let i = 0; i <= 9; i++) {
//     arr.push(getRandomInt(1, 10));

// }

// for (var i = 0; i < arr.length; i++) {
//     if ((arr[i] % 2) === 0) {
//         Even.push(arr[i]);
//     }
// }
// console.log(arr);
// console.log(Even);




// 12
// let arr = [];

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }

// for (let i = 0; i < 6; i++) {
//     arr.push(getRandomInt(1, 10));

// }

// const getAverage = (arr) => {
//     const sum = arr.reduce((acc, arr) => acc + arr, 0);
//     const length = arr.length;
//     return sum / length;
// };


// console.log(getAverage(arr));


// console.log(arr);
