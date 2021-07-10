// import type definitions & resolvers then create new Apollo server and define path

import { ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

const server = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
	api: {
		bodyParser: false,
	},
};

export default server;
