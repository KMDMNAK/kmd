import React, { createContext } from "react";
import dynamic from 'next/dynamic'
import { ApolloClientType } from '../utils/ApolloClient'
import { useToppageQuery, ToppageDocument, ToppageQuery, Maybe } from '../../@types/apolloType'
const Toppage = dynamic(() => import('../components/toppage'))

interface IndexProps {
    data: ToppageQuery
}

const IndexDataHandler = () => {
    const { loading, data } = useToppageQuery()
    return
}

const Index = (props: IndexProps) => {
    console.debug("in Index render", props)
    const toppage = props.data
    return <Toppage toppage={toppage} />
}

Index.getInitialProps = async (
    args: { apolloClient: ApolloClientType }
): Promise<IndexProps> => {
    console.debug('index', 'initialProps')
    const { apolloClient } = args;
    if (!apolloClient) throw Error('No Apollo Client')
    const { loading, data } = await apolloClient.query<ToppageQuery>({ query: ToppageDocument })
    while (loading) {
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 300)
        })
    }
    return { data }
}
Index.isUsingApollo = true;
export default Index;