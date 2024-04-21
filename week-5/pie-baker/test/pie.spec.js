/**
 * Author:          Meher Salim
 * Date:            04/18/2024
 * File Name:       pie.spec.js
 * Description:     write 3 unit tests
                    1. Testing if a pie is successfully v\baked with all essential ingredients.
                    2. Testing if a pie bakeing fails due to a missing essential ingredient.
                    3. Testing if the function logs a warning message and exits when an essential ingredient is missing.
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe("bakePie", () => {
// Testing if a pie is successfully v\baked with all essential ingredients.
  test("should be a successful test with all essential ingredients", () => {
    const pieType = "mango";
    const ingredients = ["flour", "sugar", "butter", "mango"];
    expect (bakePie(pieType, ingredients)).toBe("Pie successfully baked!");
  });

//Testing if function works with mulitple types of pies.
  test("should handle other types of pies", () => {
    const pieType = "peach";
    const ingredients = ["flour", "sugar", "butter", "peach"];
    expect(bakePie(pieType, ingredients)).toBe("Pie successfully baked!");
  });
  
//Testing if the function logs a warning message and exits when an essential ingredient is missing.
  test("should exit process with code 1 and show warning message when missing essetntial ingredient", () => {
    const pieType = "raspberry;"
    const ingredients = ["flour", "sugar", "raspberry"];

    //mocking console.error and process.exit
    const exitMock = jest.spyOn(process, "exit").mockImplementation(() => {});
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation(() => {});

    bakePie(pieType, ingredients);
    expect(exitMock).toHaveBeenCalledWith(1);
    expect(consoleErrorMock).toHaveBeenCalled();

    //restore mock functions
    exitMock.mockRestore();
    consoleErrorMock.mockRestore();
  });

});
