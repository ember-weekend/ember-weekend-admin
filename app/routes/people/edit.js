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
  model(params) {
    return this.store.findRecord('person', params.personId);
  },
  setupController(controller, model) {
    if (!isChangeset(model)) {
      model = wrapChangeset(model);
    }
    controller.set('model', model);
  },
  serialize(model) {
    return { personId: model.get('id') };
  },
  actions: {
    save(changeset) {
      return changeset.save().then((person) => {
        return this.transitionTo('people.show', person);
      });
    }
  }
});
