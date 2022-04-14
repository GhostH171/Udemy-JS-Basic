'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating new variable with same name as outer scope's variable
//       const firstName = 'Amie';
//       // reassign outer scope's variable
//       output = 'New output';
//       const str = `You are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(job);
// console.log(year);

// var me = 'Hoang';
// let job = 'teacher';
// const year = 1999;

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// // var created a property in the window object
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
console.log(this);
// this represents for window object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
  // this is not define in func scope -->  undefine because this is in scope of a regular function
};

calcAge(1988);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
  // arrow function dont have 'this' keyword and 'this' here points to global scope -> window object
};
calcAgeArrow(1999);

const hoang = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    // 'this' represent for obj hoang
  },
};
hoang.calcAge();

const duyen = {
  year: 2001,
};

duyen.calcAge = hoang.calcAge;
duyen.calcAge();

const number = [1, 2, 3, 4];
const newNumbers = [...number, 32];
console.log(newNumbers);
