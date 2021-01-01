import React from 'react'

import Template from '../components/PageTemplate'

const Content = () => {
    return (
        <>
            Content
        </>
    )
}
const Page = () => {
    return (<>
        <Template title="About" Content={Content} />
    </>)
}

export default Page