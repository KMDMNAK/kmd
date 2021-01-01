import React from 'react'
import './global.css'

const App = (props: { Component: any, pageProps: any }) => {
    let { Component, pageProps } = props;
    console.log("render _app.js")
    console.log(pageProps.store)
    if (Component.isMDXComponent) {
        return (
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous" />
                <Component {...pageProps} />
            </div>
        )
    }
    return (<Component {...pageProps} />)
}

App.getInitialProps = async ({ Component, router, ctx }: { Component: any, router: any, ctx: any }) => {
    let pageProps = {}
    return { pageProps }
}

export default App