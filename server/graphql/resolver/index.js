import userResolver from './user_resolver.js';
import postResolver from './post_resolver.js';
import activityResolver from './activity_resolver.js';
import loginResolver from './login_resolver.js';

export default {
  Query: {
    ...userResolver.Query,
    ...postResolver.Query,
    ...loginResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...postResolver.Mutation,
  },
  User: {
    ...userResolver.User,
  },
  Post: {
    ...postResolver.Post,
  },
  Activity: {
    ...activityResolver.Activity,
  },
};
