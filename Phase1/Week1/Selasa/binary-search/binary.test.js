const assert = require('assert')

const { binary_search } = require('./binary.js')

describe('Test Binary Search', () => {
  describe('Release 0', () => {
    it('test array 1', () => {
      const test_array = [1, 2, 3, 4, 5]
      assert.deepEqual(binary_search(3, test_array), 2)
    })
    it('test array 2', () => {
      const test_array = [13, 19, 24, 29, 32, 37, 43]
      assert.deepEqual(binary_search(35, test_array), -1)
    })
    it('test array 3', () => {
      const test_array = [100, 120, 130, 135, 150, 170]
      assert.deepEqual(binary_search(135, test_array), 3)
    })
  })
  describe('Release 1', () => {
    it('test array 4', () => {
      const test_array = [13, 19, 24, 29, 32, 37, 43]
      assert.deepEqual(binary_search(32, test_array), 4)
    })
  })
})
