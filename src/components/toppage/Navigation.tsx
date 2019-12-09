import React from 'react';
import styles from './style.css';
import ids from './ids.json';

const Navigation = () => {
    return (
        <div id="navigation">
            <span className={styles.navigation_button}>
                <a href={"#" + ids.column_about}>
                    ABOUT
                </a>
            </span>
            <span className={styles.navigation_button}>
                <a href={"#" + ids.column_blog}>
                    BLOG
                </a>
            </span>
            <span className={styles.navigation_button}>
                <a href={"#" + ids.column_projects}>
                    Projects
                </a>
            </span>
            <span className={styles.navigation_button}>
                <a href={"#" + ids.column_notes}>
                    Notes
                </a>
            </span>
        </div>
    )
}
export default Navigation;