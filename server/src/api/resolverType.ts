import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AddArticleInfoInput = {
  code?: Maybe<Scalars['String']>,
  ArticleInfos?: Maybe<Array<ArticleInfoInput>>,
  to: Scalars['String'],
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
  likeCount?: Maybe<Scalars['Int']>,
  comments?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
};

export type ArticleInfoInput = {
  id: Scalars['String'],
  link: Scalars['String'],
  descript?: Maybe<Scalars['String']>,
  pubDate?: Maybe<Scalars['String']>,
  lastUpdate?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  tags?: Maybe<Scalars['String']>,
  sentences?: Maybe<Scalars['String']>,
  likeCount?: Maybe<Scalars['Int']>,
  comments?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  addArticleInfo?: Maybe<Array<Maybe<AddArticleInfoPayload>>>,
};


export type MutationAddArticleInfoArgs = {
  objects: AddArticleInfoInput
};

export type Query = {
   __typename?: 'Query',
  getCurrentArticleList: Array<Maybe<ArticleInfo>>,
  getBlogArticles: Array<Maybe<ArticleInfo>>,
  getCurrentNotesList: Array<Maybe<ArticleInfo>>,
  getNotesArticles: Array<Maybe<ArticleInfo>>,
};


export type QueryGetBlogArticlesArgs = {
  page: Scalars['Int'],
  list_amount: Scalars['Int']
};


export type QueryGetNotesArticlesArgs = {
  page: Scalars['Int'],
  list_amount: Scalars['Int']
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ArticleInfo: ResolverTypeWrapper<ArticleInfo>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  addArticleInfoInput: AddArticleInfoInput,
  ArticleInfoInput: ArticleInfoInput,
  addArticleInfoPayload: ResolverTypeWrapper<AddArticleInfoPayload>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ArticleInfo: ArticleInfo,
  String: Scalars['String'],
  Int: Scalars['Int'],
  Mutation: {},
  addArticleInfoInput: AddArticleInfoInput,
  ArticleInfoInput: ArticleInfoInput,
  addArticleInfoPayload: AddArticleInfoPayload,
  Boolean: Scalars['Boolean'],
};

export type AddArticleInfoPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['addArticleInfoPayload'] = ResolversParentTypes['addArticleInfoPayload']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ArticleInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleInfo'] = ResolversParentTypes['ArticleInfo']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  descript?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pubDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastUpdate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sentences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  likeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  other?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addArticleInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['addArticleInfoPayload']>>>, ParentType, ContextType, RequireFields<MutationAddArticleInfoArgs, 'objects'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCurrentArticleList?: Resolver<Array<Maybe<ResolversTypes['ArticleInfo']>>, ParentType, ContextType>,
  getBlogArticles?: Resolver<Array<Maybe<ResolversTypes['ArticleInfo']>>, ParentType, ContextType, RequireFields<QueryGetBlogArticlesArgs, 'page' | 'list_amount'>>,
  getCurrentNotesList?: Resolver<Array<Maybe<ResolversTypes['ArticleInfo']>>, ParentType, ContextType>,
  getNotesArticles?: Resolver<Array<Maybe<ResolversTypes['ArticleInfo']>>, ParentType, ContextType, RequireFields<QueryGetNotesArticlesArgs, 'page' | 'list_amount'>>,
};

export type Resolvers<ContextType = any> = {
  addArticleInfoPayload?: AddArticleInfoPayloadResolvers<ContextType>,
  ArticleInfo?: ArticleInfoResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
