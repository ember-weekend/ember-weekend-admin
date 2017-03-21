import Ember from 'ember';

const { computed: { sort } } = Ember;

export default Ember.Component.extend({
  peopleSort: ['name'],
  sorted: sort('people', 'peopleSort')
});
