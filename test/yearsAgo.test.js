const assert = require('assert');
const yearsAgo = require('../yearsAgo');

describe('The yearsAgo function', function(){
  it('should check how many years', function(){
        assert.equal(yearsAgo(2005), 12);

    });
    it('The yearsAgo function', function(){
        // this test will fail - can you fix it?
        assert.equal(yearsAgo(2012), 5);
    });
});
