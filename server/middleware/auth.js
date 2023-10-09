import jwt from 'jsonwebtoken';
import User from '../models/user_model.js';

const auth = async (req) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
    if (!token) throw new Error();
    const decode = await jwt.verify(token, process.env.JWT_SIGNATURE);
    const user = await User.findOne({ _id: decode._id, 'tokens.token': token });
    if (!user) throw new Error();
    req.isAuthenticated = true;
    req.user = user;
    req.userRole = user.role;
    req.token = token;
  } catch (err) {
    req.isAuthenticated = false;
  }
};

export default auth;
