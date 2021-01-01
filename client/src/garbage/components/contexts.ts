import { createContext } from 'react'
export const currentArticleListContext = createContext({
    loading: false
})

export const blogContext = createContext({
    articleList: [],
    page: 0
})