import { Message } from '../../domain/model/Message';

export const APP_ERROR_EVENT_TYPE = 'appErrorEvent';

export class AppMessageEvent<TMesage extends Message> extends Event {
  constructor(public readonly message: TMesage) {
    super(APP_ERROR_EVENT_TYPE);
  }
}
