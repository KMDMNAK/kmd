import React, { useState, useRef, useEffect } from 'react'

import Hamburger from '../Hamburger'
import Sidebar from '../Sidebar'

import styles from './template.module.css'

export default function Navicon() {
    const WIDTH = 200
    const [right, setRight] = useState(-WIDTH)
    const navigationRef = useRef<HTMLDivElement | null>(null)
    const click = () => {
        setRight(0)
    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            console.debug('handleClickOutside')
            if (!navigationRef) return
            if (navigationRef?.current && !navigationRef.current.contains(event.target as HTMLDivElement)) {
                console.debug({ c: navigationRef.current })
                setRight(-WIDTH)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, [null])
    return (
        <div className={styles.navicon} ref={navigationRef}>
            <div className={styles.hamburger} onClick={click}>
                <Hamburger width={64} height={64} />
            </div>
            <Sidebar width={WIDTH} right={right} />
        </div>
    )
}