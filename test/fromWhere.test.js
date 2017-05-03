const assert = require('assert');
const fromWhere = require('../fromWhere');

describe('The fromWhere function', function(){
  it('should find the location of CJ 123', function(){
    assert.equal('Paarl', fromWhere('CJ 123'));
  });
});
