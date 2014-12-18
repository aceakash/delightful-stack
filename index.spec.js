var Stack;

Stack = require('./index');

describe('Stack', function() {
  var stack;
  stack = null;
  beforeEach(function() {
    return stack = new Stack();
  });
  it('is a function', function() {
    return expect(typeof Stack).toBe('function');
  });
  it('can be instantiated', function() {
    var instantiation;
    instantiation = function() {
      return new Stack();
    };
    return expect(instantiation).not.toThrow();
  });
  it('has an initial size of 0', function() {
    return expect(stack.size).toBe(0);
  });
  describe('push', function() {
    it('can have items pushed to it, increasing its size', function() {
      stack.push(1);
      stack.push({});
      stack.push([2, 4]);
      stack.push("nothing");
      stack.push(null);
      return expect(stack.size).toBe(5);
    });
    return it('has no effect when undefined is pushed to it', function() {
      stack.push('old');
      stack.push(void 0);
      stack.push('new');
      expect(stack.size).toBe(2);
      expect(stack.pop()).toBe('new');
      return expect(stack.pop()).toBe('old');
    });
  });
  describe('pop', function() {
    it('can pop off the item last pushed', function() {
      var latest;
      stack.push('2 days old');
      stack.push('today');
      latest = stack.pop();
      return expect(latest).toBe('today');
    });
    it('reduces in size when items popped off', function() {
      stack.push('1');
      stack.push('2');
      stack.push('3');
      stack.push('4');
      stack.pop();
      stack.pop();
      stack.pop();
      return expect(stack.size).toBe(1);
    });
    it('keep popping off items on successive pops', function() {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      expect(stack.pop()).toBe(4);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      return expect(stack.pop()).toBe(1);
    });
    return it('returns undefined when pop called on empty stack', function() {
      expect(stack.pop()).toBeUndefined();
      return expect(stack.pop()).toBeUndefined();
    });
  });
  describe('peek', function() {
    return it('gets the top item without removing it from the stack', function() {
      stack.push('old');
      stack.push('new');
      expect(stack.peek()).toBe('new');
      expect(stack.size).toBe(2);
      return expect(stack.peek()).toBe('new');
    });
  });
  return describe('isEmpty', function() {
    it('returns true when stack is empty', function() {
      return expect(stack.isEmpty()).toBe(true);
    });
    return it('returns false when stack is not empty', function() {
      stack.push('something');
      return expect(stack.isEmpty()).toBe(false);
    });
  });
});
