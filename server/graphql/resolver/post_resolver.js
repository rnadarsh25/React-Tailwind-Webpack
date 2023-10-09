import Post from '../../models/post_model.js';
import User from '../../models/user_model.js';

export default {
  Query: {
    async getPosts() {
      return await Post.find();
    },

    async getPost(_, args) {
      const { id } = args;
      return await Post.findById(id);
    },
  },

  Mutation: {
    async addPost(_, args, context) {
      const { user } = context;
      const { post } = args;
      const newPost = new Post({
        content,
        createdBy: user._id,
      });
      await newPost.save();
      return newPost;
    },

    async updatePost(_, args) {
      const { id, edits } = args;
      const updatedPost = await Post.findByIdAndUpdate(id, edits);
      return updatedPost;
    },

    async deletePost(_, args) {
      const { id } = args;
      return await Post.findByIdAndRemove(id);
    },
  },

  Post: {
    async createdBy(parent) {
      const user = await User.findById(parent.createdBy);
      return user;
    },

    async replies(parent) {
      const replies = await Post.find({ repliedToPost: parent.id });
      return replies;
    },

    async repliedToPost(parent) {
      const repliedTo = await Post.findById(parent.repliedToPost);
      return repliedTo;
    },

    async likedBy(parent) {
      const users = await User.find();
      const likedByUser = parent.likedBy;
      return likedByUser.map((item) =>
        users.find((usr) => usr._id.toString() === item.toString())
      );
    },
  },
};
