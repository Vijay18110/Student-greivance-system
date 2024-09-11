import React from 'react'

import styles from './index.module.css'
const Button = ({ name, submitdata, getstudentdata, colorname, boxShadow, width }) => {
    return (
        <div className={styles.btncont}>
            <button style={{ width: width, backgroundColor: colorname, boxShadow: `0 0 10px ${boxShadow} ` }} onClick={(e) => { submitdata(e) }} className={styles.btn}>{name}</button>
        </div>
    )
}
export default Button