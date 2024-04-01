/**
 * Author: Meher Salim
 * Date: 03/29/2024
 * File Name: index.js
 * Description: Demonstrate the functionality of your modules.
*/

// TODO: Import your module using require
const recipes = require("./recipes");

// TODO: Implement your CLI program here
console.log("Welcome to the Recipe Application!");

console.log(recipes.createRecipe(["flour", "sugar", "eggs"]));
console.log(recipes.setTimer(15));
console.log(recipes.quit());
