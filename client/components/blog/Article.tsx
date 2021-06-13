import React from 'react'
import styles from './Article.module.css'

const Article: React.FC<DataType.Article> = props => {
    return (
        <div className={styles["article-rectangle"]}>
            <div className={styles["article-title"]}>
                {props.title}
            </div>
            <div className={styles["article-date"]}>
                {props.createdAt.toDateString()}
            </div>
            <div className={styles["article-first-tag"]}>
                #tag1
                    </div>
        </div>
    )
}

export default Article