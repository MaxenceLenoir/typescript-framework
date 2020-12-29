import {User} from './models/User';

const user = new User({name: 'Max', age: 27})

user.on('change', () => {
  console.log('#1')
});
user.on('change', () => {
  console.log('#2')
});
user.trigger('change');
