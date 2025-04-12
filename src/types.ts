// Backend provider types
export type BackendProvider = 'default' | 'custom';

export interface BackendConfig {
  provider: BackendProvider;
  apiHost?: string;
}
