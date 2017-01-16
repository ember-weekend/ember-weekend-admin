import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from 'admin/tests/helpers/module-for-acceptance';
import DummySuccessProvider from 'admin/tests/helpers/torii-dummy-success-provider';
import signIn from 'admin/tests/pages/sign-in';

moduleForAcceptance('Acceptance | user signs in');

test('visiting /sign-in', function(assert) {
  signIn.visit();

  andThen(function() {
    assert.equal(currentURL(), signIn.url);
  });
});

test('user fails to sign in with Github', function(assert) {
  const fail = Ember.Object.extend({
    open: function(){
      return Ember.RSVP.Promise.reject();
    }
  });
  this.application.register('torii-provider:github-oauth2', fail);
  assert.expect(2);
  signIn.visit();

  assert.ok(signIn.noErrors, 'Error is initially hidden');

  signIn
    .signInWithGithub();

  andThen(function() {
    assert.equal(signIn.error, 'Failed to sign in with Github');
  });
});

test('user signs in with github', function(assert) {
  this.application.register('torii-provider:github-oauth2', DummySuccessProvider);
  assert.expect(1);
  signIn.visit();

  signIn
    .signInWithGithub();

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
