import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import connectDB from '../config/db.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';

import typeDefs from '../graphql/schema/index.js';
import resolvers from '../graphql/resolver/index.js';
import auth from '../middleware/auth.js';
import {
  authenticateDirectiveTransformer,
  authorizeDirectiveTransformer,
} from '../graphql/directive/index.js';

env.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

//connect to DB
connectDB();

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

schema = authenticateDirectiveTransformer(schema, 'authenticate');
schema = authorizeDirectiveTransformer(schema, 'authorize');

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
  context: async ({ req }) => {
    await auth(req);
    const { isAuthenticated, user, userRole, token } = req;
    return {
      isAuthenticated,
      user,
      userRole,
      token,
    };
  },
});

console.log(`server is up and running at ${url}`);
