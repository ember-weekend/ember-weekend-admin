import Ember from 'ember';

export default Ember.Route.extend({
  serialize(model) {
    return { showNoteId: model.get('id') };
  },
});
