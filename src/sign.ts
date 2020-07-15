import crypto from 'crypto';
import queryString from 'query-string';
import configuration from './configuration';

type Payload = Record<string, unknown>;

const valid_types = [
  'string',
  'boolean',
  'number'
];

function sign(payload: Payload): string {
  const payload_to_sign = Object.keys(payload).reduce((acc, key) => {
    const value = payload[key];

    const type = typeof value;
    
    if (valid_types.includes(type)) {
      if (type === 'string') {
        if (value) {
          acc[key] = value;
        }
      } else {
        acc[key] = value;
      }
    }

    return acc;
  }, {} as Payload);

  const stringified: string = queryString.stringify(payload_to_sign);

  const string_to_hash: string = decodeURIComponent(`${stringified}${configuration.api_key}`);

  const hash:string = crypto.createHash('md5').update(string_to_hash).digest('hex');

  return hash;
}

export default sign;