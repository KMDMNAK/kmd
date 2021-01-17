import React from 'react'

import { withChakra } from '../../utils/Chakra'
import Template from '../../components/PageTemplate'
import Card from './Card'
import { Flex } from "@chakra-ui/react"


type ArticleData = {
    title: string,
    desc: string,
    imgSrc: string,
    date: Date
}

const Content = () => {
    const mock: ArticleData[] = (new Array(10).fill(null)).map(
        (_, i) => {
            const mockItem = {
                title: `Article${String(i)}`,
                desc: `これはテスト!記事${String(i)}です。`,
                imgSrc: "https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png",
                date: new Date(),
            }
            return mockItem
        })
    // console.debug({ mock })
    return (
        <>
            <Flex wrap="wrap" justify="center" align="center" direction="row" shrink={1}>
                {mock.map((data, i) => <>
                    <Card {...data} key={data.title} />
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