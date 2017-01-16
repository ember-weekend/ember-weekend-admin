import { test } from 'qunit';
import moduleForAcceptance from 'admin/tests/helpers/module-for-acceptance';
import page from 'admin/tests/pages/episodes';
import { login } from 'admin/tests/helpers/auth';

moduleForAcceptance('Acceptance | user views episode list');

test('visiting /episodes', function(assert) {
  login();
  server.createList('episode', 3, {
    title(i) {
      return ['first', 'second', 'third'][i];
    },
    description(i) {
      return ['desc1', 'desc2', 'desc3'][i];
    },
  });
  page.visit();

  andThen(function() {
    assert.equal(currentURL(), page.url);
    assert.equal(page.episodes().count, 3);
    assert.equal(page.episodes(0).title, '1 - first');
    assert.equal(page.episodes(0).description, 'desc1');
    assert.equal(page.episodes(1).title, '2 - second');
    assert.equal(page.episodes(1).description, 'desc2');
    assert.equal(page.episodes(2).title, '3 - third');
    assert.equal(page.episodes(2).description, 'desc3');
  });
});
