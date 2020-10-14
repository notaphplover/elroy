import { UserApiV1 } from '../model/UserApiV1';
import { UserCreationQueryApiV1 } from '../query/UserCreationQueryApiV1';

export interface UserApiV1Consumer {
  post(query: UserCreationQueryApiV1): Promise<UserApiV1>;
}
