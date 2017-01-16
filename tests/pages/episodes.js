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
    itemScope: '[test-id=episodes] .episode',
    item: {
      title: text('[test-id=episode-title]'),
      description: text('[test-id=episode-description]'),
    }
  }),
});
