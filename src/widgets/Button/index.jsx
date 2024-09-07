import React from 'react'

import styles from './index.module.css'
const Button = ({ name }) => {
    return (
        <div className={styles.btncont}>
            <button className={styles.btn}>{name}</button>

        </div>
    )
}

export default Button