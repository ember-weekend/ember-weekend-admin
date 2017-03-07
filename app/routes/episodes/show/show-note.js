import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('show-note', params.showNoteId);
  },
  serialize(model) {
    return { showNoteId: model.get('id') };
  },
  actions: {
    removeAuthor(resource, author) {
      resource.content.get('authors').removeObject(author);
      return resource.content.save();
    },
    addAuthor(resource, author) {
      resource.content.get('authors').addObject(author);
      return resource.content.save();
    },
  },
});
