import { ArticleInfo, ChangePageQueryHookResult } from '../../utils/schemeType'
import { QueryResult } from '@apollo/react-common'
export type BlogStoreState = {
    articleList: [ArticleInfo] | undefined
    page: number
    list_amount: number
}
export type ChangePageArgs = {
    page: number
}

export type ChangeListArgs = {
    articleList: any
}