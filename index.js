var Stack;

Stack = (function() {
  function Stack() {
    this.size = 0;
    this._storage = [];
  }

  Stack.prototype.push = function(item) {
    if (item === void 0) {
      return;
    }
    this._storage.push(item);
    return this.size++;
  };

  Stack.prototype.pop = function() {
    this.size--;
    return this._storage.pop();
  };

  Stack.prototype.peek = function() {
    return this._storage[this.size - 1];
  };

  Stack.prototype.isEmpty = function() {
    return this.size === 0;
  };

  return Stack;

})();

module.exports = Stack;
