import React from 'react';
//import Header from './Header'
import dynamic from 'next/dynamic'
import Header from '../../utils/Header'
import Navigation from './navigation'
import ABOUT from './columns/about'
//import BLOG from './columns/Blog'
const BLOG = dynamic(() => import('./columns/blog'))
import Projects from './columns/projects'
import Notes from './columns/notes'
import styles from './style.css'


const AppToppage = ( ) => {
    return (
        <div id={styles.top_page}>
            <Header last_word="development"/>
            <Navigation />
            <ABOUT />
            <BLOG />
            <Projects />
            <Notes />
        </div>
    )
}

export default AppToppage;