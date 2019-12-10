import React from 'react';
import styles from '../style.css'

const About = () => {
    return (
        <div className={styles.column} id={styles.ABOUT}>
            <h1>This is ABOUT!!</h1>
            <div className={styles.column_content}>
                web engineer : KMD
                
                <div>
                    <span>
                        <a href="https://github.com/KMDMNAK"><img src="/static/GitHub-Mark.png" /></a>
                    </span>
                    <span>
                        <a href="https://qiita.com/KMD"><img src="/static/qiita-square.png" width="64" height="64" /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default About;
