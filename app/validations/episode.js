import {
  validatePresence,
  validateLength,
  validateNumber,
} from 'ember-changeset-validations/validators';

export default {
  number: [
    validatePresence(true),
    validateNumber(),
  ],
  title: [
    validatePresence(true),
    validateLength({ min: 4, max: 30 }),
  ],
  description: [
    validatePresence(true),
    validateLength({ min: 30, max: 300 }),
  ],
};
