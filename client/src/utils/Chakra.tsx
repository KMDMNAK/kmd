import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"

export const withChakra = (App: React.FC<any>) => () => {
    return (
        <ChakraProvider>
            <App />
        </ChakraProvider>
    )
}