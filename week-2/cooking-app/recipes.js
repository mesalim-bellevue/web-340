/**
 * Author: Meher Salim
 * Date: 03/29/2024
 * File Name: recipes.js
 * Description: Write a simple recipe application using Node.js CommonJS module system.
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return `Timer set for ${minutes} minutes.`;
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Program exited.";
}

// TODO: Export the functions
module.exports = {createRecipe, setTimer, quit};