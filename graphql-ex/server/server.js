import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
    type Query{
        greeting: String,
        name: String,
        age: Int
       }
       `;

const resolvers = {
	Query: {
		greeting: () => 'Hello GraphQL world!',
		name: () => 'John',
		age: () => 21,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const info = await startStandaloneServer(server, {
	listen: {
		port: 4000,
	},
});

console.log(`Server running on port ${info.url}`);
