import React from 'react';
import styles from '../style.css'
import { useStore } from 'react-redux';
import Link from 'next/link'

const Blog = () => {
    return (
        <div className={styles.column} id="BLOG">
            <h1>
                <Link href="/blog">My Blog</Link>
            </h1>
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
                <StyleJSX />
                {states.current_article_list.map((article: any) => (
                    <span className="article">
                        <Card>
                            <CardContent>
                                <h1>{article.title}</h1>
                                <p>{article.pubDate}</p>
                                <p>{article.description}</p>
                            </CardContent>
                        </Card>
                    </span>))
                }
            </div>
        )
    }
    return (<p>no articles</p>)
}

const style_context = `
.article{
    display:inline-block;
}

`

const StyleJSX = () => (
    <style jsx>
        {style_context}
    </style>
)



export default Blog;