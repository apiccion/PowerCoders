var accounts = require('../accounts');
var assert = require('chai').assert;

describe('#create()', function() {
    it('can create a valid account', function() {
      assert.isTrue(accounts.create("foo1", "foobar123!!"));
    })

    it('cannot create duplicate account', function() {
      assert.isTrue(accounts.create("ali", "foobar523!!"));
      assert.isFalse(accounts.create("ali", "foobar523!!"));
    })

    it('empty password', function() {
      assert.isFalse(accounts.create("foo2", ""));
    })
    it('7 character password', function() {
      assert.isFalse(accounts.create("foo3", "foo52!!"));
    })
    it('only one number password', function() {
      assert.isFalse(accounts.create("foo4", "fooob5!!"));
    })
    it('only one special character password', function() {
      assert.isFalse(accounts.create("foo5", "fooob55!"));
    })
})
