const bitcore = require('bitcore-lib')
const tBTC = bitcore.Networks.testnet
const BTC = bitcore.Networks.livenet

module.exports = {
  log: prefixLog,
  hexToAscii: hexToAscii,
  getKeyByValue: getKeyByValue,
  createBTCKey: createBTCKey,
  getBTCAddr: getBTCAddr,
};

module.exports.DBG = true



/* Prints log with BM prefix */
function prefixLog(prefix, msg){
  return console.log('['+prefix+'] '+msg);
}

/* Convert hex string to ASCII */
function hexToAscii (str1){
  var hex  = str1.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2)
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

  return str;
}

/* TEMP */
function randHex(length) {
  var chars = '0123456789abcdef';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

  return result;
}

/* Return the key of a value in a dictionary */
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

/*__________ BITCOIN __________*/

/* Returns the address for the key */
function getBTCAddr(privKey, BTCnet){
  var pk = new bitcore.PrivateKey(privKey)
  return pk.toAddress(BTCnet).toString()
}

/* Create new Bitcoin address */
function createBTCKey(){
  return new bitcore.PrivateKey().toWIF();
}
