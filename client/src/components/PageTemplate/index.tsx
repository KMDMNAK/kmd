import React, { useEffect } from 'react'
import styles from './index.module.css'

import Drawer from './Drawer'

import {
    useDisclosure,
    Text
} from '@chakra-ui/react'

const Component: React.FC<{ title: string, Content: React.FC }> = props => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (<>
        {/* <div id={styles.sidebar}></div> */}
        <Drawer {...{ isOpen, onClose }} />
        <div>
            <div>
                <img onClick={onOpen} id={styles['hamburger-icon']} src="/static/menu.svg" width="32" height="32" />
            </div>
            <div className={styles["starbucks-deepgreen"]}>
                <div className={styles["page-top"]}>
                    <div className={styles["page-top-circle"]}></div>
                    <div className={styles["page-top-sentence"]}>KMD Development</div>
                </div>
            </div>
            <div className={styles["starbucks-blue"]}>
                <div className={styles["page-bottom"]}>
                    <div className={styles["title-and-content"]}>
                        <div className={styles["bottom-title"]}>
                            <Text fontSize="4xl">{props.title}</Text>
                        </div>
                        <props.Content />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Component