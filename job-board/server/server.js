import { ApolloServer } from '@apollo/server';
import { expressMiddleware as appoloMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { authMiddleware, handleLogin } from './auth.js';
import { readFile } from 'fs/promises';
import { resolvers } from './resolvers.js';

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

const typeDefs = await readFile('./schema.graphql', 'utf-8');

const appoloServer = new ApolloServer({ typeDefs, resolvers });
await appoloServer.start();
app.use('/graphql', appoloMiddleware(appoloServer));

app.listen({ port: PORT }, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});
