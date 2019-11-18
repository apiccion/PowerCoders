var addr = require('../math_lib');
var assert = require('chai').assert;

describe('#add()', function() {
    it('5 + 3 = 8', function() {
      assert.equal(addr.add(5,3), 8);
    })
    it('2 + 0 = 2', function() {
      assert.equal(addr.add(2,0), 2);
    })
    it('2 + -2 = 0', function() {
      assert.equal(addr.add(2,0), 2);
    })
    it('1.2 + 1.3 = 2.5', function() {
      assert.equal(addr.add(1.2, 1.3), 2.5);
    })
})
