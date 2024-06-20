const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log.calledOnceWithExactly('The total is: 10')).to.be.true;
    spy.restore();
    stub.restore();
  });
});
