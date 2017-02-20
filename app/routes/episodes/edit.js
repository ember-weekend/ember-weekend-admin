import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('episode', params.episodeId);
  },
  actions: {
    save(changeset) {
      changeset.execute();
      return changeset.save().then((episode) => {
        return this.transitionTo('episodes.show', episode);
      });
    },
    rollback(changeset) {
      return changeset.rollback();
    },
  },
  serialize(model) {
    return { episodeId: model.get('id') };
  },
});
