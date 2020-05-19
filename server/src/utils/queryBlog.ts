
import fetch from 'node-fetch'
const URL_queryBlog = "https://wenppy.com/api/kmd/query.py"
const getBlogArticles = async (limit: number, offset: number = 0) => {
    const response = await fetch(URL_queryBlog, {
        method: "POST", body: JSON.stringify({
            query: {
                limit: limit,
                offset: offset,
                sorting_option: {
                    columnName: "pubDate"
                },
            },
            code: "givemee!",
            table: "blog"
        })
    }).then((v: any) => {
        return {
            result: v.json(),
            status: true
        }
    }).catch(e => {
        return {
            result: e.toString(),
            status: false
        }
    })
    const response_result = await response.result
    const response_status = await response.status
    //const result: ArticleInfo[] = getCurrentArticleList_mocData
    // ApolloサーバーからDBサーバー間でのエラー
    if (!response_status) {
        throw Error(response_result)
    }
    // DBサーバーでのエラー
    if (!response_result.status) {
        throw Error(response_result.result)
    }
    return response_result.result
}
import { getCurrentArticleList_mocData, getBlogArticles_mocData } from '../api/moc'
import { ArticleInfo } from '../api/resolverType'
export const getBlogArticles_mock = (args: any) => {
    const contents = getBlogArticles_mocData(100)
    const contents_amount = getBlogArticles_mocData(100).length;
    // 指定したpageがコンテンツ量を超えていた場合
    const maxPage = Math.ceil(contents_amount / args.list_amount);
    const indexes: number[] = maxPage < args.page ?
        [args.list_amount * maxPage, contents_amount] :
        [args.list_amount * args.page, args.list_amount * args.page + args.list_amount]

    /*
        page=1 list_amount=4 -> offset=4
        page=2 list_amount=2 -> offset=4
        page=15 , list_amount=4 -> offset=60
    */

    const getContents = (start_offset: number, last_offset: number) => {
        return contents.slice(start_offset, last_offset)
    }
    const result: ArticleInfo[] = getContents(indexes[0], indexes[1])
    return result
}
export default getBlogArticles;