import Ember from 'ember';
import ShowNoteValidations from 'admin/validations/show-note';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

export default Ember.Route.extend({
  model() {
    let episode = this.modelFor('episodes.show');
    let model = { episode };
    let changeset = new Changeset(model,
      lookupValidator(ShowNoteValidations),
      ShowNoteValidations);
    changeset.validate();
    return changeset;
  },
  actions: {
    selectResource(episode, changeset, resource) {
      changeset.set('resource', resource);
      return this.transitionTo(
        'episodes.show.show-note.new',
        episode);
    },
    newResource(episode, changeset) {
      changeset.set('resource', null);
      return this.transitionTo(
        'episodes.show.show-note.new.new-resource',
        episode);
    },
    save(changeset) {
      changeset.execute();
      let attrs = changeset.get('_content');
      let showNote = this.store.createRecord('show-note', attrs);

      return showNote.save().then((showNote) => {
        let episode = showNote.get('episode');
        return this.transitionTo('episodes.show.show-note',
          episode, showNote);
      }).catch((e) => {
        showNote.destroyRecord();
        throw e;
      });
    },
  },
});
