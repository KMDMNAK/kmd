import React from "react";
//import { createStore } from '../client/src/components/toppage/redux/ToppageStore';
import dynamic from 'next/dynamic'
const Toppage = dynamic(() => import('../client/components/toppage'))

const Index = (props: any) => {
    console.log("in Index render", props)
    return (
        <Toppage />
    )
}

import toppageQuery from '../client/utils/graphql/queries/toppage.gql'

Index.getInitialProps = async (args: any) => {
    const { apolloClient } = args;
    if (!apolloClient) {
        return { data: null }
    }
    const { data } = await apolloClient.query({ query: toppageQuery });
    const getCurrentArticleList = data.getCurrentArticleList
    return { reduxInitialProps: { current_article_list: getCurrentArticleList }}
}

export default Index;