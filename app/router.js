import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.authenticatedRoute('home', { path: '/' });
  this.authenticatedRoute('episodes', function() {
  });

  this.route('episodes', function() {
    this.route('show', { path: ':episodeId' });
  });
});

export default Router;
