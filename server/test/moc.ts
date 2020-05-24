import { ArticleInfo } from '../src/@types/resolverType'

export const getBlogArticles_mocData: (num: number) => ArticleInfo[] = (num: number) => Array.from({ length: num }, (_, i) => i).map((i: number) => {
    return {
        id: "0",
        title: `TITLE${i}`,
        pubDate: "2019-12-18",
        lastUpdate: "2019-12-18",
        descript: `これはテスト記事第${i}弾です。正式リリースまでこうご期待`,
        link: "https://dummy.com"
    }
})



export const getCurrentArticleList_mocData: ArticleInfo[] = [{
    id: "0",
    title: "TITLE1",
    pubDate: "2019-12-18",
    lastUpdate: "2019-12-18",
    descript: "これはテスト記事第一弾です。正式リリースまでこうご期待",
    link: "https://dummy.com"
}, {
    id: "1",
    title: "TITLE2",
    pubDate: "2019-12-18",
    lastUpdate: "2019-12-18",
    descript: "これはテスト記事第2弾です。正式リリースまでこうご期待",
    link: "https://dummy.com"
}, {
    id: "2",
    title: "TITLE3",
    pubDate: "2019-12-18",
    lastUpdate: "2019-12-18",
    descript: "これはテスト記事第3弾です。正式リリースまでこうご期待",
    link: "https://dummy.com"
}]