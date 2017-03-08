import Ember from 'ember';

const {
  inject: { service },
  computed,
} = Ember;

export default Ember.Component.extend({
  store: service(),
  resources: computed(function() {
    return this.get('store').findAll('resource');
  }),
  actions: {
    newResource() {
      if (this.newResource) {
        this.newResource();
      }
    },
    selectResource(resource) {
      if (this.selectResource) {
        this.selectResource(resource);
      }
    }
  }
});
