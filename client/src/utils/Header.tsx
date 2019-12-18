import React from 'react';
import styles from './header.css'

const Header = () => {
    return (
        <div id={styles.header}>
            <span className={styles.kmd}>
                <span className={styles.chara} id={styles.K}>K</span>
                <span className={styles.chara} id={styles.M}>M</span>
                <span className={styles.chara} id={styles.D}>D</span>
            </span>
            <span className={styles.mnak}>
                <span className={styles.chara} id={styles.M1}>M</span>
                <span className={styles.chara} id={styles.N}>N</span>
                <span className={styles.chara} id={styles.A}>A</span>
                <span className={styles.chara} id={styles.K1}>K</span>
            </span>
            <span id={styles.development}>Development</span>
        </div>
    )
}

export default Header;