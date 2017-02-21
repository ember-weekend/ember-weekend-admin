import { test } from 'qunit';
import moduleForAcceptance from 'admin/tests/helpers/module-for-acceptance';
import page from 'admin/tests/pages/episode';
import { login } from 'admin/tests/helpers/auth';

moduleForAcceptance('Acceptance | user views episode');

test('visiting episode show', function(assert) {
  login();
  server.create('episode', {
    id: 1,
    number: '1',
    title: 'first',
    description: 'desc1',
  });
  page.visit({ episodeId: 1 });

  andThen(function() {
    assert.equal(currentURL(), '/episodes/1');
    assert.equal(page.episode.title, '1 - first');
    assert.equal(page.episode.description, 'desc1');
  });
});
