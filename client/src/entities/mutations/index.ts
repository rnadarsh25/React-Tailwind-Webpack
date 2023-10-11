import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation AddPost($post: AddPostInput!) {
    addPost(post: $post) {
      id
      content
      likedBy {
        id
        name
      }
      createdBy {
        id
        name
        userName
        email
      }
    }
  }
`;

export const ADD_REPLY = gql`
  mutation AddReply($postId: ID!, $post: AddPostInput!) {
    addReply(postId: $postId, post: $post) {
      id
      content
      likedBy {
        id
        name
      }
      createdAt
      createdBy {
        id
        name
        userName
        email
      }
      repliedToPost {
        id
        content
        likedBy {
          id
          name
        }
        createdAt
        createdBy {
          id
          name
          userName
          email
        }
        replies {
          id
        }
      }
      replies {
        id
        content
        likedBy {
          id
          name
        }
        createdAt
        createdBy {
          id
          name
          userName
          email
        }
      }
    }
  }
`;

export const POST_LIKE = gql`
  mutation PostLike($postId: ID!) {
    postLike(postId: $postId) {
      id
      content
      likedBy {
        id
        name
      }
      createdAt
      createdBy {
        id
        name
        userName
        email
      }
      repliedToPost {
        id
        content
        likedBy {
          id
          name
          userName
        }
        createdAt
        createdBy {
          id
          name
          email
        }
        replies {
          id
        }
      }
      replies {
        id
        content
        likedBy {
          id
          name
        }
        createdAt
        createdBy {
          id
          name
          userName
          email
        }
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      id
      content
    }
  }
`;
