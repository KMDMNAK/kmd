
import { QueryResolvers, ArticleInfo, QueryGetBlogArticlesArgs } from '../@types/resolverType'
import getBlogArticles from '../utils/queryBlog'
import getNotesArticles from '../utils/queryNotes'
const beforeMethod = (methodName: string) => {
    console.log({ methodName })
}
export const Query: QueryResolvers = {
    getCurrentArticleList: async (obj: any, args: any, context: any, info: any) => {
        beforeMethod("getCurrentArticleList")
        const limit = 3;
        const offset = 0;
        return await getBlogArticles(limit, offset)
    },
    getBlogArticles: async (obj: any, args: QueryGetBlogArticlesArgs, context: any, info: any) => {
        beforeMethod("getBlogArticles")
        const offset = args.list_amount * args.page;
        const limit = args.list_amount;
        return await getBlogArticles(limit, offset)
    },
    getCurrentNotesList: async (obj: any, args: any, context: any, info: any) => {
        const limit = 3;
        const offset = 0;
        return await getNotesArticles(limit, offset)
    },
    getNotesArticles: async (obj: any, args: QueryGetBlogArticlesArgs, context: any, info: any) => {
        const offset = args.list_amount * args.page;
        const limit = args.list_amount;
        return await getNotesArticles(limit, offset)
    }
}