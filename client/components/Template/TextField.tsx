import React from 'react'
import styles from './template.module.css'

const BottomContent: React.FC<{ title: string }> = ({
    title, children
}) => {
    return (
        <>
            <p className={styles.title}>{title}</p>
            <div className={styles["text-field-wrapper"]}>
                <div className={styles["text-field"]}>
                    <div className={styles["post-full-content"]}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomContent