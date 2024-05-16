// filename: game-characters.js
// author: Meher Salim
// date: 05/13/2024

const { spawn } = require("child_process");
// define path by importing 'path' module to handle file path
const path = require("path");

class GameCharacters {
  constructor(scriptFileName = "game-characters-data.js") {
    // set script file path based on provided filename
    this.scriptPath = path.join(__dirname, scriptFileName);
  }

  getCharacters(callback) {
    // execute script as a child process
    const child = spawn("node", [this.scriptPath]);

    let data = "";
    let error = "";

    // capture data from stdout
    child.stdout.on("data", (chunk) => {
      data += chunk;
    })

    // capture errors from stderr
    child.stderr.on("data", (chunk) => {
      error += chunk;
    });

    // handle script execution completion
    child.on("close", (code) => {
      if (code === 0) {
        try { // if script executed successfully, parse data and invoke callback
          const jsonData = JSON.parse(data);
          callback(jsonData, null);
        } catch (e) {
          callback(null, new Error("Invalid JSON data: " + e.message));
        }
       } else { // if script encountered an error, invoke the callback with error
        callback(null, new Error(error || "Unknown error"));
      }
    });
  }
}

module.exports = { GameCharacters };