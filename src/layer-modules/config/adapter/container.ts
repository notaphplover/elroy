import { Container } from 'inversify';
import { apiAdapter } from '../../api/adapter';
import { userAdapter } from '../../../data-modules/user/adapter';

export const container: Container = new Container();

container.load(apiAdapter.config.container);
container.load(userAdapter.config.container);
