import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getCurrentArticleList: Array<Maybe<ArticleInfo>>;
  getBlogArticles: Array<Maybe<ArticleInfo>>;
  getCurrentNotesList: Array<Maybe<ArticleInfo>>;
  getNotesArticles: Array<Maybe<ArticleInfo>>;
};


export type QueryGetBlogArticlesArgs = {
  page: Scalars['Int'];
  list_amount: Scalars['Int'];
};


export type QueryGetNotesArticlesArgs = {
  page: Scalars['Int'];
  list_amount: Scalars['Int'];
};

export type ArticleInfo = {
  __typename?: 'ArticleInfo';
  id: Scalars['String'];
  link: Scalars['String'];
  descript?: Maybe<Scalars['String']>;
  pubDate?: Maybe<Scalars['String']>;
  lastUpdate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['String']>;
  likeCount?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticleInfo?: Maybe<Array<Maybe<AddArticleInfoPayload>>>;
};


export type MutationAddArticleInfoArgs = {
  objects: AddArticleInfoInput;
};

export type AddArticleInfoInput = {
  code?: Maybe<Scalars['String']>;
  ArticleInfos?: Maybe<Array<ArticleInfoInput>>;
  to: Scalars['String'];
};

export type ArticleInfoInput = {
  id: Scalars['String'];
  link: Scalars['String'];
  descript?: Maybe<Scalars['String']>;
  pubDate?: Maybe<Scalars['String']>;
  lastUpdate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['String']>;
  likeCount?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type AddArticleInfoPayload = {
  __typename?: 'addArticleInfoPayload';
  id?: Maybe<Scalars['String']>;
};

export type ChangePageQueryVariables = {
  page: Scalars['Int'];
  list_amount: Scalars['Int'];
};


export type ChangePageQuery = (
  { __typename?: 'Query' }
  & { getBlogArticles: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'title' | 'pubDate' | 'lastUpdate' | 'descript' | 'link'>
  )>> }
);

export type NotesQueryVariables = {};


export type NotesQuery = (
  { __typename?: 'Query' }
  & { getNotesArticles: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'id' | 'title' | 'sentences'>
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
export const NotesDocument = gql`
    query notes {
  getNotesArticles(page: 0, list_amount: 10) {
    id
    title
    sentences
  }
}
    `;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        return ApolloReactHooks.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
      }
export function useNotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = ApolloReactCommon.QueryResult<NotesQuery, NotesQueryVariables>;
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