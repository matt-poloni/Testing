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
})