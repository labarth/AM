import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const usersSchema = new mongoose.Schema({
  name: 'string',
  surname: 'string',
  email: 'string',
  password: 'string',
});
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
      const { password, ...userData } = req.body;
      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(password, saltRounds);
      await Users.create({ ...userData, password: hashPassword });

      res.sendStatus(200);
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

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });

      if (user.password === password) {
        return res.json(user);
      }

      throw ({ code: 400, message: 'incorrect login or password'});

    } catch(e) {
      if (e.code === 400) {
        return res.json(e.message);
      }
      res.sendStatus(500);
    }
  }
}