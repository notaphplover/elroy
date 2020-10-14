export class UnexpectedResponseError extends Error {
  constructor(public readonly statusCode: number, message: string) {
    super(message);
  }
}
