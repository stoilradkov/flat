const { expect } = require('chai')
const flat = require('../flat')
const generateArrayWithDepth = require('../utils')

describe('flat', () => {
  it('returns a flat array when a flat array is passed', () => {
    const array = [1, 2, 3, 4]

    expect(flat(array)).to.deep.equal(array)
  })

  it('throws an error when invoked with an argument which is not an array', () => {
    expect(() => flat('test')).to.throw('The argument should be an array')
    expect(() => flat({ 0: 1 })).to.throw('The argument should be an array')
  })

  it('returns a flat array with different types of array items', () => {
    const array = [1, '2', { a: 3 }, true]

    expect(flat(array)).to.deep.equal(array)
  })

  describe('emtpy array', () => {
    it('returns an empty array when an empty array is passed', () => {
      const array = []

      expect(flat(array)).to.deep.equal(array)
    })

    it('returns an empty array when an array with empty arrays as items is passed', () => {
      expect(flat([[], []])).to.deep.equal([])
    })

    it('returns an empty array when an array with empty array of arbitrary depth is passed', () => {
      expect(flat([[[]]])).to.deep.equal([])
    })
    it('returns an empty array when an array with empty arrays arbitrary depth is passed', () => {
      expect(flat([[], [[[], []]]])).to.deep.equal([])
    })
  })

  it('returns a flat array when an array with only one item which is an array is passed', () => {
    const array = [[1, 2, 3]]

    expect(flat(array)).to.deep.equal([1, 2, 3])
  })

  it('returns a flat array when a singleton array is passed', () => {
    const array = [[1, [2], 3]]

    expect(flat(array)).to.deep.equal([1, 2, 3])
  })

  it('returns a flat array when an item in the passed array is an array with more than one item', () => {
    const array = [[1, [2, 3]]]

    expect(flat(array)).to.deep.equal([1, 2, 3])
  })

  it('returns a flat array when an item in the passed array is an array with more than one item', () => {
    const array = [[1, [2, 3]]]

    expect(flat(array)).to.deep.equal([1, 2, 3])
  })

  it('returns a flat array when an array with an arbitrary structure is passed', () => {
    expect(
      flat([1, [2, [3], [[4, 5]]], [6], 7, generateArrayWithDepth(10, 1)]),
    ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 1])
    expect(
      flat([1, [2, [3], generateArrayWithDepth(100, 1), [4, 5, 6], [7]]]),
    ).to.deep.equal([1, 2, 3, 1, 4, 5, 6, 7])
    expect(
      flat([1, [2, [3], [[4, generateArrayWithDepth(1000000, 1), 5]]], [6], 7]),
    ).to.deep.equal([1, 2, 3, 4, 1, 5, 6, 7])
  })
})
