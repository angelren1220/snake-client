const net = require('net');

// establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',// ip address
    port: 50541// port number
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (serverData) => {
    console.log(serverData);
  });

  return conn;
};

console.log("Connecting ...");
connect();