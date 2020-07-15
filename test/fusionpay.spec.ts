import { expect } from 'chai';
import { describe } from 'mocha';

import * as fusionPay from '../src';

const API_URL = 'https://merchant.fusionpay.co.uk/api/v2';
const CLIENT_ID = 'onlinedemo';

const params = {
  a: null,
  b: 'xyz',
  c: 123,
  d: '',
  e: {
    f: 'abc',
    g: '000'
  }
};

describe('Product Cost Service', () => {

  it('should calculate the signature for api_key = "abcdefghg"', () => {
    // Prepare
    const API_KEY = '0987654321';

    fusionPay.initialize({
      api_url: API_URL,
      api_key: API_KEY,
      client_id: CLIENT_ID
    });

    // Act
    const signature: string = fusionPay.sign(params);

    // Expect
    expect(signature).to.be.equal('b0eb3db0817fd7eb471a1e266c2969db');
  });

  it('should calculate the signature for api_key = "12345678"', () => {
    // Prepare
    const API_KEY = '1234567890';

    fusionPay.initialize({
      api_url: API_URL,
      api_key: API_KEY,
      client_id: CLIENT_ID
    });

    // Act
    const signature: string = fusionPay.sign(params);

    // Expect
    expect(signature).to.be.equal('d38d47e4e62717290622de60422ee998');
  });

  it.skip('should fire a request', async () => {
    // Prepare
    const API_KEY = '0987654321';

    fusionPay.initialize({
      api_url: API_URL,
      api_key: API_KEY,
      client_id: CLIENT_ID
    });

    // Act
    const result = await fusionPay.api.app_alipay_online({
      amount: 0.02,
      order_detail: 'FusionPay order',
      reference: 'Reference 123',
    });

    console.log('resultresult', result);
    // Expect
    // expect(signature).to.be.equal('8e2fd87a39a6f39dabab5923bd7cd848');
  });
});