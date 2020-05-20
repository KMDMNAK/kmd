import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks'
//import { createStore } from '../client/components/toppage/redux/ToppageStore';
import { createApolloClient } from '../src/utils/ApolloClient'
import Header from "../src/utils/Header";


const client = createApolloClient();


const App = (props) => {
    let { Component, pageProps } = props;
    console.log("render _app.js")
    console.log(pageProps.store)
    if (Component.isMDXComponent) {
        return (
            <div>
                <Header last_word="NOTE!" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous" />
                <Component {...pageProps} />
            </div>
        )
    }
    if (Component.isUsingApollo) {
        return (
            <ApolloProvider client={client}>
                <ApolloHookProvider client={client}>
                    <Component {...pageProps} />
                </ApolloHookProvider>
            </ApolloProvider>
        )
    }
    return (<Component {...pageProps} />)
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