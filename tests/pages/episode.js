import {
  create,
  visitable,
  text,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/episodes/:episodeId'),
  episode: {
    scope: '[test-id=episode]',
    title: text('[test-id=episode-title]'),
    description: text('[test-id=episode-description]'),
  }
});
