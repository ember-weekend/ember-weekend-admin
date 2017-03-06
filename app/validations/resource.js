import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  url: [
    validatePresence(true),
    validateFormat({ type: 'url' }),
  ],
  title: [
    validatePresence(true),
    validateLength({ min: 4, max: 30 }),
  ],
};
