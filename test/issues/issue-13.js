/*global it, describe*/

'use strict';


var assert = require('assert');
var BabelFish = require('../..');


describe('issue 13', function () {
  it('Compilation fails on numbers', function () {
    var b = new BabelFish();

    assert.doesNotThrow(function () { b.addPhrase('ru_RU', 'formatting.number.currency.format.precision', 2); });
  });

  it('Compilation fails on booleans', function () {
    var b = new BabelFish();

    assert.doesNotThrow(function () { b.addPhrase('ru_RU', 'formatting.number.currency.format.significant', false); });
  });
});
