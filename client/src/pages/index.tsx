import React, { useState } from 'react'

import { withChakra } from '../utils/Chakra'
import Template from '../components/PageTemplate'
import { ENGLISH_FONTFAMILY } from '../utils/style'
import { Text } from '@chakra-ui/react'

const Introduction: React.FC<{ title: string, Content: React.FC }> = props => {
    return (<>
        <div>
            <Text fontSize="4xl" fontFamily={ENGLISH_FONTFAMILY}>{props.title}</Text>
        </div>
        <div>
            <props.Content />
        </div>
    </>)
}

const About = () => {
    return (<>
        <div style={{ position: 'relative', height: "200px" }}>
            <span style={{ position: 'absolute' }}>
                <a href="https://github.com/KMDMNAK">
                    <img width={30} height={30} src="/static/GitHub-Mark.png" />
                </a>
            </span>
            <span style={{ position: 'absolute', left: 30 }}>
                <a href="https://qiita.com/KMD">
                    <img width={30} height={30} src="/static/qiita-square.png" />
                </a>
            </span>
        </div>
    </>)
}

const Blog = () => {
    const [state, setState] = React.useState("")
    React.useEffect(() => {
        fetch('/api/hello').then(v => v.json()).then(v => setState(v))
    }, [null])
    return (<>
        {state}
    </>)
}

const Projects = () => {
    return (<>
        Projects
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