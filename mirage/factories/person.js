import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.name.findName(); },
  handle() { return faker.internet.userName(); },
  url() { return faker.internet.url(); },
  avatarUrl() { return faker.image.imageUrl(); },
  tagline() { return faker.lorem.sentence(); },
  bio() { return faker.lorem.sentences(4); },
});
