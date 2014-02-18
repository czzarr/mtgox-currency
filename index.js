var bignum = require('bignum')

var btcMultiple = 100000000 //1e8
var btcSuffix = '\u00a0BTC'
var usdCurrency = 'USD'
var usdMultiple = 100000  // 1e5
var usdPrefix = '$'

var currency = {};

// converts mtgox bitcoin integer in float string
currency.btcBignum2FloatString = function (value_bignum) {
  return (value_bignum.toNumber() / btcMultiple).toFixed(8);
}

// converts mtgox bitcoin integer in display string
currency.btcBignum2Display = function (value_bignum) {
  return (value_bignum.toNumber() / btcMultiple).toFixed(8) + btcSuffix;
}

// converts mtgox bitcoin integer in short display string
currency.btcBignum2DisplayShort = function (value_bignum) {
  return (value_bignum.toNumber() / btcMultiple).toFixed(2) + btcSuffix;
}

// converts mtgox usd integer in float string
currency.usdBignum2FloatString = function (value_bignum) {
  return (value_bignum.toNumber() / usdMultiple).toFixed(5);
}

// converts mtgox usd integer in display string
currency.usdBignum2Display = function (value_bignum) {
  return usdPrefix + (value_bignum.toNumber() / usdMultiple).toFixed(5);
}

// converts mtgox usd integer in short display string
currency.usdBignum2DisplayShort = function (value_bignum) {
  return usdPrefix + (value_bignum.toNumber() / usdMultiple).toFixed(2);
}

// converts user friendly USD amount to MTGOX friendly USD amount
currency.usdFloat2UsdBignum = function (value_float) {
  return bignum(value_float * usdMultiple);
}

// converts user friendly USD amount to MTGOX friendly USD amount
currency.btcFloat2btcBignum = function (value_float) {
  return bignum(value_float * btcMultiple);
}

module.exports = currency;
