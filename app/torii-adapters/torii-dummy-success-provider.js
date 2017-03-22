import Ember from 'ember';

function generateCode() {
  return 'fake-code';
}

export default Ember.Object.extend({
  open: function(){
    return Ember.RSVP.Promise.resolve({
      authorizationCode: generateCode(),
      provider: 'github-oauth2'
    });
  }
});
