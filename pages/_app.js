import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks'
//import { createStore } from '../client/components/toppage/redux/ToppageStore';
import { createApolloClient } from '../client/utils/ApolloClient'

const client = createApolloClient();
const App = (props) => {
    let { Component, pageProps } = props;
    console.log("render _app.js")
    console.log(pageProps.store)
    return (
        <ApolloProvider client={client}>
            <ApolloHookProvider client={client}>
                <Component {...pageProps} />
            </ApolloHookProvider>
        </ApolloProvider>
    )
}

App.getInitialProps = async ({ Component, router, ctx }) => {
    console.log("get Initial")
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ apolloClient: client })
    }
    return { pageProps }
}

export default App