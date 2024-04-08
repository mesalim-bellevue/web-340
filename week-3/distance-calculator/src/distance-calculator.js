function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  //values are based on approximate distance of planets from sun in AU
  const planetDistances = {
    "Mercury": 0.39,
    "Venus": 0.72,
    "Earth": 1,
    "Mars": 1.52,
    "Jupiter": 5.2,
    "Saturn": 9.58,
    "Uranus": 19.22,
    "Neptune": 30.05,
  };

  //if statement for distance and error
  if(!(planet1 in planetDistances) || !(planet2 in planetDistances)) {
    throw new Error("Invalid planet name(s)");
  }
  
  //result
  return Math.abs(planetDistances[planet1] - planetDistances[planet2]);
}

module.exports = calculateDistance;