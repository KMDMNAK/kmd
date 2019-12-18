import React from 'react';
//import Header from './Header'
import Header from '../../utils/Header'
import Navigation from './Navigation'
import ABOUT from './columns/About'
import BLOG from './columns/Blog'
import Projects from './columns/Projects'
import Notes from './columns/Notes'
import styles from './style.css'

import fetch from 'isomorphic-unfetch'
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks'

import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';


const endpoint = "https://kmdserver.kmdmnak.now.sh/graphql"
/*
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    uri: endpoint
});
*/


const cache = new InMemoryCache();
const link = new HttpLink({
    uri: endpoint,
    fetch: fetch
});
const client = new ApolloClient({
    cache,
    link
});




const App = () => {
    return (
        <ApolloProvider client={client}>
            <ApolloHookProvider client={client}>
                <div id={styles.top_page}>
                    <Header />
                    <Navigation />
                    <ABOUT />
                    <BLOG />
                    <Projects />
                    <Notes />
                </div>
            </ApolloHookProvider>
        </ApolloProvider>
    )
}

export default App; 