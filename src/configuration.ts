export interface Configuration {
  api_url: string | null,
  api_key: string | null,
  client_id: string | null
};

export default {
  api_url: null,
  api_key: null,
  client_id: null
} as Configuration;