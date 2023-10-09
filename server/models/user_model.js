import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Post from './post_model.js';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error('Invalid Email!');
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password'))
        throw new Error('Password should not contain password!');
    },
  },
  role: {
    type: String,
    default: 'USER',
  },
  tokens: [
    {
      token: String,
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  activity: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      message: String,
    },
  ],
});

//static method

UserSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid Credentials!');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid Credentials!');
  return user;
};

//instance methods
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign(
    {
      _id: user._id.toString(),
    },
    process.env.JWT_SIGNATURE
  );

  user.tokens = [{ token }, ...user.tokens];
  await user.save();
  return token;
};

// pre-save middleware
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const updatedPassword = await bcrypt.hash(user.password, 8);
    user.password = updatedPassword;
  }
  next();
});

UserSchema.pre('findByIdAndRemove', async function (next) {
  const user = this;
  await Post.deleteMany({ createdBy: user._id });
  next();
});

const User = mongoose.model('User', UserSchema);
export default User;
