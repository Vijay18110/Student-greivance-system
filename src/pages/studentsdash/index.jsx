import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import Dashcomp from '../../components/studentdshcom'
import logo from '../../assets/srimtf.png'
import Complaints from '../../components/complaints'
import Track from '../../components/Track'
import { useNavigate } from 'react-router-dom'
const Studentdash = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("loginname")) {
            navigate('/home')
        }
    }, [])
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
                <div className={styles.delete} onClick={click2} colorname="red"> X</div>
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