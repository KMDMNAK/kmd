import React from 'react'
import styles from './ForwardButtons.module.css'
import indexStyles from './index.module.css'

interface ForwardButtonsProps {
    forwardClick: () => void
    mostForwardClick: () => void
}
const ForwardButtons: React.FC<ForwardButtonsProps> = props => {
    return (
        <div className={styles["forward-buttons"]}>
            <div className={styles["forward-most-content"]}>
                <div className={indexStyles["ellipse"]} onClick={props.mostForwardClick}>
                    <div className={styles["triangle-left-double-wrapper-first"]}>
                        <div className={styles["triangle-left-double"]}></div>
                    </div>
                    <div className={styles["triangle-left-double-wrapper-second"]}>
                        <div className={styles["triangle-left-double"]}></div>
                    </div>
                </div>
            </div>
            <div className={styles["forward-content"]}>
                <div className={indexStyles["ellipse"]} onClick={props.forwardClick}>
                    <div className={styles["triangle-left"]}></div>
                </div>
            </div>
        </div>
    )
}

export default ForwardButtons