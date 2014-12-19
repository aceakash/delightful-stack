class Stack {
  constructor() {
    this.size = 0;
    this._storage = [];
  }

  push(item) {
    if (typeof item === 'undefined') {
      return;
    }
    this._storage.push(item);
    this.size++;
  }

  pop() {
    this.size--;
    return this._storage.pop();
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this._storage[this.size - 1];
  }
}

export default Stack;


