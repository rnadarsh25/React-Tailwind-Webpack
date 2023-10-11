import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
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
        replies {
          id
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      userName
      email
    }
  }
`;

export const SEARCH_USER = gql`
  query GetUsers($filter: FilterUserInput) {
    getUsers(filter: $filter) {
      id
      name
      userName
      email
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      userName
      email
      description
      posts {
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
            email
          }
          replies {
            id
          }
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
          email
        }
        replies {
          id
        }
      }
    }
  }
`;

export const GET_ACTIVITY = gql`
  query GetActivity {
    getActivity {
      user {
        id
        name
        userName
        email
      }
      message
    }
  }
`;

export const USER_LOGIN = gql`
  query Login($creds: LoginUserInput!) {
    login(creds: $creds) {
      user {
        id
        name
        userName
        email
      }
      token
    }
  }
`;

export const USER_LOGOUT = gql`
  query Logout {
    logout {
      id
      name
    }
  }
`;
