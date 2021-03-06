import Ember from 'ember';
import EpisodeValidations from 'admin/validations/episode';
import Changeset from 'ember-changeset';
import isChangeset from 'ember-changeset/utils/is-changeset';
import lookupValidator from 'ember-changeset-validations';

function wrapChangeset(model) {
  let changeset = new Changeset(model,
    lookupValidator(EpisodeValidations),
    EpisodeValidations);
  changeset.validate();
  return changeset;
}

export default Ember.Route.extend({
  model(params) {
    return this.store.find('episode', params.episodeId);
  },
  setupController(controller, model) {
    if (!isChangeset(model)) {
      model = wrapChangeset(model);
    }
    controller.set('model', model);
  },
  serialize(model) {
    return { episodeId: model.get('id') };
  },
  actions: {
    save(changeset) {
      return changeset.save().then((episode) => {
        return this.transitionTo('episodes.show', episode);
      });
    }
  }
});
