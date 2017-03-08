import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('person', params.personId);
  },
  serialize(model) {
    return { personId: model.get('id') };
  }
});
