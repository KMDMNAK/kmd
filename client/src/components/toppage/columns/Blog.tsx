import React from 'react';
import styles from '../style.css'
import { useToppageQuery, ArticleInfo } from '../../../utils/schemeType';

const Blog = (props: { articles: any }) => {
    return (
        <div className={styles.column} id="BLOG">
            <h1>This is Blog</h1>
            <a href="/blog">My Blogs</a>
            <div>
                {!props.articles ? (<p>no article</p>) : (
                    props.articles.map((article: any) => (
                        <div className="article">
                            <h1>{article.title}</h1>
                            <p>{article.pubDate}</p>
                            <p>{article.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
Blog.getInitialProps = async () => {
    const toppageQuery = useToppageQuery();
    while (toppageQuery.loading) { }
    if (toppageQuery.data && toppageQuery.data.getCurrentArticleList) {
        return { articles: toppageQuery.data.getCurrentArticleList }
    } else {
        return { articles: null }
    }
}

export default Blog;