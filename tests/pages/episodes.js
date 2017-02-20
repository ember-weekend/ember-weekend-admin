import {
  create,
  visitable,
  collection,
  text,
} from 'ember-cli-page-object';

const url = '/episodes';

export default create({
  url,
  visit: visitable(url),
  episodes: collection({
    itemScope: '[data-test-episodes] .episode',
    item: {
      title: text('[data-test-episode-title]'),
      description: text('[data-test-episode-description]'),
    }
  }),
});
