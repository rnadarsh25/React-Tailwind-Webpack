import User from '../../models/user_model.js';

export default {
  Query: {
    async login(_, args) {
      const { email, password } = args.creds;
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      return { user, token };
    },

    async logout(_, args, context) {
      const { user, token: activeToken } = context;
      user.tokens = user.tokens.filter((token) => token.token !== activeToken);
      await user.save();
      return user;
    },
  },
};
