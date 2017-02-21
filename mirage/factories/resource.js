import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.lorem.words(3); },
  url() { return faker.internet.url(); },
});
