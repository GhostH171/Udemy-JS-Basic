// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("hello");

// an array to tempratures of one day, calculate temprature amplitude. Sometimes there might be a sensor error

const temprature = [3, -2, -6, -1, "error", 9, 13, 15, 17, 14, 9, 5];

//1. Understand the problem
// - what is temp amplitude ? A: difference bw highest and lowest temp
// - How to compute max and min tempratures?
// - What is error and what are we gonna do?

//2. Break up into sub-problems
//- How to ignore error?
//- Find max and min temp in array?
// - subtract min from max (amplitude) and return it?

temprature.sort();
temprature.pop();
console.log(temprature);
let amplitude = temprature[temprature.length - 1] - temprature[0];
console.log(amplitude);

// better way
const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude1 = calcTempAmplitude(temprature);
console.log(amplitude1);

//concat 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude2 = calcTempAmplitude([3, 5, 1], [6, 8, 2]);
console.log(amplitude2);

// Debugging
const measurementK = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree celcious:")),
  };
  console.log(measurement.value);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measurementK());
