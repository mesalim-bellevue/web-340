/**
 * Author: Meher Salim
 * Date: 03/23/2024
 * File Name: weight-converter.js
 * Description: Script that converts pounds to kilograms.
*/

"use strict";

// TODO: Implement the weight conversion logic here

//check for argument
if (process.argv.length !== 3) {
  console.error('Usage: node weight-converter <pounds>');
  process.exit(1);
}

//get weight in pounds
const pounds = parseFloat(process.argv[2]);

//check input if it is a valid number
if (isNaN(pounds)) {
  console.error('Input must be a number.');
  process.exit(1);
}

//convert lbs to kgs
const kilograms = pounds * 0.453592;

//round converted weight
const roundedKilograms = Math.round(kilograms * 100) / 100;

//print converted weight
console.log(roundedKilograms);