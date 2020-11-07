import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({ name: 'string', surname: 'string', email: 'string' });
const Users = mongoose.model('Users', usersSchema);

export class User {
  static async getUsers(req, res) {
      const users = await Users.find();

      res.json(users);
  }

  static async getUserById(req,res) {
    const user = await Users.findOne({ _id: req.params.id });

    res.json(user);
  }
}