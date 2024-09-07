import React from 'react'
import styles from './index.module.css'
const Main = ({ content }) => {
    return (
        <div className={styles.maincont}>{content}</div>
    )
}

export default Main