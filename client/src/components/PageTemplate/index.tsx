import React from 'react'
import styles from './index.module.css'

const ON_OFF = [0, -20]
const register = () => {
    const sidebar = document.getElementById('sidebar')
    if (!sidebar) return
    sidebar.style.setProperty('right', `${ON_OFF[1]}%`);
    sidebar.style.setProperty('width', `${-1 * ON_OFF[1]}%`);
    document.addEventListener('click', (event) => {
        sidebar.style.setProperty('right', (event.target as any).id === 'hamburger-icon' ? `${ON_OFF[0]}%` : `${ON_OFF[1]}%`)
    })

}

const Component: React.FC<{ title: string, Content: React.FC }> = props => {
    return (<>
        <div id={styles.sidebar}></div>
        <div>
            {/* <div>
                <img id={styles['hamburger-icon']} src="/static/menu.svg" width="32" height="32" />
            </div> */}
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
                            <h1>{props.title}</h1>
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