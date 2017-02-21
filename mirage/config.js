import config from '../config/environment';
import { buildAuth } from './auth';

export default function() {
  this.urlPrefix = config.apiUrl;
  const auth = buildAuth(this);

  auth.get('/episodes');
  auth.get('/episodes/:id');
  auth.patch('/episodes/:id');
  auth.get('/show-notes/:id');

  this.post('/sessions', function() {
    return {
      included: [{
        type: 'users',
        id: '1',
        attributes: {
          username: 'code0100fun',
          name: 'Chase McCarthy'
        }
      }],
      data: {
        type: 'sessions',
        relationships: {
          user: {
            data: {
              type: 'users',
              id: '1'
            }
          }
        },
        id: '1',
        attributes: {
          token: 'VALID'
        }
      }
    };
  });
}
