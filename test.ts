import fusionPay from './src';

const API_KEY = 'abcdefghg';

const params = {
  "a": null,
  "b": "xyz",
  "c": 123,
  "d": "",
  "e": {
    "f": "abc",
    "g": "000"
  }
};

fusionPay.initialize({
  api_key: API_KEY
});

const signature: string = fusionPay.sign(params);

console.log('signaturesignature', signature);
