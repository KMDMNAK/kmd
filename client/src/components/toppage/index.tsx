import React from 'react';
//import Header from './Header'
import dynamic from 'next/dynamic'
import Header from '../../utils/Header'
import Navigation from './Navigation'
import ABOUT from './columns/About'
//import BLOG from './columns/Blog'
const BLOG = dynamic(() => import('./columns/Blog'))
import Projects from './columns/Projects'
import Notes from './columns/Notes'
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