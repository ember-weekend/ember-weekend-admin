import {
  create,
  visitable,
  fillable,
  value,
  clickable,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/episodes/:episodeId/edit'),
  episode: {
    scope: '[data-test-episode-edit]',
    title: {
      scope: '[data-test-episode-title] input',
      value: value(),
      fill: fillable(),
    },
    description: {
      scope: '[data-test-episode-description] textarea',
      value: value(),
      fill: fillable(),
    },
    save: clickable('[data-test-save-btn]'),
  }
});
