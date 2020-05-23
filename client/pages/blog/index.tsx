import React from "react";
// import blogQuery from '../../src/utils/graphql/queries/blog.gql'
import Blog from '../../src/components/blog/index';
import { ChangePageQueryVariables, ArticleInfo, ChangePageQueryHookResult, ChangePageDocument, ChangePageQuery } from '../../@types/apolloType'
import { createStore } from '../../src/components/blog/redux/BlogStore'
import { Provider } from 'react-redux'
import { ApolloClientType } from '../../src/utils/ApolloClient'

interface BlogProps {
    data: ChangePageQuery | null
}
const AppBlog = (props: { data: ChangePageQuery }) => <Blog {...props} />


AppBlog.getInitialProps = async (args: { apolloClient: ApolloClientType }): Promise<BlogProps> => {
    const { apolloClient } = args;
    if (!apolloClient) return { data: null }
    const variavles: ChangePageQueryVariables = {
        page: 0,
        list_amount: 5
    }
    const { data } = await apolloClient.query<ChangePageQuery>({
        query: ChangePageDocument,
        variables: variavles
    });
    if (!data) return { data: null }
    return { data }
}
AppBlog.isUsingApollo = true;
export default AppBlog;
