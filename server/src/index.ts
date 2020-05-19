import express from 'express';
import Apollo, { ApolloServer, gql } from 'apollo-server-express';
import Resolvers from './api/resolvers'
import typeDefs from './api/scheme.gql'

const app = express();
const PORT_NUMBER = 4000;

const resolvers: Apollo.IResolvers<any, any> = Resolvers as Apollo.IResolvers<any, any>;
const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: PORT_NUMBER }, () => {
    console.log(`server's graphql path is  ${server.graphqlPath}`);
    console.log(`server starts at port number:${PORT_NUMBER}`);
})
