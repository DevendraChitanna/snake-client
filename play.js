const net = require("net");
const connect = require('./client')



console.log("Connecting ...");
connect('data', (data) => {
  console.log(data)
});