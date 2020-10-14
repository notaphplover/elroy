import * as axios from 'axios';
import { ContainerModule, interfaces } from 'inversify';
import { API_ADAPTER_TYPES } from './types';
import { ApiAxiosConsumer } from '../ApiAxiosConsumer';
import { ApiEnvLoader } from '../env/ApiEnvLoader';

function bindAdapter(bind: interfaces.Bind): void {
  bind(API_ADAPTER_TYPES.api.API_AXIOS_CONSUMER).to(ApiAxiosConsumer);
  bind(API_ADAPTER_TYPES.api.AXIOS_STATIC).toConstantValue(axios.default);
  bind(API_ADAPTER_TYPES.env.API_ENV_LOADER)
    .to(ApiEnvLoader)
    .inSingletonScope();
}

export const apiContainer: ContainerModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bindAdapter(bind);
  },
);
