import { ContainerModule, interfaces } from 'inversify';
import { USER_ADAPTER_TYPES } from './types';
import { UserApiV1AxiosConsumer } from '../api/consumer/UserApiV1AxiosConsumer';

function bindAdapter(bind: interfaces.Bind): void {
  bind(USER_ADAPTER_TYPES.api.USER_API_V1_CONSUMER).to(UserApiV1AxiosConsumer);
}

export const userContainer: ContainerModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bindAdapter(bind);
  },
);
