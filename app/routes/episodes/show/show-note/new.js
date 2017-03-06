import Ember from 'ember';

const {
  RSVP,
  get,
} = Ember;

export default Ember.Route.extend({
  model() {
    let episode = this.modelFor('episodes.show');
    let resources = this.store.findAll('resource');
    let people = this.store.findAll('person');
    return RSVP.hash({
      model: { episode },
      resources,
      people,
    });
  },
  setupController(controller, model) {
    controller.setProperties(model);
  },
  actions: {
    removeAuthor(resource, author) {
      let episode = this.modelFor('episodes.show');
      resource.get('authors').removeObject(author);
      return resource.save().then(() => {
        return this.transitionTo('episodes.show.show-note.new', episode);
      });
    },
    addAuthor(resource, author) {
      let episode = this.modelFor('episodes.show');
      resource.get('authors').addObject(author);
      return resource.save().then(() => {
        return this.transitionTo('episodes.show.show-note.new', episode);
      });
    },
    newResource(model) {
      return this.transitionTo('episodes.show.show-note.new.new-resource',
        get(model, 'episode'));
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
