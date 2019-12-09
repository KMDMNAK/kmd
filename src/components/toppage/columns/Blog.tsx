import React from 'react';
import styles from '../style.css'
import ids from '../ids.json';

const Blog = () => {
    return (
        <div className={styles.column} id={ids.column_blog}>
            <h1>This is Blog</h1>
            <a href="/blog">My Blogs</a>
        </div>
    )
}
export default Blog;