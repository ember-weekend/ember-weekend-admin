import {
  create,
  visitable,
  text,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/episodes/:episodeId'),
  episode: {
    scope: '[data-test-episode]',
    title: text('[data-test-episode-title]'),
    description: text('[data-test-episode-description]'),
  }
});
