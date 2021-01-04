import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from './index.css'

const Component: React.FC<{ title: string, desc: string, imgSrc: string, date: Date }> = props => {
    return (
        <div className={styles.card}>
            <Box
                boxShadow="xl"
                style={{
                    width: '320px',
                    height: '420px',
                    backgroundColor: '#f9f9f9',
                }}>
                            
                <div style={{ textAlign: 'center', width: '100%', padding: '5px' }}>
                    <img
                        src={props.imgSrc}
                        width="270"
                        height="160"
                        style={{ marginLeft: "auto", marginRight: "auto" }} />
                </div>
                <div>
                    <div>
                        <Text fontSize="2xl" style={{ textAlign: 'center', padding: '3px' }}>
                            {props.title}
                        </Text>
                    </div>
                    <div>
                        <p style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }}>{props.desc}</p>
                    </div>
                </div>

            </Box >
        </div>
    )
}

export default Component