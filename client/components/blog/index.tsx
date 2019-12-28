import React, { useEffect } from 'react';
import Header from '../../utils/Header';
import { useStore, useSelector } from 'react-redux'
import { ArticleInfo, ChangePageQueryHookResult } from '../../utils/schemeType';
import { ActionCreator_change_page, ActionCreator_change_list } from './redux/action';
import styles from './blog.css';
import Link from 'next/link';

const Blog = () => {
    return (
        <div id={styles["blog-page"]}>
            <Header last_word="blog" />
            <ArticleButton />
            <ChangePageHandler />
            <ArticleListDisplay />
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
                        <Link href={'/blog/' + each_article.link}><a href=""><h2>{each_article.title}</h2></a></Link>
                        <p>{each_article.descript}</p>
                    </div>)
            })}
        </div>
    )
}
const ChangePageHandler = () => {
    useEffect(() => {
        if (!data) {
            return;
        }
        console.log("in change pagehandler", data)
        const articleList = data.getBlogArticles
        if (articleList === []) {
            return;
        }
        store.dispatch(ActionCreator_change_list(
            { articleList: articleList }
        ))
    })
    const store = useStore()
    const page = useSelector((state: any) => state.page)
    const state: BlogStoreState = store.getState();
    const variables: ChangePageQueryVariables = {
        page: page,
        list_amount: 5
    }
    const result: ChangePageQueryHookResult = useChangePageQuery({
        variables: variables
    })
    if (state.changePageInitial) {
        return <p>page is {page}</p>
    }
    const { data, loading, error } = result;

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>page is {page}</p>}
        </div>
    )
}
import { useChangePageQuery, ChangePageQueryVariables } from '../../utils/schemeType'
import { BlogStoreState } from './blog';

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
