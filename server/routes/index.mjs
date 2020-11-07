import { User } from '../model/Users';

const API_KEY = '/api';

export default (app) => {
  // user routes
  app.get(`${API_KEY}/user`, User.getUsers);
  app.get(`${API_KEY}/user:id`, User.getUserById);
  app.post(`${API_KEY}/user`, User.addUser);
  app.put(`${API_KEY}/user`, User.updateUser);
  app.delete(`${API_KEY}/user`, User.removeUser);

}