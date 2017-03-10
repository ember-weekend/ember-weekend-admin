import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('episode', params.episodeId);
  },
  serialize(model) {
    return { episodeId: model.get('id') };
  },
  actions: {
    removeAuthor(resource, author) {
      resource.get('authors').removeObject(author);
      return resource.content.save();
    },
    addAuthor(resource, author) {
      resource.get('authors').addObject(author);
      return resource.content.save();
    },
  },
});
