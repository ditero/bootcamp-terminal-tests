const assert = require('assert');
const transportFee = require('../transportFee');

describe('The transportFee function', function(){
  it('should check which shift and return the transportFee', function(){
        assert.equal(transportFee('morning'), "R20");
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free');

    });
    it('should check which shift and return the transportFee', function(){
        // this test will fail - can you fix it?
        assert.equal(transportFee('evening'), "Which Shift");
    });
});
