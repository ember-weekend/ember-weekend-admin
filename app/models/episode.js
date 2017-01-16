import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  number: attr('number'),
  title: attr(),
  description: attr(),
  slug: attr(),
  releaseDate: attr('date'),
  filename: attr(),
  duration: attr(),
});
