var should = require('chai').should()
  , currency = require('../')
  , btcInt = 100000000
  , btcFloatString = '1.00000000'
  , btcDisplay = '1.00000000\u00a0BTC'
  , btcDisplayShort = '1.00\u00a0BTC'
  , usdInt = 100000
  , usdFloatString = '1.00000'
  , usdDisplay = '$1.00000'
  , usdDisplayShort = '$1.00'
  ;

describe.only('Test currency utility functions', function () {
  it('Convert a BTC Gox Integer to a Float String', function () {
    currency.btcInt2FloatString(btcInt).should.equal(btcFloatString);
  })
  it('Convert a BTC Gox Integer to a Display String', function () {
    currency.btcInt2Display(btcInt).should.equal(btcDisplay);
  })
  it('Convert a BTC Gox Integer to a Display Short String', function () {
    currency.btcInt2DisplayShort(btcInt).should.equal(btcDisplayShort);
  })
  it('Convert a USD Gox Integer to a Float String', function () {
    currency.usdInt2FloatString(usdInt).should.equal(usdFloatString);
  })
  it('Convert a USD Gox Integer to a Display String', function () {
    currency.usdInt2Display(usdInt).should.equal(usdDisplay);
  })
  it('Convert a USD Gox Integer to a Display Short String', function () {
    currency.usdInt2DisplayShort(usdInt).should.equal(usdDisplayShort);
  })
  it('Convert a USD Float to a USD Gox Integer', function () {
    currency.usdFloat2UsdInt(123.45).should.equal(12345000);
    currency.usdFloat2UsdInt(0.4023).should.equal(40230);
  })
  it('Convert a BTC Float to a BTC Gox Integer', function () {
    currency.btcFloat2btcInt(123.45).should.equal(12345000000);
    currency.btcFloat2btcInt(0.01).should.equal(1000000);
  })
});
