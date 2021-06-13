import React from 'react'
import styles from './BackButtons.module.css'
import indexStyles from './index.module.css'

interface BackButtonsProps {
    backClick: () => void
    mostBackClick: () => void
}
const BackButtons: React.FC<BackButtonsProps> = props => {
    return (
        <div className={styles["back-buttons"]}>
            <div className={styles["backward-most-content"]}>
                <div className={indexStyles["ellipse"]} onClick={props.mostBackClick}>
                    <div className={styles["triangle-right-double-wrapper-first"]}>
                        <div className={styles["triangle-right-double"]}></div>
                    </div>
                    <div className={styles["triangle-right-double-wrapper-second"]}>
                        <div className={styles["triangle-right-double"]}></div>
                    </div>
                </div>
            </div>
            <div className={styles["backward-content"]}>
                <div className={indexStyles["ellipse"]} onClick={props.backClick}>
                    <div className={styles["triangle-right"]}></div>
                </div>
            </div>
        </div>
    )
}

export default BackButtons