var accounts = require('../accounts');
var assert = require('chai').assert;

describe('#create()', function() {
    it('username = foo, password = foobar123!!', function() {
      assert.isTrue(accounts.create("foo", "foobar123!!"));
    })
})
