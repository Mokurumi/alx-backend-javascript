const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should round two numbers and return their sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should round two numbers and return their difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -3);
  });
  it('should round two numbers and return their quotient', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('should throw an error if the type is not SUM, SUBTRACT or DIVIDE', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 1, 3), {
      name: 'TypeError',
      message: 'Invalid type. Use SUM, SUBTRACT or DIVIDE',
    });
  });
  it('should throw an error if the second number is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
