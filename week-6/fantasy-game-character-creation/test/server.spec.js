const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here
// Test for the POST /createCharacter route
describe('POST /createCharacter', () => {
  it('should create a new character', (done) => {
    // Simulate a POST request to create a character
    const req = http.request({
      method: 'POST',
      port: server.address().port,
      path: '/createCharacter?class=Warrior&gender=Male&funFact=Loves%20to%20wield%20a%20sword',
    }, (res) => {
      // Check if the response status code is 200
      expect(res.statusCode).toBe(200);
      // Parse response body and check if it matches the expected message
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        expect(JSON.parse(responseBody)).toEqual({ message: 'Character created successfully' });
        done();
      });
    });
    req.end();
  });
});

// Test for the POST /confirmCharacterCreation route
describe('POST /confirmCharacterCreation', () => {
  it('should confirm character creation', (done) => {
    // Simulate a POST request to confirm character creation
    const req = http.request({
      method: 'POST',
      port: server.address().port,
      path: '/confirmCharacterCreation',
    }, (res) => {
      // Check if the response status code is 200
      expect(res.statusCode).toBe(200);
      // Parse response body and check if it matches the expected message
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        expect(JSON.parse(responseBody)).toEqual({ message: 'Character creation confirmed' });
        done();
      });
    });
    req.end();
  });
});

// Test for the GET /viewCharacter route
describe('GET /viewCharacter', () => {
  it('should return the character', (done) => {
    // Simulate a POST request to create a character first
    const createReq = http.request({
      method: 'POST',
      port: server.address().port,
      path: '/createCharacter?class=Mage&gender=Female&funFact=Master%20of%20arcane%20arts',
    }, (createRes) => {
      // After character creation, simulate a GET request to view the character
      const viewReq = http.request({
        method: 'GET',
        port: server.address().port,
        path: '/viewCharacter?index=0', // Assuming character index is 0
      }, (viewRes) => {
        // Check if the response status code is 200
        expect(viewRes.statusCode).toBe(200);
        // Parse response body and check if it matches the expected character
        let responseBody = '';
        viewRes.on('data', (chunk) => {
          responseBody += chunk;
        });
        viewRes.on('end', () => {
          expect(JSON.parse(responseBody)).toEqual({
            class: 'Mage',
            gender: 'Female',
            funFact: 'Master of arcane arts'
          });
          done();
        });
      });
      viewReq.end();
    });
    createReq.end();
  });

  it('should return error for invalid character index', (done) => {
    // Simulate a GET request to view a character with an invalid index
    const req = http.request({
      method: 'GET',
      port: server.address().port,
      path: '/viewCharacter?index=-1', // Assuming an invalid index
    }, (res) => {
      // Check if the response status code is 400
      expect(res.statusCode).toBe(400);
      // Parse response body and check if it matches the expected error message
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        expect(JSON.parse(responseBody)).toEqual({ error: 'Invalid character index' });
        done();
      });
    });
    req.end();
  });
});
