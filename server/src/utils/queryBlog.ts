
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

export default getBlogArticles;