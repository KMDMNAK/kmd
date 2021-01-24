import React, { createContext, useContext } from 'react'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'
import styles from './index.css'

export const StyleContext = createContext<{ width: string, height: string }>({ width: "320px", height: "420px" })
const Component: React.FC<API.Article> = ({ feature_image, title, id }) => {
    const context = useContext(StyleContext)
    return (
        <Link href={`/blog/${id}`}>
            <div className={styles.card}>
                <Box
                    boxShadow="xl"
                    style={{
                        width: context.width,
                        height: context.height,
                        backgroundColor: '#f9f9f9',
                    }}>

                    <div style={{ textAlign: 'center', width: '100%', padding: '5px' }}>
                        {feature_image && <img
                            src={feature_image}
                            width="270"
                            height="160"
                            style={{ marginLeft: "auto", marginRight: "auto" }} />
                        }
                    </div>
                    <div>
                        <div style={{ position: 'relative', textAlign: 'center' }}>
                            <Text isTruncated fontSize="2xl" style={{ position: "relative", textAlign: 'center', margin: "0 auto", width: '80%' }}>
                                {title}
                            </Text>
                        </div>
                        <div>
                            <p style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }}>{"desc"}</p>
                        </div>
                    </div>

                </Box >
            </div >
        </Link>
    )
}

export default Component