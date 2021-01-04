import React from 'react'

import { withChakra } from '../../utils/Chakra'

import Template from '../../components/PageTemplate'

import Chart from './Chart'

const Content = () => {
    return (
        <>
            <div style={{textAlign:'center'}}>
                This is About
            </div>
            <div style={{textAlign:'center'}}>
                <Chart />
            </div>
        </>
    )
}
const Page = () => {
    return (<>
        <Template title="About" Content={Content} />
    </>)
}

export default withChakra(Page)