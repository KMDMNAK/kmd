import React from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

export const withChakra = (App: React.FC<any>) => () => {
    return (
        <ChakraProvider>
            <App />
        </ChakraProvider>
    )
}


// const fonts = {
//     text: {
//         fontFamily: "ＭＳ Ｐ明朝"
//     },
// }
// export const theme = extendTheme({})