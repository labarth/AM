import jwt from 'jsonwebtoken';
import { User } from '../model/Users';
import authMiddleware from '../middlewares/auth';
import { privateKey } from '../config';

const API_KEY = '/api';

export default (app) => {
  // user routes
  app.get(`${API_KEY}/user`, authMiddleware, User.getUsers);
  app.get(`${API_KEY}/user/:id`, User.getUserById);
  app.post(`${API_KEY}/user`, User.addUser);
  app.put(`${API_KEY}/user`, User.updateUser);
  app.delete(`${API_KEY}/user`, User.removeUser);


  app.post(`${API_KEY}/authcheck`, async (req, res) => {
    try {
      const { token } = req.body;
      const decodedToken = await jwt.verify(token, privateKey);
      const user = {
        name: decodedToken.name,
        surname: decodedToken.surname,
        email: decodedToken.email,
        _id: decodedToken._id,
      }

      res.json(user);
    } catch (error) {
      res.sendStatus(401)
    }
  });


  app.post(`${API_KEY}/login`, User.login);

}