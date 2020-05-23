import React from 'react';
import styles from '../style.css'
import Link from 'next/link'

import { CurrentArticleType } from '../index'

const sentences = {
    introduction: "このブログでは主に技術や理論について触れていきたいと思っています。"
}

import { Card, CardContent } from '@material-ui/core'

interface BlogProps {
    current_article_list: CurrentArticleType[]
}
const ArticleList = (props: BlogProps) => {
    const current_article_list = props.current_article_list
    if (!current_article_list) return (<p>no articles</p>)
    return (
        <div>
            {current_article_list.map((article: CurrentArticleType) => (
                <span className={styles.article} key={article?.title}>
                    <Card>
                        <CardContent>
                            <Link href={'/blog/' + article?.link}>
                                <a href=""><h1>{article?.title}</h1></a>
                            </Link>
                            <p>{article?.pubDate}</p>
                            <p>{article?.descript}</p>
                        </CardContent>
                    </Card>
                </span>))
            }
        </div>
    )
}

const Blog = (props: BlogProps) => (
    <div className={styles.column} id="BLOG">
        <h1 id={styles.Blog_title}>
            <Link href="/blog"><a href="">My Blog</a></Link>
        </h1>
        <p>{sentences.introduction}</p>
        <ArticleList current_article_list={props.current_article_list} />
    </div>
)


export default Blog;