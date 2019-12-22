import React, { useEffect } from 'react';
import Header from '../../utils/Header';
import { useStore, useSelector } from 'react-redux'
import { ArticleInfo, ChangePageQueryHookResult } from '../../utils/schemeType';
import { ActionCreator_change_page, ActionCreator_change_list } from './redux/action';

const Blog = () => {
    return (
        <div id="blog-page">
            <Header last_word="blog" />
            <ChangePageHandler />
            <ArticleListDisplay />
            <ArticleButton />
        </div>
    )
}

const ArticleListDisplay = () => {
    const articleList = useSelector((state: any) => state.articleList);
    if (!articleList) {
        return (<div></div>)
    }
    return (
        <div>{
            articleList.map((each_article: ArticleInfo) => {
                return (
                    <div key={each_article.title}>
                        <h2>{each_article.title}</h2>
                        <p>{each_article.description}</p>
                    </div>)
            })}
        </div>
    )
}
const ChangePageHandler = () => {
    const store = useStore()
    const page = useSelector((state: any) => state.page)
    const variables: ChangePageQueryVariables = {
        page: page,
        list_amount: 5
    }
    const result: ChangePageQueryHookResult = useChangePageQuery({
        variables: variables
    })
    const { data, loading, error } = result;
    useEffect(() => {
        if (!data) {
            return;
        }
        const articleList = data.getBlogArticles
        store.dispatch(ActionCreator_change_list(
            { articleList: articleList }
        ))
    })
    return (
        <div>
            {loading ? <p>Loading...</p> : <p>page is {page}</p>}
        </div>
    )
}
import { useChangePageQuery, ChangePageQueryVariables } from '../../utils/schemeType'

const ArticleButton = () => {
    const store = useStore()
    const onClickNextPage = () => {
        store.dispatch(ActionCreator_change_page({ page: store.getState().page + 1 }))
    }
    const onClickPreviousPage = () => {
        store.dispatch(ActionCreator_change_page({ page: store.getState().page - 1 }))
    }
    return (
        <div>
            <a href="#" onClick={onClickPreviousPage} style={{ color: "red" }}>
                previous
            </a>

            <a href="#" onClick={onClickNextPage} style={{ color: "red" }}>
                next
            </a>

        </div>
    )
}

export default Blog
