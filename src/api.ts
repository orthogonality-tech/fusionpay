import axios from 'axios';
import signature from './sign';
import configuration from './configuration';

export interface AliPayPayload {
  amount: number | null,
  reference?: string | null,
  out_trade_no?: string | null,
  notify_url?: string | null,
  order_title?: string | null,
  order_detail?: string | null,
  currency?: string | null,
  trans_currency?: string | null
};

export async function app_alipay_online(payload: AliPayPayload) {
  const { api_url, client_id } = configuration;

  const paylod_with_client = {
    client_id,
    ...payload
  };

  const sign: string = signature(paylod_with_client);

  // Prepare for the request
  const url = `${api_url}/payment/app/alipay-online`;

  const body_payload = {
    sign,
    ...paylod_with_client
  };

  return await axios.post(url, body_payload).then(result => result.data);
}
