import { inject, injectable } from 'inversify';
import { ApiAxiosConsumer } from '../../../../../layer-modules/api/adapter';
import { ApiEnvVariables } from '../../../../../layer-modules/api/adapter';
import { EnvLoader } from '../../../../../layer-modules/env/domain';
import { UserApiV1 } from '../model/UserApiV1';
import { UserApiV1Consumer } from './UserApiV1Consumer';
import { UserCreationQueryApiV1 } from '../query/UserCreationQueryApiV1';
import { apiAdapter } from '../../../../../layer-modules/api/adapter';

@injectable()
export class UserApiV1AxiosConsumer implements UserApiV1Consumer {
  constructor(
    @inject(apiAdapter.types.api.API_AXIOS_CONSUMER)
    private readonly apiAxiosConsumer: ApiAxiosConsumer,
    @inject(apiAdapter.types.env.API_ENV_LOADER)
    private readonly apiEnvLoader: EnvLoader<ApiEnvVariables>,
  ) {}

  public async post(query: UserCreationQueryApiV1): Promise<UserApiV1> {
    return this.apiAxiosConsumer.post(
      `${this.apiEnvLoader.index.API_URL}/v1/users`,
      query,
    );
  }
}
