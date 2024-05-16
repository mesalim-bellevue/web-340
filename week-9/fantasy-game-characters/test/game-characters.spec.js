// filename: game-characters.spec.js
// name: Meher Salim
// date: 05/13/2024
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // test that getCharacters method returns the expected data
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class: "Fae", gender: "Male", funFact: "Controls air" },
        { class: "Fae", gender: "Female", funFact: "Controls fire" },
        { class: "Mage", gender: "Female", funFact: "Manipulates souls" },
        { class: "Human", gender: "Male", funFact: "Immune to supernatural powers" },
        { class: "Dhampir", gender: "Female", funFact: "Can sense the dead" },
        { class: "Dhampir", gender: "Male", funFact: "Was once a Moroi" }
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // test that error is handled when script file is not found
    const gameCharactersNotFound = new GameCharacters("nonexistent-script.js");
    gameCharactersNotFound.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // test that error is handled when script execution fails
    const gameCharactersFailing = new GameCharacters("failing-script.js");
    gameCharactersFailing.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).toBeDefined();
      done();
    });
  });
});