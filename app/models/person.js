import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  handle: attr('string'),
  url: attr('string'),
  avatarUrl: attr('string'),
  tagline: attr('string'),
  bio: attr('string'),
  resources: hasMany('resource', { inverse: 'authors' }),
  episodes: hasMany('episode', { inverse: 'guests' }),
});
