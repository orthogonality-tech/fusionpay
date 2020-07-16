# FusionPay signature generator

According to the FusionPay every request must send a signature to the API. The
process to generate the signature is being described here:
https://speca.io/fusionpay/fusionpay-payment-api#signature-verification

This module is the implementation of the process above.

## How to use it

```
const fusionPay = require('fusionpay-sdk');

const API_URL = 'https://merchant.fusionpay.co.uk/api/v2';
const API_KEY = 'abcdefgh';
const CLIENT_ID = 'my_client_id';

fusionPay.initialize({
  api_url: API_URL,
  api_key: API_KEY,
  client_id: CLIENT_ID
});

const result = await fusionPay.api.app_alipay_online({
  amount: 0.02,
  order_detail: 'FusionPay order',
  reference: 'Reference 123',
});

console.log('resultresult', result);
```
