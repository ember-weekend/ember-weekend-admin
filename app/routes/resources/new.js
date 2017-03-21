import Ember from 'ember';
import ResourceValidations from 'admin/validations/resource';
import Changeset from 'ember-changeset';
import isChangeset from 'ember-changeset/utils/is-changeset';
import lookupValidator from 'ember-changeset-validations';

function wrapChangeset(model) {
  let changeset = new Changeset(model,
    lookupValidator(ResourceValidations),
    ResourceValidations);
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
  serialize(model) {
    return { resourceId: model.get('id') };
  },
  actions: {
    save(changeset) {
      changeset.execute();
      let attrs = changeset.get('_content');
      let resource = this.store.createRecord('resource', attrs);

      return resource.save().then(() => {
        return this.transitionTo('resources.show', resource);
      }).catch((e) => {
        resource.destroyRecord();
        throw e;
      });
    }
  }
});
