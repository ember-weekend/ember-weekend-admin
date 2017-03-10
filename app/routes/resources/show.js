import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('resource', params.resourceId);
  },
  serialize(model) {
    return { resourceId: model.get('id') };
  },
  actions: {
    removeAuthor(resource, author) {
      resource.get('authors').removeObject(author);
      return resource.save();
    },
    addAuthor(resource, author) {
      resource.get('authors').addObject(author);
      return resource.save();
    },
  }
});
