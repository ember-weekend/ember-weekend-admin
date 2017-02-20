import config from '../config/environment';
import DummySuccessProvider from 'admin/torii-adapters/torii-dummy-success-provider';

export function initialize(application) {
  if (config['ember-cli-mirage'].enabled) {
    application.register('torii-provider:github-oauth2', DummySuccessProvider);
  }
}

export default {
  name: 'torii-dev',
  initialize,
  before: 'torii'
};
