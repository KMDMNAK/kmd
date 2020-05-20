import express from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core'
import Apollo, { ApolloServer, gql } from 'apollo-server-express';
import Resolvers from './api/resolvers'
import typeDefs from './api/scheme.gql'

const app = express();
const PORT_NUMBER = 4000;

const resolvers: Apollo.IResolvers<any, any> = Resolvers as Apollo.IResolvers<any, any>;
const server = new ApolloServer({ typeDefs, resolvers, debug: true })

const logMiddleware: RequestHandler<ParamsDictionary, any, any> = (req, res, next) => {
    console.log({
        route: req.url
    })
    next()
}
app.use(logMiddleware)
server.applyMiddleware({ app })

app.listen({ port: PORT_NUMBER }, () => {
    console.log(`server's graphql path is  ${server.graphqlPath}`);
    console.log(`server starts at port number:${PORT_NUMBER}`);
})
