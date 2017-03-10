import Ember from 'ember';
import ShowNoteValidations from 'admin/validations/show-note';
import Changeset from 'ember-changeset';
import isChangeset from 'ember-changeset/utils/is-changeset';
import lookupValidator from 'ember-changeset-validations';

function wrapChangeset(model) {
  let changeset = new Changeset(model,
    lookupValidator(ShowNoteValidations),
    ShowNoteValidations);
  changeset.validate();
  return changeset;
}


export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('show-note', params.showNoteId);
  },
  setupController(controller, model) {
    if (!isChangeset(model)) {
      model = wrapChangeset(model);
    }
    controller.set('model', model);
  },
  serialize(model) {
    return { showNoteId: model.get('id') };
  },
  actions: {
    selectResource(episode, changeset, resource) {
      changeset.set('resource', resource);
      return this.transitionTo(
        'episodes.show.show-note.edit',
        episode, changeset);
    },
    newResource(episode, changeset) {
      changeset.set('resource', null);
      return this.transitionTo(
        'episodes.show.show-note.edit.new-resource',
        episode, changeset);
    },
    save(changeset) {
      changeset.execute();

      return changeset.save().then((showNote) => {
        let episode = showNote.get('episode');
        return this.transitionTo('episodes.show.show-note',
          episode, showNote);
      }).catch((e) => {
        throw e;
      });
    },
  },
});
