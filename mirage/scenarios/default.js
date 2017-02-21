import { faker } from 'ember-cli-mirage';

export default function(server) {
  for (let i = 0; i < 5; i++) {
    let episode = server.create('episode', {
      number: String(i + 1),
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(3),
    });
    for (let j = 0; j < 5; j++) {
      let person = server.create('person');
      let resource = server.create('resource', {
        authors: [person]
      });
      server.create('showNote', {
        episode,
        resource
      });
    }
  }
}
