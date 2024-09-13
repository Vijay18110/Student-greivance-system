import React from 'react'
import styles from './index.module.css'
const Comp = ({ color, bgcolor, name, logoutstudent }) => {
    return (
        <div onClick={() => logoutstudent()} style={{ backgroundColor: bgcolor, boxShadow: `0 0 5px ${bgcolor}`, color: color }} className={styles.dash}>
            {name}
        </div>
    )
}

export default Comp