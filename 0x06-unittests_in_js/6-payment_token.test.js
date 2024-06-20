const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct value when called with true', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.eql({ data: 'Successful response from the API' });
      done();
    }).catch((err) => done(err));
  });
});
