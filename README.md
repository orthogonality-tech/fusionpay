# FusionPay signature generator

According to the FusionPay every request must send a signature to the API. The
process to generate the signature is being described here:
https://speca.io/fusionpay/fusionpay-payment-api#signature-verification

This module is the implementation of the process above.

## How to use it

```
const fusionPay = require('fusionpay-sdk');

const API_KEY = 'abcdefgh';

fusionPay.initialize({
  api_key: API_KEY
});

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

const signature = fusionPay.sign(params);
console.log('The signature is', signature);

// Use axios to fire the request
```
