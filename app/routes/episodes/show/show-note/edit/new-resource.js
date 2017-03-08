import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let episode = this.modelFor('episodes.show');
    let showNote = this.modelFor('episodes.show.show-note.edit');
    return {
      model: {},
      episode,
      showNote,
    };
  },
  setupController(controller, model) {
    controller.setProperties(model);
  },
  actions: {
    selectResource(episode, changeset, resource) {
      changeset.set('resource', resource);
      return this.transitionTo(
        'episodes.show.show-note.edit',
        episode, changeset);
    },
    save(changeset) {
      changeset.execute();
      let attrs = changeset.get('_content');
      let resource = this.store.createRecord('resource', attrs);

      return resource.save().then(() => {
        let episode = this.modelFor('episodes.show');
        let showNote = this.modelFor('episodes.show.show-note.edit');
        return this.transitionTo(
          'episodes.show.show-note.edit',
          episode, showNote);
      }).catch((e) => {
        resource.destroyRecord();
        throw e;
      });
    }
  }
});
