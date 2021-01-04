import React from 'react'

import { withChakra } from '../../utils/Chakra'
import Template from '../../components/PageTemplate'
import Card from './Card'
import { Flex, Spacer, Box } from "@chakra-ui/react"


type ArticleData = {
    title: string,
    desc: string,
    imgSrc: string,
    date: Date
}

const Content = () => {
    const mock: ArticleData[] = new Array(10).fill(
        {
            title: "Article1",
            desc: "これはテスト記事1です。",
            imgSrc: "https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png",
            date: new Date(),
        })
    return (
        <>
            <Flex wrap="wrap" justify="center" align="center" direction="row" shrink={1}>
                {mock.map((data, i) => <>
                    <Card {...data} key={String(i)} />
                    {/* <Spacer /> */}
                </>)}
            </Flex>
        </>
    )
}
const Page = () => {
    return (<>
        <Template title="Blog" Content={Content} />
    </>)
}

export default withChakra(Page)