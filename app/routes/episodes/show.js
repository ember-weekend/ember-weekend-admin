import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('episode', params.episodeId);
  },
  serialize(model) {
    return { episodeId: model.get('id') };
  },
});
