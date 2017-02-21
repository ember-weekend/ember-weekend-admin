import { Factory } from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  timeStamp(i) {
    return moment().startOf('day')
      .seconds(i)
      .format('mm:ss');
  }
});
