import React, { createContext, IframeHTMLAttributes, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Error from 'next/error';

import { Flex } from "@chakra-ui/react"

import { withChakra } from '../../utils/Chakra'
import Template from '../../components/PageTemplate'
import Card from '../../components/BlogPostCard'
import { getBlogHeaders, getBlogPage } from '../../modules/api'

import "./postglobal.css"
import "./post.css"
// import "/static/css/blog.css"

const ArticleList = () => {
    const [articles, setArticles] = useState<API.Article[]>([])
    useEffect(() => {
        getBlogHeaders(30).then(json => setArticles(json))
    }, [null])
    return (
        <>
            <Flex wrap="wrap" justify="center" align="center" direction="row" shrink={1}>
                {articles.map((article, i) => <>
                    <Card {...article} key={article.id} />
                    {/* <Spacer /> */}
                </>)}
            </Flex>
        </>
    )
}

const changeFrameHeight = (iframeId: string, setSize: React.Dispatch<React.SetStateAction<Size>>
) => {
    var docFrame = document.getElementById(iframeId);
    if (!docFrame) return
    const contentsHeight = ((docFrame as any).contentWindow.document as Document).body.scrollHeight
    if (!isNaN(contentsHeight) && contentsHeight !== 0) {
        setSize({ width: "100%", height: `${contentsHeight}px`, isFirst: false })
    }
}

const getSrc = (html?: string) => {
    if (!html) return ""
    console.debug({ html })
    const blob = new Blob([html], { type: 'text/html' });
    return URL.createObjectURL(blob);
}
type Size = {
    width: string,
    height: string,
    isFirst: boolean
}
const ArticleContext = createContext<API.Article | null>(null)

const ArticleView: React.FC<{}> = () => {
    const article = useContext(ArticleContext)
    if (!article) return <></>
    const [frameSize, setSize] = useState<Size>({
        width: "100%", height: "100%", isFirst: true
    })
    return (<>
        <div className="post-full-content">
            {/* {article && <iframe src={getSrc(article.html)}
                id="blog-frame"
                width={frameSize.width}
                height={frameSize.height}
                scrolling="no"
                onLoad={() => frameSize.isFirst ? changeFrameHeight('blog-frame', setSize) : () => { }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    maxWidth: '1040px'
                }}
            >
            </iframe>} */}
            <div dangerouslySetInnerHTML={{ __html: article.html || "" }} />
        </div>
    </>)
}

const Page: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    console.debug('Blog:id', { id })
    if (!id || typeof id !== "string") return <Error statusCode={404} />
    const [article, setArticle] = useState<API.Article | null>(null)
    useEffect(() => {
        getBlogPage(id).then(item => setArticle(item))
    }, [null])
    return (
        <ArticleContext.Provider value={article}>
            <Template title={article ? article.title || "" : ""} Content={ArticleView} />
        </ArticleContext.Provider>
    )
}

export default withChakra(Page)