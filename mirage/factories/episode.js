import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  number(i) {
    return String(i + 1);
  },
  title() { return faker.lorem.words(3); },
  description() { return faker.lorem.sentences(3); },
});
