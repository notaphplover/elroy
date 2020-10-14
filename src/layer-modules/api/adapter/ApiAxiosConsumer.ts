import * as axios from 'axios';
import { inject, injectable } from 'inversify';
import { API_ADAPTER_TYPES } from './config/types';
import { StatusCodes } from 'http-status-codes';
import { UnexpectedResponseError } from './error/UnexpectedResponseError';

@injectable()
export class ApiAxiosConsumer {
  constructor(
    @inject(API_ADAPTER_TYPES.api.AXIOS_STATIC)
    private readonly axiosClient: axios.AxiosStatic,
  ) {}

  public async post<TBodyRequest = unknown, TBodyResponse = unknown>(
    url: string,
    body?: TBodyRequest,
    headers?: unknown,
  ): Promise<TBodyResponse> {
    const response: axios.AxiosResponse<TBodyResponse> = await this.axiosClient.post(
      url,
      body,
      {
        headers,
      },
    );

    if (response.status !== StatusCodes.CREATED) {
      throw new UnexpectedResponseError(
        response.status,
        'Unexpected response HTTP status code',
      );
    }

    return response.data;
  }
}
