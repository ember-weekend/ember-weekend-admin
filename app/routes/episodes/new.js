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
  model() {
    return {};
  },
  setupController(controller, model) {
    if (!isChangeset(model)) {
      model = wrapChangeset(model);
    }
    controller.set('model', model);
  },
  actions: {
    save(changeset) {
      changeset.execute();
      let attrs = changeset.get('_content');
      let episode = this.store.createRecord('episode', attrs);

      return episode.save().then((episode) => {
        return this.transitionTo('episodes.show', episode);
      }).catch((e) => {
        episode.destroyRecord();
        throw e;
      });
    }
  }
});
