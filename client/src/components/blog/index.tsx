import React, { useContext, useState } from 'react';
import { ArticleInfo, useChangePageQuery, ChangePageQueryVariables, ChangePageQuery } from '../../../@types/apolloType'


import Header from '../header';
import styles from './blog.css';

import Link from 'next/link';
import { blogContext } from '../contexts';


export type BlogStoreState = {
    articleList: [ArticleInfo] | undefined
    page: number
    list_amount: number,
    changePageInitial: boolean
}
export type ChangePageArgs = {
    page: number
}

export type ChangeListArgs = {
    articleList: any
}

const ArticleListDisplay = (props: { data: ChangePageQuery | undefined }) => {
    // const articleList = useSelector((state: any) => state.articleList);
    if (!props.data) return (<></>)
    return (
        <div>{
            props.data.getBlogArticles.map(each_article => (
                <div key={each_article?.title}>
                    <Link href={'/blog/' + each_article?.link}>
                        <a href="">
                            <h2>{each_article?.title}</h2>
                        </a>
                    </Link>
                    <p>{each_article?.descript}</p>
                </div>)
            )}
        </div>
    )
}
const ChangePageHandler = () => {
    const state = useContext(blogContext)
    const variables: ChangePageQueryVariables = { page: state.page, list_amount: LIST_AMOUNT }
    const { data, loading, error } = useChangePageQuery({ variables })

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>page is {state.page}</p>}
            <ArticleListDisplay data={data} />
        </div>
    )
}

const LIST_AMOUNT = 5
/**
 * operation button for next and previous
 */
const ArticleButton = (props: { children: React.ReactNode, articleList: any }) => {
    const [state, setState] = useState({ page: 0, articleList: props.articleList })

    const onClickNextPage = () => setState({ ...state, page: state.page + 1 })
    const onClickPreviousPage = () => setState({ ...state, page: state.page - 1 })

    return (
        <>
            <div>
                <span onClick={onClickPreviousPage} style={{ color: "red", margin: '10px' }}>
                    prev
                </span>
                <span onClick={onClickNextPage} style={{ color: "red" }}>
                    next
                </span>
            </div>
            <blogContext.Provider value={state}>
                {props.children}
            </blogContext.Provider>

        </>
    )
}

const Blog = (props: { data: ChangePageQuery }) => {
    const articleList = props.data.getBlogArticles
    return (
        <div id={styles["blog-page"]}>
            <Header last_word="blog" />
            <ArticleButton articleList={articleList}>
                <ChangePageHandler />
            </ArticleButton>
        </div>
    )
}

export default Blog
