const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe('The isFromBellville function', function(){

    it('should check if isFromBellville', function(){
        assert.equal(false, isFromBellville('CF 354 875'));
    });
    it('should check if isFromBellville', function(){
        // this test will fail - can you fix it?
        assert.equal(true, isFromBellville('CY 354 875'));
    });
});
