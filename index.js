var btcMultiple = 100000000 //1e8
var btcSuffix = '\u00a0BTC'
var usdCurrency = 'USD'
var usdMultiple = 100000  // 1e5
var usdPrefix = '$'

var currency = {};

// converts mtgox bitcoin integer in float string
currency.btcInt2FloatString = function (value_int) {
  return (value_int / btcMultiple).toFixed(8);
}

// converts mtgox bitcoin integer in display string
currency.btcInt2Display = function (value_int) {
  return (value_int / btcMultiple).toFixed(8) + btcSuffix;
}

// converts mtgox bitcoin integer in short display string
currency.btcInt2DisplayShort = function (value_int) {
  return (value_int / btcMultiple).toFixed(2) + btcSuffix;
}

// converts mtgox usd integer in float string
currency.usdInt2FloatString = function (value_int) {
  return (value_int / usdMultiple).toFixed(5);
}

// converts mtgox usd integer in display string
currency.usdInt2Display = function (value_int) {
  return usdPrefix + (value_int / usdMultiple).toFixed(5);
}

// converts mtgox usd integer in short display string
currency.usdInt2DisplayShort = function (value_int) {
  return usdPrefix + (value_int / usdMultiple).toFixed(2);
}

// converts user friendly USD amount to MTGOX friendly USD amount
currency.usdFloat2UsdInt = function (value_float) {
  return parseInt(value_float * usdMultiple, 10);
}

// converts user friendly USD amount to MTGOX friendly USD amount
currency.btcFloat2btcInt = function (value_float) {
  return parseInt(value_float * btcMultiple, 10);
}

module.exports = currency;
