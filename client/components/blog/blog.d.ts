import { ArticleInfo } from '../../utils/schemeType'

export type BlogStoreState = {
    articleList: [ArticleInfo]
    page: number
    list_amount: number
}
export type ChangePageArgs = {
    page: number
}