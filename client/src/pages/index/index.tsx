import React, { useState } from 'react'
import Link from 'next/link'
import { Text, Flex } from '@chakra-ui/react'

import { withChakra } from '../../utils/Chakra'
import Template from '../../components/PageTemplate'
import Card, { StyleContext } from '../../components/BlogPostCard'

import { ENGLISH_FONTFAMILY } from '../../utils/style'
import { getBlogHeaders } from '../../modules/api'
// import { convertBlogPosts } from '../../modules/convert'

import styles from './index.css'

const Introduction: React.FC<{ title: string, Content: React.FC }> = props => {
    return (<>
        <div className={styles.introductiontitle}>
            <Text fontSize="4xl" fontFamily={ENGLISH_FONTFAMILY}>{props.title}</Text>
        </div>
        <div>
            <props.Content />
        </div>
    </>)
}

const About = () => {
    return (<>
        <div className={styles.about}>
            <div className={styles.iconwrapper} >
                <span className={styles.icongithub}>
                    <a href="https://github.com/KMDMNAK">
                        <img width={30} height={30} src="/static/GitHub-Mark.png" />
                    </a>
                </span>
                <span className={styles.iconqiita}>
                    <a href="https://qiita.com/KMD">
                        <img width={30} height={30} src="/static/qiita-square.png" />
                    </a>
                </span>
            </div>
            <div >
                <p>とあるITエンジニアのHPです。</p>
                <p>技術系のブログやプロジェクトの紹介等を行っていく予定です。</p>
            </div>
        </div>
    </>)
}

const Blog = () => {
    const [articles, setArticles] = React.useState<API.Article[]>([])
    React.useEffect(() => {
        getBlogHeaders(3)
            .then(json => {
                // const items = convertBlogPosts(json)
                console.debug({ json })
                console.debug({ json })
                setArticles(json)
            })
    }, [null])
    return (<>
        <Flex wrap="wrap" justify="center" align="center" direction="row" shrink={1}>
            <StyleContext.Provider value={{ height: "350px", width: "320" }}>
                {articles.map(article => (
                    <div key={article.id}><Card {...article} /></div>
                ))}
            </StyleContext.Provider>
        </Flex>
    </>)
}

const Projects = () => {
    return (<>
        <div className={styles.projects}>
            <h3 style={{ textAlign: 'center' }}>
                Coming soon...
        </h3>
        </div>
    </>)
}

const Content = () => {
    return (<>
        <Introduction title={"About"} Content={About} />
        <Introduction title={"Blog"} Content={Blog} />
        <Introduction title={"Projects"} Content={Projects} />
    </>)
}
const Page = () => {
    return (<>
        <Template title="" Content={Content} />
    </>)
}

export default withChakra(Page)