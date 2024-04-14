/**
 * Author:          Meher Salim
 * Date:            04/11/2024
 * File Name:       superhero.js
 * Description:     Create a SuperheroEmitter class module that extends the EventEmitter class from Node.js.
 */

const EventEmitter = require("events");

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone
//create SuperheroEmitter class module
class SuperheroEmitter extends EventEmitter {
  //performAction
  performAction(action) {
    this.emit("action", action);
  }
  //encounterDanger
  encounterDanger(danger) {
    this.emit("danger", danger);
  }
  //helpSomeone
  helpSomeone(person) {
    this.emit("help", person);
  }
}

module.exports = SuperheroEmitter;