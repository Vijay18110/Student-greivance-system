import React from 'react'
import styles from './index.module.css'
import Button from '../Button'
const Card = ({ cbgc, btnname, pname, circlename, click }) => {
    return (
        <div className={styles.cardcont}>
            <div className={styles.cardcontent}>
                <div className={styles.left}>
                    <p onClick={() => click()}> {pname}</p>
                    <div className={styles.btncont}><Button colorname={cbgc} name={btnname} ></Button> </div>
                </div>
                <div className={styles.circlecont}>

                    <div style={{ backgroundColor: cbgc, boxShadow: `0 0 8px ${cbgc}` }} className={styles.circle}><span style={{ position: "fixed" }}>{circlename}</span> </div>
                </div>
            </div>
        </div>
    )
}

export default Card