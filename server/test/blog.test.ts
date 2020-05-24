import { getCurrentArticleList_mocData, getBlogArticles_mocData } from '../../test/moc'
import { ArticleInfo } from '../src/@types/resolverType'
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