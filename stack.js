"use strict";

var Stack = (function () {
  var Stack = function Stack() {
    this.size = 0;
    this._storage = [];
  };

  Stack.prototype.push = function (item) {
    if (typeof item === "undefined") {
      return;
    }
    this._storage.push(item);
    this.size++;
  };

  Stack.prototype.pop = function () {
    this.size--;
    return this._storage.pop();
  };

  Stack.prototype.isEmpty = function () {
    return this.size === 0;
  };

  Stack.prototype.peek = function () {
    return this._storage[this.size - 1];
  };

  return Stack;
})();

exports["default"] = Stack;