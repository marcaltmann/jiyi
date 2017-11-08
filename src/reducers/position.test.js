import 'should';
import reducer, { getPosition } from './position';

describe('position reducer', function() {
  describe('getPosition()', function() {
    it('should return the current position', function() {
      const state = 0;
      const result = getPosition(state);
      result.should.be.exactly(0);
    });
  });
});
