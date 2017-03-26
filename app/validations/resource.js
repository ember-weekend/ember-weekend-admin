import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';
import or from 'ember-changeset-hofs/utils/or';

function isUndefinedOrNull() {
  return (key, newValue) => {
    return typeof(newValue) === 'undefined' || newValue === null || newValue === '';
  };
}

export default {
  url: or(
    isUndefinedOrNull(),
    validateFormat({ type: 'url' })
  ),
  title: [
    validatePresence(true),
    validateLength({ min: 4, max: 150 }),
  ],
};
