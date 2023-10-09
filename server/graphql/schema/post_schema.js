export default `#graphql

type Post {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!

    #relative Data
    createdBy: User!
    likedBy: [User!]
    replies: [Post!]
    repliedToPost: Post
}

extend type Query {
    getPosts: [Post] @authenticate
    getPost(id:ID!): Post    
}

extend type Mutation {
    addPost(post: AddPostInput!): Post @authenticate
    updatePost(id: ID!, edits: UpdatePostInput!): Post @authenticate
    deletePost(id: ID!): Post @authenticate
}

input AddPostInput {
    content: String!
}

input UpdatePostInput {
    content: String
}

`;
