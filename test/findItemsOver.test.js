const assert = require('assert');
const findItemsOver = require('../findItemsOver');

describe('The findItemsOver function', function(){
  it('should count items over a given number', function(){
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
],20));

    });
    it('should count items over a given number', function(){
        // this test will fail - can you fix it?
        assert.deepEqual([ { name: 'pears', qty: 37 } ],findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
],30));

    });
});
