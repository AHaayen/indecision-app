'use strict';

// // ES5 arrow function
// function square (x) {
//     return x * x;
// };

// console.log(square(3));

// // ES6 arrow function
// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

var getFirstName = function getFirstName(firstName) {
    return firstName.split(' ')[0];
};

var getSecondName = function getSecondName(firstName) {
    return firstName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
console.log(getSecondName('Andres Haayen'));
