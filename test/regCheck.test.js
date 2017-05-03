const assert = require('assert');
const regCheck = require('../regCheck');

describe('The regCheck function', function(){

    it('should check regNumber', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('should check regNumber', function(){
        // this test will fail - can you fix it?
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
});
