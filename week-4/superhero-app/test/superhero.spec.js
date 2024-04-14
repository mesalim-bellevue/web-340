/**
 * Author:          Meher Salim
 * Date:            04/11/2024
 * File Name:       superhero.spec.js
 * Description:     Design and implement unit tests
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles

//test for performAction
function testPerformAction() {
  try { //register event listener for 'action'
    superhero.on("action", (action) => {
      assert.strictEqual(action, "fly");
      //add pass statement
      console.log("Test for performAction passed.");
    });
    superhero.performAction("fly");
  } catch (error) {
    //add fail statement
    console.error(`Test for performAction failed: ${error.message}`);
  }
}

//test for encounterDanger
function testEncounterDanger() {
  try { //register event listener for 'danger'
    superhero.on("danger", (danger) => {
      assert.strictEqual(danger, "fire");
      //add pass statement
      console.log("Test for encounterDanger passed.");
    });
    superhero.encounterDanger("fire");
  } catch (error) {
    //add fail statement
    console.error(`Test for encounterDanger failed: ${error.message}`);
  }
}

//test for helpSomeone
function testHelpSomeone() {
  try { //register event listener for 'help'
    superhero.on("help", (person) => {
      assert.strictEqual(person, "MaryJane");
      //add pass statement
      console.log("Test for helpSomeone passed.");
    });
    superhero.helpSomeone("MaryJane");
  } catch (error) {
    //add fail statement
    console.error(`Test for helpSomeone failed: ${error.message}`);
  }
}

//call test function
testPerformAction();
testEncounterDanger();
testHelpSomeone();