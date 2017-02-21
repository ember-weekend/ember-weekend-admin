import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  number: attr('number'),
  title: attr('string'),
  description: attr('string'),
  slug: attr('string'),
  releaseDate: attr('date'),
  filename: attr('string'),
  duration: attr('string'),
  showNotes: hasMany(),
});
