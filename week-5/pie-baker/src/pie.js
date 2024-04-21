/**
 * Author:        Meher Salim
 * Date:          04/18/2024
 * File Name:     pie.js
 * Description:   write simple function to for unit tests.
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];

  //use for loop to check for all essential ingredients are there
  for (const ingredient of essentialIngredients) {
    if (!ingredients.includes(ingredient)) {
      //warning message if essential ingredient is missing
      console.error(`Warning: Missing essential ingredient ${ingredient}`);

      //exit process with code 1
      process.exit(1);
    }
  }

  //if all essential ingredients are there, show success message
  return "Pie successfully baked!";
}

module.exports = { bakePie };