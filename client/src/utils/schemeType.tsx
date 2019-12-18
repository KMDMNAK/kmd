import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type ArticleInfo = {
   __typename?: 'ArticleInfo',
  pubDate: Scalars['String'],
  lastUpdate: Scalars['String'],
  title: Scalars['String'],
  description: Scalars['String'],
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
   __typename?: 'Query',
  getCurrentArticleList: Array<Maybe<ArticleInfo>>,
};


export type QueryGetCurrentArticleListArgs = {
  test?: Maybe<Scalars['String']>
};


export type ToppageQueryVariables = {};


export type ToppageQuery = (
  { __typename?: 'Query' }
  & { getCurrentArticleList: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'title' | 'pubDate' | 'lastUpdate' | 'description'>
  )>> }
);


export const ToppageDocument = gql`
    query toppage {
  getCurrentArticleList {
    title
    pubDate
    lastUpdate
    description
  }
}
    `;

/**
 * __useToppageQuery__
 *
 * To run a query within a React component, call `useToppageQuery` and pass it any options that fit your needs.
 * When your component renders, `useToppageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToppageQuery({
 *   variables: {
 *   },
 * });
 */
export function useToppageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ToppageQuery, ToppageQueryVariables>) {
        return ApolloReactHooks.useQuery<ToppageQuery, ToppageQueryVariables>(ToppageDocument, baseOptions);
      }
export function useToppageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ToppageQuery, ToppageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ToppageQuery, ToppageQueryVariables>(ToppageDocument, baseOptions);
        }
export type ToppageQueryHookResult = ReturnType<typeof useToppageQuery>;
export type ToppageLazyQueryHookResult = ReturnType<typeof useToppageLazyQuery>;
export type ToppageQueryResult = ApolloReactCommon.QueryResult<ToppageQuery, ToppageQueryVariables>;