const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('The countAllFromTown function', function(){
  it('should count how many from a specific town', function(){
        assert.equal(countAllFromTown('CJ 3521, CJ 5621, CJ 5621','CF'), 0);

    });
    it('should count how many from a specific town', function(){
        // this test will fail - can you fix it?
        assert.equal(countAllFromTown('CJ 3521, CY 5621, CJ 5621', 'CY'), 1);
    });
});
