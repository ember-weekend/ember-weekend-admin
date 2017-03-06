import {
  validateFormat,
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  timeStamp: [
    validatePresence(true),
    validateFormat({ regex: /^\d{2}:\d{2}$/ }),
  ],
  resource: [
    validatePresence(true),
  ],
};
