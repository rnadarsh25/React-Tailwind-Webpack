export default `#graphql

directive @authenticate on FIELD_DEFINITION
directive @authorize(roles: [ROLES!]!) on FIELD_DEFINITION

enum ROLES {
    ADMIN,
    USER
}

type Query {
    _: String
}

type Mutation {
    _: String
}

`;
