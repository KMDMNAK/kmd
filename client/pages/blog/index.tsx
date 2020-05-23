import React from "react";
// import blogQuery from '../../src/utils/graphql/queries/blog.gql'
import Blog from '../../src/components/blog/index';
import { ChangePageQueryVariables, ArticleInfo, ChangePageQueryHookResult, ChangePageDocument } from '../../@types/apolloType'
import { createStore } from '../../src/components/blog/redux/BlogStore'
import { Provider } from 'react-redux'

export type BlogStoreState = {
    articleList: [ArticleInfo] | undefined
    page: number
    list_amount: number,
    changePageInitial: boolean
}
export type ChangePageArgs = {
    page: number
}

export type ChangeListArgs = {
    articleList: any
}

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
        query: ChangePageDocument,
        variables: variavles
    });
    if (!data) {
        return null;
    }
    const getBlogArticles = data.getBlogArticles
    const BlogStoreInitialStates: BlogStoreState = {
        articleList: getBlogArticles,
        page: 0,
        list_amount: 5,
        changePageInitial: true
    }
    return { reduxInitialStates: BlogStoreInitialStates }
}
AppBlog.isUsingApollo = true;
export default AppBlog;
