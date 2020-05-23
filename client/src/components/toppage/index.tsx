import React from 'react'
import dynamic from 'next/dynamic'

import Header from '../header'
import Navigation from './navigation'
import ABOUT from './columns/about'
const BLOG = dynamic(() => import('./columns/blog'))
import Projects from './columns/projects'
import Notes from './columns/notes'

import styles from './style.css'

import { ToppageQuery, Maybe, ArticleInfo } from '../../../@types/apolloType'
export type CurrentArticleType = Maybe<{ __typename?: "ArticleInfo" | undefined; }
    & Pick<ArticleInfo, "title" | "pubDate" | "lastUpdate" | "descript" | "link">>

const ToppageComponent = (props: { toppage: ToppageQuery }) => {
    const current_article_list = props.toppage.getCurrentArticleList
    return (
        <div id={styles.top_page}>
            <Header last_word="development" />
            <Navigation />
            <ABOUT />
            <BLOG current_article_list={current_article_list} />
            <Projects />
            <Notes />
        </div>
    )
}

export default ToppageComponent