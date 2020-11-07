import { User } from '../model/Users';

const API_KEY = '/api';

export default (app) => {
  // users
  app.get(`${API_KEY}/users`, User.getUsers);
  app.get(`${API_KEY}/users:id`, User.getUserById);
}