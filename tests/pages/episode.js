import {
  create,
  visitable,
  collection,
  text,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/episodes/:episodeId'),
  episode: {
    scope: '[data-test-episode]',
    title: text('[data-test-episode-title]'),
    description: text('[data-test-episode-description]'),
  },
  showNotes: collection({
    scope: '[data-test-show-notes]',
    item: {
      timeStamp: text('[data-test-show-note-timestamp]'),
      title: text('[data-test-show-note-resource-title]'),
    }
  })
});
