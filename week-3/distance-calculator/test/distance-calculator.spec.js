const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

//test1 - Jupiter to Uranus
function testJupiterToUranus() {
  try {
    const distance = calculateDistance('Jupiter', 'Uranus');
    //expected distance
    assert.strictEqual(distance, 14.02);
    console.log("Passed testJupiterToUranus");
    return true;
  } catch (error) {
    console.error(`Failed testJupiterToUranus: ${error.message}`);
    return false;
  }
}

//test2 - Earth to Mars
function testEarthToMars() {
  try {
    const distance = calculateDistance('Earth', 'Mars');
    //
    assert.strictEqual(distance, 0.52);
    console.log("Passed test EarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

//test3 - Invalid Planet
function testInvalidPlanet() {
  try {
    calculateDistance('Earth', 'Pluto');
    console.error("Failed testInvalidPlanet: Expected an error for invalid planet");
    return false;
  } catch (error) {
    console.log("Passed testInvalidPlanet");
    return true;
  }
}

// Call your test functions here
testJupiterToUranus();
testEarthToMars();
testInvalidPlanet();