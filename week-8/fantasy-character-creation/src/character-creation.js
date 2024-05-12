"use strict";

// For promises:
const fs = require('fs').promises;
//file path to store characters
const CHARACTERS_FILE = `${__dirname}/characters.json`;

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    //retrieve existing characters
    const characters = await getCharacters();
    //add new character to list
    characters.push(character);
    //write characters back to file
    await fs.writeFile(CHARACTERS_FILE, JSON.stringify(characters));

  } catch (error) {
    //error if unable to create character
    throw new Error("Failed to create character");
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    //read character fromt the file
    const data = await fs.readFile(CHARACTERS_FILE);
    //parse JSON data
    return JSON.parse(data);
  } catch (error) {
    //return empty array if there is file error, or it doesn't exist
    return [];
  }
}


module.exports = { createCharacter, getCharacters };