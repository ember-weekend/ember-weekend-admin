import { faker } from 'ember-cli-mirage';

export default function(server) {
  for (let i = 0; i < 5; i++) {
    server.create('episode', {
      number: String(i + 1),
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(3),
    });
    for (let j = 0; j < 5; j++) {
      let resource = server.create('resource');
      server.create('showNote', {
        episodeId: i + 1,
        resourceId: resource.id,
      });
    }
  }
}
