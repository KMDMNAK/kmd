import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks'
import { Provider } from 'react-redux'
import { createStore } from '../client/components/toppage/redux/ToppageStore';
import { createApolloClient } from '../client/utils/ApolloClient'

const client = createApolloClient();

const App = (props) => {
    let { Component, pageProps } = props;
    return (
        <ApolloProvider client={client}>
            <ApolloHookProvider client={client}>
                {pageProps.reduxInitialProps ? (
                    <Provider store={createStore(pageProps.reduxInitialProps)}>
                        <Component {...pageProps} />
                    </Provider>
                ) : (<Component {...pageProps} />)
                }
            </ApolloHookProvider>
        </ApolloProvider>
    )
}

App.getInitialProps = async ({ Component, router, ctx }) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ apolloClient: client })
    }
    return { pageProps }
}


export default App