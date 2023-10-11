import Post from '../../models/post_model.js';
import User from '../../models/user_model.js';

export default {
  Query: {
    async getUsers(_, args) {
      const { name, email } = args.filter || { name: '', email: '' };
      const users = await User.find();
      const updatedUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(name?.toLowerCase()) ||
          user.email.toLowerCase().includes(email?.toLowerCase())
      );
      return updatedUsers;
    },
    async getUser(_, args) {
      const { id } = args;
      const user = await User.findById(id);
      return user;
    },
    getActivity(_, args, context) {
      const { user } = context;
      return user.activity;
    },
  },

  Mutation: {
    async addUser(_, args) {
      const { name, email, password } = args.user;
      const user = new User({
        name,
        email,
        password,
        userName: name.toLowerCase().replaceAll(' ', ''),
      });

      await user.save();
      const token = await user.generateAuthToken();
      return { user, token };
    },

    async updateUser(_, args, context) {
      const { id, user } = args;
      const updatedUser = await User.findByIdAndUpdate(id, user);
      return updatedUser;
    },
    async deleteUser(_, args) {
      const { id } = args;
      const user = await User.findByIdAndRemove(id);
      return user;
    },
  },

  User: {
    async posts(parent) {
      const posts = await Post.find({ createdBy: parent._id });
      return posts;
    },
  },
};
