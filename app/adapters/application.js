import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';

export default JSONAPIAdapter.extend({
  session: Ember.inject.service(),
  host: config.apiUrl,
  headers: Ember.computed('session.currentUser.sessions.[]', function() {
    return {
      "Authorization": `Token ${this.get("session.currentUser.sessions.firstObject.token")}`,
    };
  })
});
