import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
const Admcom = ({ scolor1, scolor2, stext1, stext2, s1bgcolor }) => {


    return (
        <div className={styles.cont}>
            <span style={{ color: "black", backgroundColor: s1bgcolor }} className={styles.span1}>{stext1}</span>
            <span style={{ color: scolor1 }} className={styles.span2}>{stext2}</span>
        </div>
    )
}
export default Admcom;