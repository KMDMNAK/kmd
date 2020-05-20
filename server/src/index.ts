import express, { Router } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core'
import Apollo, { ApolloServer, gql } from 'apollo-server-express';
import Resolvers from './api/resolvers'
import typeDefs from './api/scheme.gql'
import { PORT } from './environment'

const app = express();

const resolvers: Apollo.IResolvers<any, any> = Resolvers as Apollo.IResolvers<any, any>;
const server = new ApolloServer({ typeDefs, resolvers, debug: true })
const logMiddleware: RequestHandler<ParamsDictionary, any, any> = (req, res, next) => {
    console.log({
        route: req.url
    })
    next()

}
const api = Router()
api.use(logMiddleware)
server.applyMiddleware({ app, path: '/api/graphql' })

app.use('/api', api)

app.listen({ port: PORT }, () => {
    console.log(`server's graphql path is  ${server.graphqlPath}`);
    console.log(`server starts at port number:${PORT}`);
})
