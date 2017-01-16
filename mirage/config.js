import config from '../config/environment';

export default function() {
  this.namespace = config.apiUrl;

  this.post('/sessions', function() {
    return { token: '123456' };
  });
}
