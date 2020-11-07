import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({ name: 'string', surname: 'string', email: 'string' });
const Users = mongoose.model('Users', usersSchema);

export class User {
  static async getUsers(req, res) {
     try {
       const users = await Users.find();

       res.json(users);
     } catch (e) {
       res.sendStatus(500);
     }
  }

  static async getUserById(req, res) {
    try {
      const user = await Users.findOne({ _id: req.params.id });

      res.json(user);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  static async addUser(req, res) {
    try {
      const user = await Users.create(req.body);

      res.json(user);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  static async removeUser(req, res) {
    try {
      await Users.deleteOne({ _id: req.body.id });

      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  static async updateUser(req, res) {
    try {
      const { id, ...data } = req.body;
      await Users.updateOne({ _id: id }, data);
      const user = await Users.find({ _id: id });

      res.json(user);
    } catch (e) {
      res.sendStatus(500);
    }
  }
}