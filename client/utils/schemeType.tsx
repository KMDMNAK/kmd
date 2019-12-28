import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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


export type AddArticleInfoInput = {
  id: Scalars['String'],
  link: Scalars['String'],
  descript?: Maybe<Scalars['String']>,
  pubDate?: Maybe<Scalars['String']>,
  lastUpdate?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  tags?: Maybe<Scalars['String']>,
  sentences?: Maybe<Scalars['String']>,
  likeCOunts?: Maybe<Scalars['Int']>,
  comments?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
};

export type AddArticleInfoPayload = {
   __typename?: 'addArticleInfoPayload',
  id?: Maybe<Scalars['String']>,
};

export type ArticleInfo = {
   __typename?: 'ArticleInfo',
  id: Scalars['String'],
  link: Scalars['String'],
  descript?: Maybe<Scalars['String']>,
  pubDate?: Maybe<Scalars['String']>,
  lastUpdate?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  tags?: Maybe<Scalars['String']>,
  sentences?: Maybe<Scalars['String']>,
  likeCOunts?: Maybe<Scalars['Int']>,
  comments?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  addArticleInfo?: Maybe<Array<Maybe<AddArticleInfoPayload>>>,
};


export type MutationAddArticleInfoArgs = {
  objects: Array<AddArticleInfoInput>
};

export type Query = {
   __typename?: 'Query',
  getCurrentArticleList: Array<Maybe<ArticleInfo>>,
  getBlogArticles: Array<Maybe<ArticleInfo>>,
};


export type QueryGetCurrentArticleListArgs = {
  test?: Maybe<Scalars['String']>
};


export type QueryGetBlogArticlesArgs = {
  page: Scalars['Int'],
  list_amount: Scalars['Int']
};


export type ChangePageQueryVariables = {
  page: Scalars['Int'],
  list_amount: Scalars['Int']
};


export type ChangePageQuery = (
  { __typename?: 'Query' }
  & { getBlogArticles: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'title' | 'pubDate' | 'lastUpdate' | 'descript' | 'link'>
  )>> }
);

export type ToppageQueryVariables = {};


export type ToppageQuery = (
  { __typename?: 'Query' }
  & { getCurrentArticleList: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'title' | 'pubDate' | 'lastUpdate' | 'descript' | 'link'>
  )>> }
);


export const ChangePageDocument = gql`
    query ChangePage($page: Int!, $list_amount: Int!) {
  getBlogArticles(page: $page, list_amount: $list_amount) {
    title
    pubDate
    lastUpdate
    descript
    link
  }
}
    `;
export type ChangePageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChangePageQuery, ChangePageQueryVariables>, 'query'> & ({ variables: ChangePageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ChangePageComponent = (props: ChangePageComponentProps) => (
      <ApolloReactComponents.Query<ChangePageQuery, ChangePageQueryVariables> query={ChangePageDocument} {...props} />
    );
    
export type ChangePageProps<TChildProps = {}> = ApolloReactHoc.DataProps<ChangePageQuery, ChangePageQueryVariables> | TChildProps;
export function withChangePage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangePageQuery,
  ChangePageQueryVariables,
  ChangePageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ChangePageQuery, ChangePageQueryVariables, ChangePageProps<TChildProps>>(ChangePageDocument, {
      alias: 'changePage',
      ...operationOptions
    });
};

/**
 * __useChangePageQuery__
 *
 * To run a query within a React component, call `useChangePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useChangePageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChangePageQuery({
 *   variables: {
 *      page: // value for 'page'
 *      list_amount: // value for 'list_amount'
 *   },
 * });
 */
export function useChangePageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChangePageQuery, ChangePageQueryVariables>) {
        return ApolloReactHooks.useQuery<ChangePageQuery, ChangePageQueryVariables>(ChangePageDocument, baseOptions);
      }
export function useChangePageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChangePageQuery, ChangePageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChangePageQuery, ChangePageQueryVariables>(ChangePageDocument, baseOptions);
        }
export type ChangePageQueryHookResult = ReturnType<typeof useChangePageQuery>;
export type ChangePageLazyQueryHookResult = ReturnType<typeof useChangePageLazyQuery>;
export type ChangePageQueryResult = ApolloReactCommon.QueryResult<ChangePageQuery, ChangePageQueryVariables>;
export const ToppageDocument = gql`
    query toppage {
  getCurrentArticleList {
    title
    pubDate
    lastUpdate
    descript
    link
  }
}
    `;
export type ToppageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ToppageQuery, ToppageQueryVariables>, 'query'>;

    export const ToppageComponent = (props: ToppageComponentProps) => (
      <ApolloReactComponents.Query<ToppageQuery, ToppageQueryVariables> query={ToppageDocument} {...props} />
    );
    
export type ToppageProps<TChildProps = {}> = ApolloReactHoc.DataProps<ToppageQuery, ToppageQueryVariables> | TChildProps;
export function withToppage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToppageQuery,
  ToppageQueryVariables,
  ToppageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ToppageQuery, ToppageQueryVariables, ToppageProps<TChildProps>>(ToppageDocument, {
      alias: 'toppage',
      ...operationOptions
    });
};

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