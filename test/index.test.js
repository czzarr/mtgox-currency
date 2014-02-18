var bignum = require('bignum')
var should = require('chai').should()
  , currency = require('../')
  , btcBignum = bignum(100000000)
  , btcFloatString = '1.00000000'
  , btcDisplay = '1.00000000\u00a0BTC'
  , btcDisplayShort = '1.00\u00a0BTC'
  , usdBignum = bignum(100000)
  , usdFloatString = '1.00000'
  , usdDisplay = '$1.00000'
  , usdDisplayShort = '$1.00'
  ;

describe.only('Test currency utility functions', function () {
  it('Convert a BTC Gox Bignum to a Float String', function () {
    currency.btcBignum2FloatString(btcBignum).should.equal(btcFloatString);
  })
  it('Convert a BTC Gox Bignum to a Display String', function () {
    currency.btcBignum2Display(btcBignum).should.equal(btcDisplay);
  })
  it('Convert a BTC Gox Bignum to a Display Short String', function () {
    currency.btcBignum2DisplayShort(btcBignum).should.equal(btcDisplayShort);
  })
  it('Convert a USD Gox Bignum to a Float String', function () {
    currency.usdBignum2FloatString(usdBignum).should.equal(usdFloatString);
  })
  it('Convert a USD Gox Bignum to a Display String', function () {
    currency.usdBignum2Display(usdBignum).should.equal(usdDisplay);
  })
  it('Convert a USD Gox Bignum to a Display Short String', function () {
    currency.usdBignum2DisplayShort(usdBignum).should.equal(usdDisplayShort);
  })
  it('Convert a USD Float to a USD Gox Bignum', function () {
    currency.usdFloat2UsdBignum(123.45).eq(bignum(12345000)).should.be.true;
    currency.usdFloat2UsdBignum(0.4023).eq(bignum(40230)).should.be.true;
  })
  it('Convert a BTC Float to a BTC Gox Bignum', function () {
    currency.btcFloat2btcBignum(123.45).eq(bignum(12345000000)).should.be.true;
    currency.btcFloat2btcBignum(0.01).eq(bignum(1000000)).should.be.true;
  })
});
