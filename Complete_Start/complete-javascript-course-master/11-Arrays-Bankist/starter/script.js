'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movement_row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-3));
// console.log(arr.slice(1, -3));
// console.log(arr.slice(1, 2));
// console.log(arr.slice(-1));

// // console.log(arr.splice(-1));
// // console.log(arr);
// // arr = ['a', 'b', 'c', 'd', 'e'];
// // let arr2 = ['f', 'g', 'h', 'i', 'j'];

// let letter = arr.concat(arr2);
// console.log(...arr, ...arr2, letter);

// const arr = [22, 34, 5];
// console.log(arr.at(0), arr[0]);

// // get the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// ========================== Foreach method ===========================
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('ForEach method, It requires a callback function');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// console.log('ForEach Advanced');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // Map
// const currentcies = new Map([
//   ['USD', 'United States Dolar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound'],
// ]);

// // value: first paramester - current element of the array
// // key: index
// // map : entire array
// currentcies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// ========================= Coding challenge 1 ======================================

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// dogsJulia.splice(0, 1);
// const newDogsJulia = dogsJulia.splice(0, 2);

// console.log(newDogsJulia);

// const totalDogs = newDogsJulia.concat(dogsKate);
// console.log(totalDogs);
// function checkDogs() {
//   totalDogs.forEach(function (value, key, arr) {
//     if (value >= 3) {
//       console.log(`Dog number ${key} is an adult andit is ${value} years old`);
//     } else {
//       console.log(`Dog number ${key} is an puppy andit is ${value} years old`);
//     }
//   });
// }
// checkDogs();

// ============================ Coding Challenge 2 ===================================
const dogsJulia2 = [5, 2, 4, 1, 15, 8, 3];
const dogsKate2 = [16, 6, 10, 5, 6, 1, 4];
const totalDogs2 = dogsJulia2.concat(dogsKate2);

const calcsHumanAge = ages => {
  const humnaAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humnaAge.filter(age => age >= 18);
  const averageDogAge = adultDogs.reduce((acc, cur) => {
    return acc + cur / adultDogs.length;
  }, 0);
  console.log('human age', humnaAge);
  console.log('Adult dogs', adultDogs);
  console.log("Average dog's Age", averageDogAge);
};
calcsHumanAge(totalDogs2);

// ============================ Map method ============================

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUsdfor = [];
// for (const mov of movements) movementsUsdfor.push(mov * eurToUsd);

// const movementsDescriptions = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// ============================ Filter Method ===============================
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// ============================= Reduce Method ==============================

// // acc : accumulator - keep accumulating value that we want to return (SNOWBALL)
// // cur: current element of the array
// // i : index
// // arr: the entire array

// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0);

// // Maximum value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// ===================== Chaining method ==========================

const eurToUsd = 1.1;

// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
