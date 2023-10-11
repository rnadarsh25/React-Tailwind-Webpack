import Post from '../../models/post_model.js';
import User from '../../models/user_model.js';

export default {
  Query: {
    async getPosts() {
      const posts = await Post.find();
      const sortedPosts = posts.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1
      );
      return sortedPosts;
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
        content: post.content,
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

    async addReply(_, args, context) {
      const { user } = context;
      const { postId, post } = args;
      const selectedPost = await Post.findById(postId);
      const newReplyPost = new Post({
        content: post.content,
        createdBy: user._id,
        repliedToPost: selectedPost._id,
      });

      await newReplyPost.save();
      selectedPost.replies = [newReplyPost._id, ...selectedPost.replies];
      await selectedPost.save();
      const postCreatedByUser = await User.findById(selectedPost?.createdBy);
      const newActivity = {
        user: user._id,
        message: 'replied to your bit',
      };
      postCreatedByUser.activity = [newActivity, ...postCreatedByUser.activity];
      await postCreatedByUser.save();
      return selectedPost;
    },

    async postLike(_, args, context) {
      const { user } = context;
      const { postId } = args;
      const selectedPost = await Post.findById(postId);
      const hasUserLiked = selectedPost.likedBy.some((usr) => {
        return usr.toString() === user._id.toString();
      });
      if (hasUserLiked) {
        selectedPost.likedBy = selectedPost.likedBy.filter(
          (usr) => usr.toString() !== user._id.toString()
        );
      } else {
        selectedPost.likedBy.push(user._id);
      }
      await selectedPost.save();
      if (!hasUserLiked) {
        const postCreatedByUser = await User.findById(selectedPost?.createdBy);
        const newActivity = {
          user: user._id,
          message: 'liked your bit',
        };
        postCreatedByUser.activity = [
          newActivity,
          ...postCreatedByUser.activity,
        ];
        await postCreatedByUser.save();
      }
      return selectedPost;
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
