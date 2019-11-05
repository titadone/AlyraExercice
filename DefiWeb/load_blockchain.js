const Client = require('bitcoin-core');
const client = new Client({ network: 'regtest'});
/*
const client = new Client({ 
  network: 'regtest', 
  username: 'user', 
  password: 'bitcoin', 
  port: 18443 
});
*/
client.getBlockchainInfo().then((help) => console.log(help));