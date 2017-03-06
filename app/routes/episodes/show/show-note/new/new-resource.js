import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let episode = this.modelFor('episodes.show');
    return {
      model: {},
      episode,
    };
  },
  setupController(controller, model) {
    controller.setProperties(model);
  },
  actions: {
    save(changeset) {
      changeset.execute();
      let attrs = changeset.get('_content');
      let resource = this.store.createRecord('resource', attrs);

      return resource.save().then(() => {
        let episode = this.modelFor('episodes.show');
        return this.transitionTo('episodes.show.show-note.new', episode);
      }).catch((e) => {
        resource.destroyRecord();
        throw e;
      });
    }
  }
});
