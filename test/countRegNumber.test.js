const assert = require('assert');
const countRegNumber = require('../countRegNumber');

describe('The countRegNumber function', function(){

    it('should count registration Numbers', function(){
        assert.equal(1, countRegNumber('CF 354 875'));
    });
    it('should check if isFromBellville', function(){
        // this test will fail - can you fix it?
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});
