import Ember from 'ember';

const { computed: { sort } } = Ember;

export default Ember.Component.extend({
  episodeSort: ['number:desc'],
  sorted: sort('episodes', 'episodeSort')
});
