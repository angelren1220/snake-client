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
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    // console.log("Move: up");
    connections.write("Move: up");
  }
  if (key === 'a') {
    // console.log("Move: left");
    connections.write("Move: left");
  }
  if (key === 's') {
    // console.log("Move: down");
    connections.write("Move: down");
  }
  if (key === 'd') {
    // console.log("Move: right");
    connections.write("Move: right");
  }
};


module.exports = {setupInput};