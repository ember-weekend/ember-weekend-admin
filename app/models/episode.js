import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  published: attr('boolean'),
  number: attr('number'),
  title: attr('string'),
  description: attr('string'),
  slug: attr('string'),
  releaseDate: attr('string'),
  filename: attr('string'),
  byteLength: attr('number'),
  duration: attr('string'),
  showNotes: hasMany(),
  guests: hasMany('person'),
});
