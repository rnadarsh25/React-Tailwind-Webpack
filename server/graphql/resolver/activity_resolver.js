import User from '../../models/user_model.js';

export default {
  Activity: {
    async user(parent) {
      return await User.findById(parent.user);
    },
  },
};
