/**
 * Author:            Meher Salim
 * Date:              04/11/2024
 * File Name:         index.js
 * Description:       Create CLI program
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  switch (command) {
    case "help":
      superhero.helpSomeone(arg);
      console.log(`Superhero helps: ${args}`);
      break;
    case "action":
      superhero.performAction(arg);
      console.log(`Superhero performs action: ${args}`);
      break;
    case "danger":
      superhero.encounterDanger(arg);
      console.log(`Superhero encounters danger: ${args}`);
      break;

    default:
      console.log("Invalid command. Please use 'action', 'danger', or 'help'.");
  }
});

console.log(`Enter a command: 'action', 'danger', or 'help', followed by a space and the argument.`);