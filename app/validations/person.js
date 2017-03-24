import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true),
    validateLength({ min: 3, max: 30 }),
  ],
  tagline: [
    validateLength({ max: 100 }),
  ],
  bio: [
    validateLength({ max: 400 }),
  ],
  url: [
    validatePresence(true),
    validateFormat({ type: 'url' }),
  ],
  avatarUrl: [
    validateFormat({ type: 'url' }),
  ],
};
