import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.authenticatedRoute('episodes', function() {
    this.route('show', { path: ':episodeId' }, function() {
      this.route('show-note', { path: 'show-note/:showNoteId' });
      this.route('show-note.edit', { path: 'show-note/:showNoteId/edit' }, function() {
        this.route('new-resource');
      });
      this.route('show-note.new', { path: 'show-note/new' }, function() {
        this.route('new-resource');
      });
    });
    this.route('edit', { path: ':episodeId/edit' });
  });
});

export default Router;
