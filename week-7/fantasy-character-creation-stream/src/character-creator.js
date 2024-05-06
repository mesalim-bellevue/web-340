const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.queue = [];
   }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data = chunk.toString().trim();
    if (!data) {
      callback(new Error('Invalid data'));
      return;
    }

    this.queue.push(data);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if (this.queue.lenfth) {
      this.push(this.queue.shift() + '\n');
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;