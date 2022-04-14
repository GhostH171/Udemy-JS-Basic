'use strict';
// lession 129
// const flight = 'L234';
// const hoang = {
//   name: 'PK hoang',
//   passport: 142452,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH1233';
//   passenger.name = `Mr ` + passenger.name;

//   if (passenger.passport === 142452) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };
// checkIn(flight, hoang);
// console.log(flight);
// console.log(hoang);

// const flightNum = flight;
// const passenger = hoang;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(hoang);
// checkIn(flight, hoang);

// ---------------------------------------------------------------------
// //  Lesson 128
// const bookings = [];

// const creatBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// creatBooking('LH123', 6);
// creatBooking('LH1234', 2, 233);
// --------------------------------

// lesson 131

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const uperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order function
// const transformer = function (str, fn) {
//   // console.log(fn.prototype);
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is da best', uperFirstWord);

// transformer('Javascript is da best 2', oneWord);
// const high5 = function () {
//   console.log('High5');
// };
// document.body.addEventListener('click', high5);
// ['Hans', 'Samma', 'Toppo'].forEach(high5);

// ---------------------------------------------------------------------

// Lesson 132 Function return a function

// const greet = function (greeting) {
//   return function (concho) {
//     console.log(concho);
//     console.log(`${greeting} ${concho}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Hela 1');
// greeterHey('Doggo');

// const greet1 = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// const greeterHey1 = greet1('Hey');
// greeterHey1('Yasou');
// greeterHey1('Yo');

// ------------------------------------------------------------------------
// ========================================================================

// Lesson 133 Call and Apply methods

// const flight21 = {
//   airline: 'Jos',
//   code: 'Do',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//     // console.log(name.prototype);
//     this.bookings.push({ flight: `${this.code}${flightNum}`, name });
//   },
// };

// flight21.book(212, 'EUD');
// flight21.book(2323, 'LOL');

// const eurowings = {
//   airline: 'Eurowings',
//   code: 'EW',
//   bookings: [],
// };

// const book = flight21.book;
// book.call(eurowings, 23, 'Will');
// console.log(eurowings);
// // Apply method

// const flightData = [344, 'Smash'];
// book.apply(eurowings, flightData);

// // Bind method
// const bookF21 = book.bind(flight21);
// const bookEW = book.bind(eurowings);

// bookEW(23, 'Thommas');
// bookF21(234, 'How');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('BM Duc');

// // With evenlistener
// flight21.planes = 32;
// flight21.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // flight21.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', flight21.buyPlane.bind(flight21));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

//------------------------Coding Challenge-------------------------------

// const poll = {
//   question: 'What is your favorite programming language?',
//   option: ['0: Javascript', '1: Python', '2: C++', '3: Rust'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.option.join('\n')}\n(Write Option Number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll result are ${this.answers.join(' - ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [3, 4, 5] }, 'string');
// // ====================================== Closure ====================================

// // var words = 'hi';
// // function speak() {
// //   console.log(words);
// // }
// // speak(); // 'hi'
// // console.log(words); // 'hi'

// function speak() {
//   return function logIt() {
//     var words = 'hi';
//     console.log(words);
//   };
// }
// var sayHello = speak();
// console.log(sayHello());

// function speak2() {
//   var words2 = 'hi';
//   console.log(words2);
// }

// console.log(speak2);

// function name(n) {
//   return function (a) {
//     return `${n} likes ${a}`;
//   };
// }
// var j = name('John');
// var h = name('Hoang');
// console.log(j('dogs'));

// function f1() {
//   var N = 0; // N luon duoc khoi tao khoi ham f1 duoc thuc thi
//   console.log(N);
//   function f2() {
//     // Ham f2
//     N += 1; // cong don cho bien N
//     console.log('-->>', N);
//   }

//   return f2;
// }

// var result = f1();

// result(); // Chay lan 1
// result(); // Chay lan 2
// result(); // Chay lan 3

// let f;
// function g() {
//   var a = 50;
//   f = function () {
//     console.log(a * 2);
//   };
// }

// g();
// f();

// =================================== Coding challenge 2=====================================
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
