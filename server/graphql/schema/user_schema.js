export default `#graphql

type Token {
    token: String!
}

type Activity {
    user: User!
    message: String!
}

type User {
    id: ID!
    name: String!
    userName: String!
    description: String
    email: String!
    tokens: [Token!]
    role: String!

    #relative Data
    posts: [Post!]
    activity: [Activity!]
}

type LoggedInUser {
    user: User!
    token: String!
}

extend type Query {
    getUsers(filter: FilterUserInput): [User] 
    getUser(id: ID!): User @authenticate
    getActivity: [Activity!] @authenticate
}

extend type Mutation {
    addUser(user: AddUserInput!): LoggedInUser
    updateUser(id: ID!, user: UpdateUserInput!): User @authenticate
    deleteUser(id: ID!): User @authenticate
}


input AddUserInput {
    name: String!
    email: String!
    password: String!
}

input UpdateUserInput {
    name: String
    email: String
    password: String
    description: String
    userName: String
}

input FilterUserInput {
    name:String
    email: String

}

`;
