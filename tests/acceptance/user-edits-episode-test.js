import { test } from 'qunit';
import moduleForAcceptance from 'admin/tests/helpers/module-for-acceptance';
import { login } from 'admin/tests/helpers/auth';
import page from 'admin/tests/pages/episode-edit';
import episodeShow from 'admin/tests/pages/episode';

moduleForAcceptance('Acceptance | user edits episode');

test('visiting episode edit', function(assert) {
  login();
  server.create('episode', {
    id: 1,
    number: '1',
    title: 'first',
    description: 'desc1',
  });
  page.visit({ episodeId: 1 });

  andThen(function() {
    assert.equal(currentURL(), '/episodes/1/edit');
    assert.equal(page.episode.title.value, 'first');
    assert.equal(page.episode.description.value, 'desc1');
  });

  let longerDesc = 'a longer description that validates';

  page.episode.title.fill('better title');
  page.episode.description.fill(longerDesc);
  page.episode.save();

  andThen(function() {
    assert.equal(currentURL(), '/episodes/1');
    assert.equal(episodeShow.episode.title, '1 - better title');
    assert.equal(episodeShow.episode.description, longerDesc);
  });
});
