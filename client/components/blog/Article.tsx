import React from 'react'
import styles from './Article.module.css'
import Link from 'next/link'

const Article: React.FC<DataType.Article> = props => {
    return (
        <div className={styles["article-rectangle"]}>
            <div className={styles["article-title"]}>
                <Link href={`/blog/${props.id}`}>{props.title}</Link>
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