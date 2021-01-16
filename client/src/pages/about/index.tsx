import React, { useEffect } from 'react'

import { withChakra } from '../../utils/Chakra'
import { Text } from '@chakra-ui/react'

import Template from '../../components/PageTemplate'

import Chart from './Chart'

const Content = () => {
    return (
        <>
            <Text fontFamily="ＭＳ Ｐ明朝">
                <p>大学では数理情報科学を学び、2020年3月に大学を卒業しました。</p>
                <p>機械学習プラットフォームの提供を行う会社に新卒で入社し、クライアント(Vuejs)、サーバー(Nodejs,Koa)、クラウド(firebase)、機械学習の実行用コンテナ(Python)等の作成運用を行っていました。</p>
                <p>当ページはNextjsで作成で作成しています。</p>
            </Text>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Chart />
            </div>
        </>
    )
}
const Page: React.FC<{}> = props => {
    useEffect(() => {
        console.debug('This is useEffect in about')
    })
    return (<>
        <Template title="About" Content={Content} />
    </>)
}


export default withChakra(Page)