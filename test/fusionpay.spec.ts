import { expect } from 'chai';
import { describe } from 'mocha';

import fusionPay from '../src';

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
    fusionPay.initialize({
      api_key: 'abcdefghg'
    });

    // Act
    const signature: string = fusionPay.sign(params);

    // Expect
    expect(signature).to.be.equal('c26f18f3a6aa332ce781a0dd5da7d54a');
  });

  it('should calculate the signature for api_key = "12345678"', () => {
    // Prepare
    fusionPay.initialize({
      api_key: '12345678'
    });

    // Act
    const signature: string = fusionPay.sign(params);

    // Expect
    expect(signature).to.be.equal('5df771296022bb6c7083a0b1e95c7843');
  });
});