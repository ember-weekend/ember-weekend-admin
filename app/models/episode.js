import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  number: attr('number'),
  title: attr(),
  description: attr(),
  slug: attr(),
  releaseDate: attr('date'),
  filename: attr(),
  duration: attr(),
  showNotes: hasMany(),
});
