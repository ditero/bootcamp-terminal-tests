const assert = require('assert');
const findItemsOver20 = require('../findItemsOver20');

describe('The findItemsOver20 function', function(){
  it('should count items over 20', function(){
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
]));

    });
    it('should count items over 20', function(){
        // this test will fail - can you fix it?
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
]));
    });
});
