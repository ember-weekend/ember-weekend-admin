import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  actions: {
    accessDenied() {
      this.transitionTo('sign-in');
    },
    error(e) {
      let status = ~~get(e, 'errors.0.status');

      if (status === 401) {
        let session = this.get('session');
        session.close();
        this.transitionTo('sign-in');
      } else {
        return true;
      }
    }
  }
});
