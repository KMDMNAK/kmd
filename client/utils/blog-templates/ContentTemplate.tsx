import React, { JSXElementConstructor } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styles from './ContentTemplate.css'

const Template = (child: JSX.Element, title: string, description: string | null = null) => {
    const wrapper = () => {
        return (
            <div id={styles.blog_page}>
                <h1>{title}</h1>
                {child}
            </div>
        )
    }
    return wrapper;
}
export default Template