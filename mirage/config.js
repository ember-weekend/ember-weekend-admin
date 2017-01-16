import config from '../config/environment';
export default function() {
  this.urlPrefix = config.apiUrl;

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
