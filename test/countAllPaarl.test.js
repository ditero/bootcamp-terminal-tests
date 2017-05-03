const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('The countAllPaarl function', function(){
  it('should count how many from paarl', function(){
        assert.equal(countAllPaarl('CJ 3521, CJ 5621, CJ 5621'), 3);

    });
    it('should count how many from paarl', function(){
        // this test will fail - can you fix it?
        assert.equal(countAllPaarl('CJ 3521, CY 5621, CJ 5621'), 2);
    });
});
