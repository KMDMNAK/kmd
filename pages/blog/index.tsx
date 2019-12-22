import React from "react";
import blogQuery from '../../client/utils/graphql/queries/blog.gql'
import Blog from '../../client/components/blog/index';
import { ChangePageQueryVariables } from '../../client/utils/schemeType'
import { BlogStoreState } from '../../client/components/blog/blog'
import { createStore } from '../../client/components/blog/redux/BlogStore'
import { Provider } from 'react-redux'

const AppBlog = (props: { reduxInitialStates: any }) => {
    return (
        <Provider store={createStore(props.reduxInitialStates)}>
            <Blog />
        </Provider>
    )
}
AppBlog.getInitialProps = async (args: any) => {
    const { apolloClient } = args;
    if (!apolloClient) {
        return { data: null }
    }
    const variavles: ChangePageQueryVariables = {
        page: 0,
        list_amount: 5
    }
    const { data } = await apolloClient.query({
        query: blogQuery,
        variables: variavles
    });
    const getBlogArticles = data.getBlogArticles
    const BlogStoreInitialStates: BlogStoreState = {
        articleList: getBlogArticles,
        page: 0,
        list_amount: 5
    }
    return { reduxInitialStates: BlogStoreInitialStates }
}

export default AppBlog;
