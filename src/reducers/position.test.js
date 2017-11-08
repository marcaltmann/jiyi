const should = require('should');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      [1, 2, 3].indexOf(4).should.be.exactly(-1);
    });
  });

  describe('#splice()', () => {
    it('should alter original array', () => {
      const original = [1, 2, 3, 4, 5];
      original.splice(2, 2);
      original.should.eql([1, 2, 5]);
    });

    it('should return spliced portion', () => {
      const original = [1, 2, 3, 4, 5];
      original.splice(2, 2).should.eql([3, 4]);
    });
  });
});
