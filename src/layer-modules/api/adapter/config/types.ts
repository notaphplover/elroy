// eslint-disable-next-line @typescript-eslint/typedef
export const API_ADAPTER_TYPES = {
  api: {
    API_AXIOS_CONSUMER: Symbol.for('ApiAxiosconsumer'),
    AXIOS_STATIC: Symbol.for('AxiosStatic'),
  },
  env: {
    API_ENV_LOADER: Symbol.for('ApiEnvLoader'),
  },
};

// eslint-disable-next-line @typescript-eslint/typedef
export const API_PUBLIC_ADAPTER_TYPES = {
  api: {
    API_AXIOS_CONSUMER: API_ADAPTER_TYPES.api.API_AXIOS_CONSUMER,
  },
  env: {
    API_ENV_LOADER: API_ADAPTER_TYPES.env.API_ENV_LOADER,
  },
};
