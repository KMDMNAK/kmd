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
  link: Scalars['String'],
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

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


export type TestQueryVariables = {
  page: Scalars['Int'],
  list_amount: Scalars['Int']
};


export type TestQuery = (
  { __typename?: 'Query' }
  & { getBlogArticles: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'title' | 'pubDate' | 'lastUpdate' | 'description' | 'link'>
  )>> }
);

export type ToppageQueryVariables = {};


export type ToppageQuery = (
  { __typename?: 'Query' }
  & { getCurrentArticleList: Array<Maybe<(
    { __typename?: 'ArticleInfo' }
    & Pick<ArticleInfo, 'title' | 'pubDate' | 'lastUpdate' | 'description' | 'link'>
  )>> }
);
