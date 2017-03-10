import Ember from 'ember';
import PersonValidations from 'admin/validations/person';
import Changeset from 'ember-changeset';
import isChangeset from 'ember-changeset/utils/is-changeset';
import lookupValidator from 'ember-changeset-validations';

function wrapChangeset(model) {
  let changeset = new Changeset(model,
    lookupValidator(PersonValidations),
    PersonValidations);
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
      let person = this.store.createRecord('person', attrs);

      return person.save().then(() => {
        return this.transitionTo('people.show', person);
      }).catch((e) => {
        person.destroyRecord();
        throw e;
      });
    }
  }
});
