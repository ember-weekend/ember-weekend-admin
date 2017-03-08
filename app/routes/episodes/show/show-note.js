import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('show-note', params.showNoteId);
  },
  serialize(model) {
    return { showNoteId: model.get('id') };
  },
});
