import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true),
    validateLength({ min: 4, max: 30 }),
  ],
  tagline: [
    validatePresence(true),
    validateLength({ min: 1, max: 50 }),
  ],
  bio: [
    validatePresence(true),
    validateLength({ min: 10, max: 300 }),
  ],
  url: [
    validatePresence(true),
    validateFormat({ type: 'url' }),
  ],
  avatarUrl: [
    validatePresence(true),
    validateFormat({ type: 'url' }),
  ],
};
