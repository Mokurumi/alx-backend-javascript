const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should round two numbers and return their sum', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should round two numbers and return their difference', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-3);
  });
  it('should round two numbers and return their quotient', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should throw an error if the type is not SUM, SUBTRACT or DIVIDE', () => {
    expect(() => calculateNumber('MULTIPLY', 1, 3)).to.throw(TypeError, 'Invalid type. Use SUM, SUBTRACT or DIVIDE');
  });
  it('should throw an error if the second number is 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
