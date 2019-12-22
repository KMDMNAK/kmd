import React from "react";
//import { createStore } from '../client/src/components/toppage/redux/ToppageStore';
import dynamic from 'next/dynamic'
import { createStore } from '../client/components/toppage/redux/ToppageStore'
import { Provider } from 'react-redux'
const Toppage = dynamic(() => import('../client/components/toppage'))
let store: any = null
const PageIndex = (props: { reduxInitialStates: any }) => {
    console.log("in Index render", props)
    return (
        <Provider store={createStore(props.reduxInitialStates)}>
            <Toppage />
        </Provider>
    )
}

import toppageQuery from '../client/utils/graphql/queries/toppage.gql'

PageIndex.getInitialProps = async (args: any) => {
    console.log("index initial")
    const { apolloClient } = args;
    if (!apolloClient) {
        return { data: null }
    }
    const { data } = await apolloClient.query({ query: toppageQuery });
    const getCurrentArticleList = data.getCurrentArticleList
    const reduxInitialStates = { current_article_list: getCurrentArticleList }
    store = createStore(reduxInitialStates)
    return {
        reduxInitialStates: reduxInitialStates
    }
}

export default PageIndex;