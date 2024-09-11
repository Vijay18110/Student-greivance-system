import React, { useRef, useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import Dashcomp from '../../components/studentdshcom'
import logo from '../../assets/srimtf.png'
import Complaints from '../../components/complaints'
import Track from '../../components/Track'
const Studentdash = () => {
    const [className, setclass] = useState(styles.absolutecont)
    const click = () => {
        setclass(styles.absolutecont1)
    }
    const click2 = (e) => {
        setclass(styles.absolutecont)
    }
    return (<>
        <div className={styles.studashcont}>
            <img src={logo} alt="" />
        </div>
        <div className={className}>
            <div className={styles.absolute}>
                <Button submitdata={click2} name="X" colorname="red"></Button>
            </div>
        </div>
        <div className={styles.dashcont}>
            <Dashcomp></Dashcomp>
            <Complaints></Complaints>
            <Track click={click} ></Track>

        </div>
    </>

    )
}

export default Studentdash