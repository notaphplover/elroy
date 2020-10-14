import { EnvLoader, Index } from '../../../env/domain';
import { ApiEnvVariables } from './ApiEnvVariables';
import { injectable } from 'inversify';
import { env } from 'process';

@injectable()
export class ApiEnvLoader implements EnvLoader<ApiEnvVariables> {
  protected innerIndex: Index<ApiEnvVariables> | undefined;

  constructor() {
    this.innerIndex = undefined;
  }

  public get index(): Index<ApiEnvVariables> {
    if (this.innerIndex !== undefined) {
      this.load();
    }
    return this.innerIndex as Index<ApiEnvVariables>;
  }

  public load(): void {
    this.innerIndex = {
      API_URL: env.API_URL as string,
    };
  }
}
