import sign from './sign';
import configuration, { Configuration } from './configuration';

function initialize (config: Configuration) {
  configuration.api_key = config.api_key;
};

export {
  initialize,
  sign
};