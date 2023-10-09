export default `#graphql

extend type Query {
    login(creds: LoginUserInput!): LoggedInUser
    logout: User @authenticate
}

input LoginUserInput {
    email: String!
    password: String!
}

`;
