let firstName = "Pham" //Variable name = value
//camelCase : firstNamePerson
let myFirstJob = "LQC"
console.log(myFirstJob)

// --------excercise Variables-----------

let myCountry = "VietNam"
let continent = "Asia"
let population = "93m"
console.log("My country is: " + myCountry + " continent: " + continent + " Population : " + population)

//primitive : nguyen thuy
// decimal : so thap phan
// Emphasize : Nhan manh

//boolean 
let jsIsFun = true
console.log(jsIsFun + " " + typeof (jsIsFun))

// mutate variable 
let age = 10;
age = 14;

// Assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x)
// comparison operator

const now = 2021
console.log(now - 1999 > now - 2018);

//Coding challenge1 
console.log("Coding challenge 1 ")

const markMass = 78;
const johnMass = 92;
const markTall = 1.69;
const johnTall = 1.95;
const markBmi = markMass / (markTall * markTall);
const johnBmi = johnMass / (johnTall * johnTall);
console.log("Mark's Bmi = " + markBmi, "John Bmi = " + johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI)
// if (markBmi > johnBmi) {
//     console.log("Mark'BMI > John's BMI")
// } else {
//     console.log("Mark'BMI < John's BMI")
// }

//Template string
const hoangName = `I'm ${firstName}, born in ${now}`;
console.log(hoangName)

console.log(`String with \n\multiple line`)

const currAge = 16;

if (age >= 18) {
    console.log('Old enough 🤦‍♀️')
} else {
    const isEnough = 18 - currAge;
    console.log(`You can take lience in the next ${isEnough} years`)
}

//type conversion : chuyển đổi

const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear), +18);

console.log(Number('Hoang'));
console.log(typeof NaN);

console.log(String(23), 23)

// type coercion: cưỡng chế

console.log('I am ' + 23 + ' years old')
// + convert number to string
console.log('10' - '5' - 3)
// -,*,/ convert string to number

// implicit : Ngầm
// explicit : rõ ràng
// Truthy values and falsy value

//variable money will be converted to boolean; money = 0 => falsy value => execute else
const money = 'hello';
//if there is truthy value => execute if
if (money) {
    console.log("Buy a pizza")
} else {
    console.log("Poor guy")
}

// coding challenge 3
const dophinsScore = 96 + 108 + 89;
const koalasScore = 109 + 95 + 106;
if (dophinsScore === koalasScore) {
    console.log("Draw")
} else if (dophinsScore > koalasScore) {
    console.log(`Team Dophins wins with score ${dophinsScore}`)
} else {
    console.log(`Team Koalas wins with score ${koalasScore}`)
}

const browser = 'goole';
switch (browser) {
    case 'goole':
        console.log('goole');
        break;
    case 'mozilla':
        console.log('mozzilla')
    default:
        console.log('NO browser')
}

//conditional (Ternary) operator
const ageWine = 19;
ageWine >= 18 ? console.log('Old enough to drink wine') : console.log(`You can drink wine in the next ${18 - ageWine} years`)

// another way

const drink1 = ageWine >= 18 ? 'Wine' : 'Water'; //expression
console.log(drink1);

console.log(`I like to drink ${ageWine >= 18 ? 'Wine' : 'Water'}`)

//Coding challenge 4

const bill = 10;
const tips = 50 <= bill <= 300 ? console.log(`Tips = ${bill * 0.15}$ and Bill = ${bill + bill * 0.15}$`) :
    console.log(`Tips = ${bill * 0.2}$ and Bill = ${bill + bill * 0.2}$`)