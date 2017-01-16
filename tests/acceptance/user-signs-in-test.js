import { test } from 'qunit';
import moduleForAcceptance from 'admin/tests/helpers/module-for-acceptance';
import signIn from 'admin/tests/pages/sign-in';

moduleForAcceptance('Acceptance | user signs in');

test('visiting /sign-in', function(assert) {
  signIn.visit();

  andThen(function() {
    assert.equal(currentURL(), '/sign-in');
  });
});
