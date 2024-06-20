const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    const logSpy = sinon.spy(console, 'log');
    const res = sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWithExactly('The total is: 10')).to.be.true;
    expect(res).to.equal(10);

    calculateNumberStub.restore();
    logSpy.restore();
  });
});
