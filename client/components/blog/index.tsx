import React from 'react';
import Header from '../../utils/Header';
import { useStore } from 'react-redux'
import { BlogStoreState } from '../../components/blog/blog'
import { ArticleInfo } from '../../utils/schemeType';
const Blog = () => {
    return (
        <div id="blog-page">
            <Header last_word="blog" />
            <ArticleListDisplay />
        </div>
    )
}

const ArticleListDisplay = () => {
    const state: BlogStoreState = useStore().getState();
    return (
        <div>{
            state.articleList.map((each_article: ArticleInfo) => {
                return (
                    <div>
                        <h2>{each_article.title}</h2>
                        <p>{each_article.description}</p>
                    </div>)
            })}
        </div>
    )
}
export default Blog
