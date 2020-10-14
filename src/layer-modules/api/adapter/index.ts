import { API_PUBLIC_ADAPTER_TYPES } from './config/types';
import { ApiAxiosConsumer } from './ApiAxiosConsumer';
import { ApiEnvVariables } from './env/ApiEnvVariables';
import { apiContainer } from './config/container';

export { ApiAxiosConsumer };
export type { ApiEnvVariables };

// eslint-disable-next-line @typescript-eslint/typedef
export const apiAdapter = {
  config: { container: apiContainer },
  types: API_PUBLIC_ADAPTER_TYPES,
};
