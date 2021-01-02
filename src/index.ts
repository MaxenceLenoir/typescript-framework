import {UserEdit} from './views/UserEdit';
import {User} from './models/User';

const user = User.buildUser({name: 'NAME', age: 20 })

const userEdit = new UserEdit(
  document.getElementById('root'),
  user
)

userEdit.render()

console.log(userEdit);
