1
// function mult(arr) {
//     return arr.reduce((acc, curr) => acc * curr, 1);
// }


// function sum(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }


// function getResult(arr, callback) {
//     return callback(arr);
// }


// console.log(getResult([3, 4, 1, 9], mult));
// console.log(getResult([3, 4, 1, 9], sum));



// 2
// function compareUser(a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
// }

// function sort(arr, callback) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             const condition = compareFunction
//             compareFunction(arr[i], arr[j]) > 0
//             arr[i].toString() > arr[j].toString();
//             if (condition) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return callback(arr);
// }


// const users = [
//     { name: 'Jon', age: 22 },
//     { name: 'Richard', age: 18 },
//     { name: 'Anton', age: 32 },
//     { name: 'Lida', age: 23 },
//     { name: 'Bob', age: 44 }
// ];


// users.sort(compareUser);
// console.log(users);


// 3
// const arr = [1, '4', false, 9, 'two'];
// const arr = [1, '4', 9, 'two'];


// const reversArr = (arr) => {
//     return arr.reverse();
// }

// const toNumberArr = (arr) => {

//     let result = arr.map((el) => +el).filter(item => item = item === item);
//     return result;
// }

// const each = (arr, callback) => {
//     return callback(arr);
// }

// console.log(toNumberArr(arr));
// console.log(each(arr, reversArr));



// 4
// const timer = (num) => {
//     let interval = setInterval(() => {
//         let time = new Date();
//         console.log(time)
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval)
//         console.log(`Прошло ${num} секунды`)
//     }, 1000 * `${num}`)
// }

// timer(10)


// 5
function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps();
talk();