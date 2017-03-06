import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showAdd() {
      this.set('isAdding', true);
    },
    hideAdd() {
      this.set('isAdding', false);
    }
  }
});
