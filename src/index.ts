import sign from './sign';
import configuration, { Configuration } from './configuration';
import * as api from './api';

function initialize (config: Configuration) {
  configuration.api_url = config.api_url;
  configuration.api_key = config.api_key;
  configuration.client_id = config.client_id;
};

export {
  initialize,
  sign,
  api
};
