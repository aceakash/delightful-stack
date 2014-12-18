Stack = require './index'

describe 'Stack', ->
  stack = null

  beforeEach ->
    stack = new Stack()

  it 'is a function', ->
    expect(typeof Stack).toBe('function')

  it 'can be instantiated', ->
    instantiation = () ->
      new Stack()
    expect(instantiation).not.toThrow()

  it 'has an initial size of 0', ->
    expect(stack.size).toBe(0)

  describe 'push', ->
    it 'can have items pushed to it, increasing its size', ->
      stack.push 1
      stack.push {}
      stack.push [2, 4]
      stack.push "nothing"
      stack.push null

      expect(stack.size).toBe(5 )

    it 'has no effect when undefined is pushed to it', ->
      stack.push 'old'
      stack.push undefined
      stack.push 'new'

      expect(stack.size).toBe(2)
      expect(stack.pop()).toBe('new')
      expect(stack.pop()).toBe('old')

  describe 'pop', ->
    it 'can pop off the item last pushed', ->
      stack.push '2 days old'
      stack.push 'today'
      latest = stack.pop()
      expect(latest).toBe('today')

    it 'reduces in size when items popped off', ->
      stack.push '1'
      stack.push '2'
      stack.push '3'
      stack.push '4'

      stack.pop()
      stack.pop()
      stack.pop()
      expect(stack.size).toBe(1)

    it 'keep popping off items on successive pops', ->
      stack.push 1
      stack.push 2
      stack.push 3
      stack.push 4

      expect(stack.pop()).toBe(4)
      expect(stack.pop()).toBe(3)
      expect(stack.pop()).toBe(2)
      expect(stack.pop()).toBe(1)

    it 'returns undefined when pop called on empty stack', ->
      expect(stack.pop()).toBeUndefined()
      expect(stack.pop()).toBeUndefined()

  describe 'peek', ->
    it 'gets the top item without removing it from the stack', ->
      stack.push 'old'
      stack.push 'new'

      expect(stack.peek()).toBe('new')
      expect(stack.size).toBe(2)
      expect(stack.peek()).toBe('new')

  describe 'isEmpty', ->
    it 'returns true when stack is empty', ->
      expect(stack.isEmpty()).toBe(true)

    it 'returns false when stack is not empty', ->
      stack.push('something')
      expect(stack.isEmpty()).toBe(false)

