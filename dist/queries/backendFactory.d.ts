import { BackendConfig } from '@/types';
import * as defaultBackend from './sendMessageQuery';
/**
 * Factory function that returns the appropriate backend query functions
 * based on the provided configuration.
 *
 * @param config The backend configuration
 * @returns An object containing all the query functions for the selected backend
 */
export declare function getBackendQueries(config: BackendConfig): typeof defaultBackend;
/**
 * Creates a backend configuration object
 *
 * @param provider The backend provider ('default' or 'custom')
 * @param apiHost Optional API host URL
 * @returns A backend configuration object
 */
export declare function createBackendConfig(provider: 'default' | 'custom', apiHost?: string): BackendConfig;
//# sourceMappingURL=backendFactory.d.ts.map