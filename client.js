const net = require('net');
const {IP, PORT} = require('./constants');
const {PLAYER_NAME, WELCOME_MSG} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP, // ip address
    port: PORT // port number
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (serverData) => {
    console.log(serverData);
  });
  
  conn.on('connect', () => {
    console.log(WELCOME_MSG);
    conn.write(PLAYER_NAME);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);
  });

  return conn;
};

module.exports = {connect};