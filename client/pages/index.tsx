import React from "react";
import dynamic from 'next/dynamic'
import { createStore } from '../src/components/toppage/redux/ToppageStore'
// import { Provider } from 'react-redux'
import { ApolloClientType } from '../src/utils/ApolloClient'
import { QueryGetBlogArticlesArgs } from '../@types/apolloType'
const Toppage = dynamic(() => import('../src/components/toppage'))
// let store: any = null

const Index = (props: { reduxInitialStates: any }) => {
    console.log("in Index render", props)
    return (
        <Provider store={createStore(props.reduxInitialStates)}>
            <Toppage />
        </Provider>
    )
}

import toppageQuery from '../src/utils/graphql/queries/toppage.gql'

Index.getInitialProps = async (args: { apolloClient: ApolloClientType }) => {
    console.log("index initial")
    const { apolloClient } = args;
    if (!apolloClient) return { data: null }
    const { data } = await apolloClient.query({ query: toppageQuery })
    if (!data) return { data: null };

    const getCurrentArticleList = data.getCurrentArticleList
    const reduxInitialStates = { current_article_list: getCurrentArticleList }
    // store = createStore(reduxInitialStates)
    return {
        reduxInitialStates: reduxInitialStates
    }
}
Index.isUsingApollo = true;
export default Index;