import Ember from 'ember';
import ResourceValidations from 'admin/validations/resource';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

const { get } = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    let model = get(this, 'resource');
    this.changeset = new Changeset(model,
      lookupValidator(ResourceValidations),
      ResourceValidations);
    this.changeset.validate();
  },
});
