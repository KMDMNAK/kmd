
import fetch from 'isomorphic-unfetch'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { APOLLO_SERVER } from '../environment'

export const createApolloClient = () => {
    let endpoint = APOLLO_SERVER
    endpoint = endpoint.endsWith('/api/graphql') ? endpoint : endpoint + '/api/graphql'
    console.log({ endpoint })
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

export type ApolloClientType = ApolloClient<NormalizedCacheObject>