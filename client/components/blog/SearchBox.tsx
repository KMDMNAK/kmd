import React from 'react'
import Loupe from '../Loupe'
import styles from './Loupe.module.css'

const SearchBox = () => {
    return (
        <div className={styles["loupe-box"]}>
            <div style={{ left: 16, top: 13, position: 'absolute', width: 0, display: 'inline-block' }}>
                <Loupe />
            </div>
        </div>
    )
}

export default SearchBox