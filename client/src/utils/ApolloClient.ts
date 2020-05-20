
import fetch from 'isomorphic-unfetch'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
const APOLLO_SERVER = process.env.APOLLO_SERVER
console.debug({ APOLLO_SERVER })
export const createApolloClient = () => {
    const endpoint = APOLLO_SERVER || "https://kmdserver.kmdmnak.now.sh/graphql"
    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: endpoint,
        fetch: fetch
    });
    const IS_BROWSER = !!process.browser;
    const client = new ApolloClient({
        cache,
        link,
        ssrMode: !IS_BROWSER, // Disables forceFetch on the server (so queries are only run once)
        connectToDevTools: IS_BROWSER,
    });
    return client
}