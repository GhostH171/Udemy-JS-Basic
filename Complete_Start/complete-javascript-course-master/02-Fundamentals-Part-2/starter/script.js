'use strict';

let license = false;
const passTest = true;

if (passTest) license = true;
if (license) console.log("I can drive")

//function

function marble(thanh, ha) {
    console.log(thanh, ha);
    const totalMarble = `Thanh has ${thanh} and Ha has ${ha} marbels`;
    return totalMarble;
}
const displayMarble = marble(10, 8);
//10,8 are arguments
console.log(displayMarble)
// function declaration
function calcMarble(hoang)
//hoang here is a parameter
{
    return 29 - hoang;
}

console.log(calcMarble(10))
calcMarble(10);
//10 here is an arguement

// another way to declare a function
// function expression
const calcMarble2 = function (hoang) {
    return 23 - hoang;
}
//arrow function
const calcMarble3 = vinh => 25 - vinh;
const marble3 = calcMarble3(50);
console.log(marble3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retire in ${retirement} years`
}

console.log(yearsUntilRetirement(1999, 'Hoang'));
console.log(yearsUntilRetirement(2005, 'Vinh'));
//function calls other function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(2, 3));
// Coding challenge 1

// Dolphins and Koalas compete 3 times, calc average scores of 3 competes winner has at least double the average score of the other team.
const calcAverage = (a, b, c) =>
    (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`)
    }
    else {
        console.log('No one winn')
    }
}
checkWinner(scoreDolphins, scoreKoalas)
checkWinner(182, 62)

// Array
const hoang = ['Hoang', 'Pham', 2080 - 1999, 'Dev']
console.log(hoang)

const calcAge = function (birthYear1) {
    return 2098 - birthYear1;
}
const years2 = [1990, 1987, 1009, 1999];
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

// array method :
// add elements:
const newYear2 = years2.push(1526);
console.log(years2);
console.log(newYear2);

// remove last element 
years2.pop();
years2.pop();
console.log(years2)

//remove first element
years2.shift();
console.log(years2)

// display the position of a value
console.log(years2.indexOf(1009))

// check whether a value in the array or not
years2.push(1985)
console.log(years2.includes(1987))
console.log(years2.includes(1585))
console.log(years2.includes('1987'))
if (years2.includes(1987)) {
    console.log('you was born in 1978')
}

// coding challenge 2 

const calcTip = function (bill) {

    if (bill > 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

console.log(calcTip(100))

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totalBill)

//object

const myInfor = {
    firstName: 'Hoang',
    lastName: 'Pham',
    born: 1999,
    job: 'dev',
    friend: ['DV Hoang', 'VT Huong', 'NV Giap'],
    hasDeiverLicense: true,

    currAge: function () {
        this.age4 = 2037 - this.born;
        return this.age4;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.currAge()} years old ${this.job} and he has ${this.hasDeiverLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(myInfor.currAge());
console.log(myInfor.age4);
console.log(myInfor.age4);
console.log(myInfor.age4);

console.log(myInfor.getSummary());


// console.log(myInfor)

// // dot notation and bracket notation
// console.log(myInfor.firstName);
// console.log(myInfor['lastName']);
// const nameKey = 'Name';
// console.log(myInfor['first' + nameKey]);
// console.log(myInfor['last' + nameKey]);

// //[put expression here]
// //dot.property

// //const chooseThis = prompt('What information do you want from me?');

// // if (myInfor[chooseThis]) {
// //     console.log(myInfor[chooseThis]);
// // } else {
// //     console.log('Wrong request! choose between firstName, lastName, age, job, friendjib')
// // }
// myInfor.nationality = 'VietNam';
// myInfor['city'] = 'Hai Phong'
// console.log(myInfor)

// console.log(`${myInfor.firstName} has ${myInfor.friend.length} friend and his best friend called ${myInfor.friend[0]}`);
// console.log(myInfor.currAge(1999));
// console.log(myInfor['currAge'](1999));

// coding challenge 3

const markMiller = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

const johnSmith = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};
markMiller.calcBMI();
console.log(markMiller.bmi)

johnSmith.calcBMI();
console.log(johnSmith.bmi)

if (markMiller.bmi > johnSmith.bmi) {
    console.log(`Mark's BMI(${markMiller.bmi})is higher than John's BMI (${johnSmith.bmi})`)
} else if (markMiller.bmi < johnSmith.bmi) {
    console.log(`Mark's BMI(${markMiller.bmi})is lower than John's BMI (${johnSmith.bmi})`)
} else {
    console.log(`Mark's BMI(${markMiller.bmi})is equal with John's BMI (${johnSmith.bmi})`)
}

const hoangInfor = [
    'hoang',
    23,
    'dev',
    1999,
    ['Dv Hoang', 'VT Huong', 'Nv Giap'],
    true
]

const type = [];
for (let i = 0; i < hoangInfor.length; i++) {
    // read from Mark array
    console.log(hoangInfor[i], typeof hoangInfor[i]);
    //filling types array
    type[i] = typeof hoangInfor[i];
    type.push(typeof hoangInfor[i]);
}
console.log(type)

const year3 = [1933, 2021, 1987, 2014];
const age5 = [];

for (let i = 0; i < year3.length; i++) {
    age5.push(2037 - year3[i]);
}
console.log(age5);

//continue
console.log('--Get String--')
for (let i = 0; i < hoangInfor.length; i++) {
    if (typeof hoangInfor[i] !== 'string') continue;
    console.log(hoangInfor[i], typeof hoangInfor[i]);
}

//break
console.log('Break with Number')
for (let i = 0; i < hoangInfor.length; i++) {
    if (typeof hoangInfor[i] === 'number') break;

    console.log(hoangInfor[i], typeof hoangInfor[i]);
}
// reverse loop
for (let i = hoangInfor.length; i >= 0; i--) {
    console.log(i, hoangInfor[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Start Excercise  ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`)
    }
}

// while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
}

//coding challenge 4
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

// First way
for (let i = 0; i < bills2.length; i++) {
    if (bills2[i] > 50 && bills[i] < 300) {
        tips2[i] = bills2[i] * 0.15;
        totals2[i] = tips2[i] + bills2[i];
    } else {
        tips2[i] = bills2[i] * 0.2;
        totals2[i] = tips2[i] + bills2[i];
    }
    console.log(`Tips = ${tips2[i]}, Bill = ${bills2[i]}, total bills = ${totals2[i]}`)
}

// Second way
const calcTip2 = function (bill3) {
    return bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
};
for (let i = 0; i < bills2.length; i++) {
    const tips3 = calcTip2(bills2[i]);
    tips2.push(tips3);
    totals2.push(tips3 + bills2[i]);
}
console.log(bills2, tips2, totals2);

// Bonus
const avgArr = [150, 36, 85, 2033, 67, 52, 10]
let sum = 0;
for (let i = 0; i < avgArr.length; i++) {
    sum += avgArr[i];
    console.log(sum)
}

avgArr.push(162);
const avgSum = sum / (avgArr.length + 1);
console.log(`Average of array : ${avgSum}`)

// better way
const calcAverage2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage2([2, 3, 7]))