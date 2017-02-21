import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  include: function(request) {
    if (request.params.id) {
      return ['showNotes'];
    } else {
      return [];
    }
  }
});
