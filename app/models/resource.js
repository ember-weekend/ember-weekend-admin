import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  url: attr('string'),
  title: attr('string'),
  authors: hasMany('person'),
  showNotes: hasMany(),
});
