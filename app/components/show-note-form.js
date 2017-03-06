import Ember from 'ember';
import ShowNoteValidations from 'admin/validations/show-note';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

const { get } = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    let model = get(this, 'showNote');
    this.changeset = new Changeset(model,
      lookupValidator(ShowNoteValidations),
      ShowNoteValidations);
    this.changeset.validate();
  },
  actions: {
    selectResource(resource) {
      this.set('changeset.resource', resource);
      if (this.selectResource) {
        this.selectResource(resource);
      }
    }
  }
});
