const {EXIT, MOVES, MSGS} = require('./constants');
let connections;

const setupInput = (conn) => {
  connections = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === EXIT) {
    process.exit();
  }
  for (const move in MOVES) {
    if (key === move) {
      connections.write(MOVES[move]);
    }
  }
  for (const msg in MSGS) {
    if (key === msg) {
      connections.write(MSGS[msg]);
    }
  }
};

module.exports = {setupInput};