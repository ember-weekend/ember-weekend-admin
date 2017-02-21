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

// Temporary until https://github.com/samselikoff/ember-cli-mirage/pull/1018
// is merged
if (typeof Object.assign !== 'function') {
  Object.assign = function(target) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
