class Stack
  constructor: ->
    @size = 0
    @_storage = []

  push: (item) ->
    return if item is undefined
    @_storage.push item
    @size++

  pop: ->
    @size--
    @_storage.pop()

  peek: ->
    @_storage[@size - 1]

  isEmpty: ->
    @size is 0

module.exports = Stack
