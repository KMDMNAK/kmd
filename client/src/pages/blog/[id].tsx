import React, { IframeHTMLAttributes, useEffect, useState } from 'react'
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

const ArticleList = () => {
    // const mock: API.BlogPosts = (new Array(10).fill(null)).map(
    //     (_, i) => {
    //         const mockItem = {
    //             title: `Article${String(i)}`,
    //             desc: `これはテスト!記事${String(i)}です。`,
    //             imgSrc: "https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png",
    //             date: new Date(),
    //             id: "testuid"
    //         }
    //         return mockItem
    //     })
    // console.debug({ mock })
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
const ArticleView = (id: string): React.FC =>
    () => {
        const [article, setArticle] = useState<string>("")
        const [frameSize, setSize] = useState<Size>({
            width: "100%", height: "100%", isFirst: true
        })
        useEffect(() => {
            getBlogPage(id).then(text => setArticle(text))
        }, [null])
        return (<>
            <div className="post-full-content">
                <iframe src={getSrc(article)}
                    id="blog-frame"
                    width={frameSize.width}
                    height={frameSize.height}
                    scrolling="no"
                    onLoad={() => frameSize.isFirst ? changeFrameHeight('blog-frame', setSize) : () => { }}
                >
                </iframe>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: article }} /> */}
        </>)
    }

const Page: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    console.debug('Blog:id', { id })
    if (!id || typeof id !== "string") return <Error statusCode={404} />
    return <Template title={id} Content={ArticleView(id)} />
}

export default withChakra(Page)