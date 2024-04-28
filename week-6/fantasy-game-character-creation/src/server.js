const http = require('http');
const url = require('url');

// TODO: Implement your server here
let characters = [];
const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (req.method === 'POST') {
    if (pathname === '/createCharacter') {
      // Route for creating a character
      const { class: characterClass, gender, funFact } = query;
      // Create a new character object
      const newCharacter = {
        class: characterClass,
        gender: gender,
        funFact: funFact
      };
      // Add the character to the characters array
      characters.push(newCharacter);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character created successfully' }));
    } else if (pathname === '/confirmCharacterCreation') {
      // Route for confirming character creation
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character creation confirmed' }));
    }
  } else if (req.method === 'GET' && pathname === '/viewCharacter') {
    // Route for viewing the character
    const characterIndex = parseInt(query.index);
    if (isNaN(characterIndex) || characterIndex < 0 || characterIndex >= characters.length) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid character index' }));
    } else {
      const character = characters[characterIndex];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});


server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;