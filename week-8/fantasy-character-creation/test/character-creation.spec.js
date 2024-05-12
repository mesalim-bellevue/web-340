"use strict";
// For promises:
const fs = require('fs').promises;
//importing functions to test
const { createCharacter, getCharacters } = require('../src/character-creation');

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    //restore mock for writeFile
    jest.spyOn(fs, 'writeFile').mockRestore();
    //restore mock for readFiles and initialize empty array
    jest.spyOn(fs, 'readFile').mockRestore(JSON.stringify([]));
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  afterEach(() => {
    //clean up mock after test
    jest.clearAllMocks();
  })

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test("createCharacter writes a new character to the file", async () => {
    const character = { 
      class: "Warrior",
      gender: "Male",
      funFact: "Animal whisperer",
    };
    //call function to create a character
    await createCharacter(character);
    //get characters from file
    const characters = await getCharacters();
    //asser created character in file
    expect(characters[0]).toEqual(character);
  });

  // 2. Test that getCharacters reads characters from the file
  test("getCharacters read characters from the file", async () => {
    //get characters from file
    const characters = await getCharacters();
    //assert the result in array
    expect(Array.isArray(characters)).toBe(true);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("createCharacter handles errors when writing to the file", async () => {
    //mock the writeFile function
    const mockWriteFile = jest.spyOn(fs, 'writeFile');
    //simulat a failure in writingto file
    mockWriteFile.mockRejectedValueOnce(new Error('Failed to write file'));
    //expec an error to be thrown when creating character
    await expect(createCharacter({})).rejects.toThrow("Failed to create character");
    //restore mock for future tests
    mockWriteFile.mockRestore();
  });

});