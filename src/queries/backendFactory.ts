import { BackendConfig } from '@/types';
import * as defaultBackend from './sendMessageQuery';
import * as customBackend from './customBackendQuery';

/**
 * Factory function that returns the appropriate backend query functions
 * based on the provided configuration.
 *
 * @param config The backend configuration
 * @returns An object containing all the query functions for the selected backend
 */
export function getBackendQueries(config: BackendConfig) {
  switch (config.provider) {
    case 'custom':
      return customBackend;
    case 'default':
    default:
      return defaultBackend;
  }
}

/**
 * Creates a backend configuration object
 *
 * @param provider The backend provider ('default' or 'custom')
 * @param apiHost Optional API host URL
 * @returns A backend configuration object
 */
export function createBackendConfig(provider: 'default' | 'custom', apiHost?: string): BackendConfig {
  return {
    provider,
    apiHost,
  };
}
