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
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('name', () => {    
    conn.write("Name: ALR");
  });

  return conn;
};

module.exports = {connect};