/* global localStorage */
import { sessionKey, userKey } from 'admin/torii-adapters/application';

function login() {
  let user = JSON.stringify({
    data: {
      attributes: {
        name: 'Chase McCarthy',
        username: 'code0100fun'
      },
      type: 'users',
      id: '1'
    }
  });
  let session = JSON.stringify({
    data: {
      attributes: {
        token: 'VALID'
      },
      relationships: {
        user: {
          data: { type: 'users', id: '1' }}
      },
      type: 'sessions',
      id: '1'
    }
  });
  localStorage.setItem(sessionKey, session);
  localStorage.setItem(userKey, user);
}

function logout() {
  localStorage.removeItem(sessionKey);
}

export { login, logout };
