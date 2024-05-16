// filename: game-characters-data.js
// author: Meher Salim
// date: 05/13/2024

"use strict";

const characters = [
    // define array of game characters
    { class: "Fae", gender: "Male", funFact: "Controls air" },
    { class: "Fae", gender: "Female", funFact: "Controls fire" },
    { class: "Mage", gender: "Female", funFact: "Manipulates souls" },
    { class: "Human", gender: "Male", funFact: "Immune to supernatural powers" },
    { class: "Dhampir", gender: "Female", funFact: "Can sense the dead" },
    { class: "Dhampir", gender: "Male", funFact: "Was once a Moroi" }
];

console.log(JSON.stringify(characters));