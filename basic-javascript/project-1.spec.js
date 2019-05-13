const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
  describe('multiplyByTen', () => {
    it('multiplies the given number by 10', () => {
      expect(helpers.multiplyByTen(10)).toBe(100);
    })
  })

  describe('subtractFive', () => {
    it('subtracts 5 from the given number', () => {
      expect(helpers.subtractFive(10)).toBe(5);
    })
  })

  describe('areSameLength', () => {
    it('determines if two strings are the same length', () => {
      expect(helpers.areSameLength('hey','you')).toBe(true);
      expect(helpers.areSameLength('hey there','hi there')).toBe(false);
    })
  })

  describe('areEqual', () => {
    it('determines if two items are strictly equal (===)', () => {
      const x = 5;
      expect(helpers.areEqual(x,5)).toBe(true);
      expect(helpers.areEqual(x,6)).toBe(false);
    })
  })

  describe('lessThanNinety', () => {
    it('determines if a given number is less than 90', () => {
      expect(helpers.lessThanNinety(89)).toBe(true);
      expect(helpers.lessThanNinety(91)).toBe(false);
    })
  })

  describe('greaterThanFifty', () => {
    it('determines if a given number is greater than 50', () => {
      expect(helpers.greaterThanFifty(51)).toBe(true);
      expect(helpers.greaterThanFifty(49)).toBe(false);
    })
  })

  describe('add', () => {
    it('returns the sum of two given numbers', () => {
      expect(helpers.add(4,2)).toBe(6);
    })
  })

  describe('subtract', () => {
    it('returns the difference between two given numbers', () => {
      expect(helpers.subtract(4,2)).toBe(2);
    })
  })

  describe('divide', () => {
    it('returns the result of dividing the first number by the second', () => {
      expect(helpers.divide(4,2)).toBe(2);
    })
  })

  describe('multiply', () => {
    it('returns the product of two given numbers', () => {
      expect(helpers.multiply(4,2)).toBe(8);
    })
  })
})