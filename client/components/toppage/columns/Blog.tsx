import React from 'react';
import styles from '../style.css'
import { useStore } from 'react-redux';
import Link from 'next/link'
import { ArticleInfo } from '../../../utils/schemeType'
const sentences = {
    introduction: "このブログでは主に技術や理論について触れていきたいと思っています。"
}

const Blog = () => {
    return (
        <div className={styles.column} id="BLOG">
            <h1 id={styles.Blog_title}>
                <Link href="/blog">My Blog</Link>
            </h1>
            <p>{sentences.introduction}</p>
            <ArticleList />
        </div>
    )
}

import { Card, CardContent } from '@material-ui/core'

const ArticleList = () => {
    const store = useStore()
    const states = store.getState();
    if (states.current_article_list) {
        return (
            <div>
                {states.current_article_list.map((article: ArticleInfo) => (
                    <span className={styles.article}>
                        <Card>
                            <CardContent>
                                <Link href={'/blog/'+article.link}>
                                    <h1><a href="">{article.title}</a></h1>
                                </Link>
                                <p>{article.pubDate}</p>
                                <p>{article.descript}</p>
                            </CardContent>
                        </Card>
                    </span>))
                }
            </div>
        )
    }
    return (<p>no articles</p>)
}


export default Blog;