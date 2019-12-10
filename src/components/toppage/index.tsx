import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import ABOUT from './columns/About'
import BLOG from './columns/Blog'
import Projects from './columns/Projects'
import Notes from './columns/Notes'
import styles from './style.css'

const App = () => {
    return (
        <div id={styles.top_page}>
            <Header />
            <Navigation/>
            <ABOUT />
            <BLOG />
            <Projects />
            <Notes />
        </div>
    )
}

export default App; 