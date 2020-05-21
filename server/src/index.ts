import app from './server'
import { PORT } from './environment'

app.listen({ port: PORT }, () => {
    // console.log(`server's graphql path is  ${server.graphqlPath}`);
    console.log(`server starts at port number:${PORT}`);
})