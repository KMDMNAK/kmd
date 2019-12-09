import React from 'react';
import styles from '../style.css'
import ids from '../ids.json'
const Notes = () => {
    return (
        <div className={styles.column} id={ids.column_notes}>
            <h1>This is Notes!!</h1>
        </div>

    )
}
export default Notes;