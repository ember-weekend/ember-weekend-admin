import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('episodes');
    }
  },
  signInWith(provider) {
    const session = this.get('session');
    return this.get('session').open(provider).then(() => {
      if (session.attemptedTransition) {
        session.attemptedTransition.retry();
        session.attemptedTransition = null;
      } else {
        this.transitionTo('episodes');
      }
    });
  },
  actions: {
    signInWithGithub() {
      const { controller } = this;
      set(controller, 'error', null);
      this.signInWith('github-oauth2')
      .catch(() => {
        set(controller, 'error', 'Failed to sign in with Github');
      });
    }
  }
});
