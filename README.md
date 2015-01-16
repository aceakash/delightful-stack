delightful-stack
================

A (delightful) stack data structure

##Install

```
npm install delightful-stack --save
```


##API

Get a reference to the Stack constructor and create a new stack:

```javascript
var Stack = require('delightful-stack');

var stack = new Stack();
```

####size
Number of items in the stack.

```javascript
var stack = new Stack();
stack.size; // 0

stack.push('something');
stack.push('nothing');
stack.size; // 2

stack.pop();
stack.size; // 1
```

####push
Push an item onto the top of the stack. Any JavaScript value except `undefined` can be pushed. Pushing `undefined` has no effect.

```javascript
var stack = new Stack();
stack.push('A');
stack.push(null);
stack.push('');
stack.push(false);
stack.push({});
stack.push([]);
stack.size; // 6

stack.push(undefined);
stack.push(undefined);
stack.size; // 6
```

####pop
Remove and return the topmost item in the stack, or return `undefined` if the stack is empty.

```javascript
var stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
stack.size; // 3

stack.pop(); // 'C'
stack.size; // 2

stack.pop(); // 'B'
stack.size; // 1

stack.pop(); // 'A'
stack.size; // 0

stack.pop(); // undefined
stack.size; // 0
```

####peek
Return the topmost item in the stack without removing it.

```javascript
var stack = new Stack();
stack.push('bottom');
stack.push('top');

stack.peek(); // 'top'

// stack size should be unaffected
stack.size; // 2

// calling peek again should get same value as before
stack.peek(); // 'top'
```

####isEmpty
`true` if stack has no items, `false` if it does

```javascript
var stack = new Stack();
stack.isEmpty(); // true

stack.push('lonely');
stack.isEmpty(); // false

stack.pop(); // 'lonely'
stack.isEmpty(); // true
```

##Test
Clone the repo, then run `npm install`, then `npm test`

##Build Status
![Build status](https://codeship.com/projects/bf359510-7f9a-0132-0d6d-66b1976afe6a/status?branch=master)
