import jwt from 'jsonwebtoken';
import { privateKey } from '../config';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, privateKey);
    const userId = decodedToken._id;
    if (req.body._id && req.body._id !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};