import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  resource: belongsTo('resource'),
  episode: belongsTo('episode'),
  timeStamp: attr('string'),
  note: attr('string'),
  title: computed('note', 'resource.title', function() {
    return this.get('resource.title') || this.get('note');
  }),
});
