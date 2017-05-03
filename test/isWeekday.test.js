const assert = require('assert');
const isWeekday = require('../isWeekday');

describe('The isWeekday function', function(){
  it('should check if the isWeekday', function(){
        assert.equal(isWeekday('Tuesday'), true);

    });
    it('should check if the isWeekday', function(){
        // this test will fail - can you fix it?
        assert.equal(isWeekday('Sunday'), false);
    });
});
