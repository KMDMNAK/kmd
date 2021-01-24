import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Error from 'next/error';

import { Flex } from "@chakra-ui/react"

import { withChakra } from '../../utils/Chakra'
import Template from '../../components/PageTemplate'
import Card from '../../components/BlogPostCard'
import { getBlogHeaders, getBlogPage } from '../../modules/api'


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

const getSrc = (html?: string) => {
    if (!html) return ""
    const blob = new Blob([html], { type: 'text/html' });
    return URL.createObjectURL(blob);
}


const Page: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    console.debug('Blog:id', { id })
    return <Template title="Blog" Content={ArticleList} />
}

export default withChakra(Page)