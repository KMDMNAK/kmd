import gql from 'graphql-tag';
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


