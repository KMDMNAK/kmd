import React from "react";
import blogQuery from '../../client/utils/graphql/queries/blog.gql'
import Blog from '../../client/components/blog/index';
import { TestQueryVariables } from '../../client/utils/schemeType'
import { BlogStoreState } from '../../client/components/blog/blog'

const AppBlog = () => {
    return (
        <Blog />
    )
}
AppBlog.getInitialProps = async (args: any) => {
    const { apolloClient } = args;
    if (!apolloClient) {
        return { data: null }
    }
    const variavles: TestQueryVariables = {
        page: 0,
        list_amount: 5
    }
    const { data } = await apolloClient.query({
        query: blogQuery,
        variables: variavles
    });
    const getBlogArticles = data.getBlogArticles
    const BlogStoreInitialProps: BlogStoreState = {
        articleList: getBlogArticles,
        page: 0,
        list_amount:5
    }
    return { reduxInitialProps:  BlogStoreInitialProps}
}

export default AppBlog;
