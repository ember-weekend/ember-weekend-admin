import Ember from 'ember';

const {
  inject: { service },
  computed
} = Ember;

export default Ember.Component.extend({
  store: service(),
  allPeople: computed(function() {
    return this.get('store').findAll('person');
  }),
  actions: {
    showAdd() {
      this.set('isAdding', true);
    },
    hideAdd() {
      this.set('isAdding', false);
    }
  }
});
