import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps, GetServerSidePropsResult } from 'next'

import Navicon from '@/components/Navicon'
import BarrenTree from '@/components/BarrenTree'
import Article from '@/components/blog/Article'
import BackwardButtons from '@/components/blog/BackButtons'
import ForwardButtons from '@/components/blog/ForwardButtons'
import SearchBox from '@/components/blog/SearchBox'

import styles from '@/styles/Blog.module.css'

import { ArticleProvider, ArticleConverter } from '@/modules/blog'
import { ArticleListAPIResponse } from '../api/articlelist'
import { useRouter } from 'next/dist/client/router'

interface BlogPageProps {
    articles: DataType.SerializedArticle[]
}

const BlogListPage: React.FC<BlogPageProps> = props => {
    const converter = new ArticleConverter()
    const [articles, setArticles] = useState<DataType.Article[]>(props.articles.map(converter.deserialize))
    const router = useRouter()
    const backClick = async () => {
        const page = parseInt(router.query.page as string)
        router.query.page = String(1 + (page ? page : 0))
        const res = await fetch(`/api/articlelist?page=${router.query.page}`)
        if (res.status > 300) return
        const { articles } = await res.json() as ArticleListAPIResponse
        setArticles(articles.map(converter.deserialize))
        router.push(router)
    }
    const mostBackClick = () => { }
    const forwardClick = async () => {
        const page = parseInt(router.query.page as string)
        if (page - 1 < 0) {
            return
        }
        router.query.page = String((page ? page : 0) - 1)
        const res = await fetch(`/api/articlelist?page=${router.query.page}`)
        if (res.status > 300) return
        const { articles } = await res.json() as ArticleListAPIResponse
        setArticles(articles.map(converter.deserialize))
        router.push(router)
    }
    const mostForwardClick = async () => {
        const res = await fetch(`/api/articlelist?page=${0}`)
        if (res.status > 300) return
        const { articles } = await res.json() as ArticleListAPIResponse
        setArticles(articles.map(converter.deserialize))
        router.query.page = String(0)
        router.push(router)
    }
    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navicon />
            <div className={styles.field}>
                <div className={styles["tree-wrapper"]}>
                    <div className={styles["tree-size-wrapper"]}>
                        <BarrenTree />
                    </div>
                </div>
                <SearchBox />
                <div className={styles["article-field"]}>
                    {articles
                        .map((article, i) => (
                            <div key={String(i)} style={{ position: 'absolute', left: "15%", top: 130 + 120 * i }}>
                                <Article {...article} />
                            </div>)
                        )}
                </div>
                <ForwardButtons forwardClick={forwardClick} mostForwardClick={mostForwardClick} />
                <BackwardButtons backClick={backClick} mostBackClick={mostBackClick} />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query
    const page = parseInt(query.page as string)
    let articles: any
    const converter = new ArticleConverter()
    try {
        const provider = new ArticleProvider()
        articles = await provider.getArticleList(page ? page : 0)
    } catch (e) {
        console.error(e)
        articles = []
    }
    return { props: { articles: articles.map(converter.serialize) } } as GetServerSidePropsResult<BlogPageProps>
}

export default BlogListPage
