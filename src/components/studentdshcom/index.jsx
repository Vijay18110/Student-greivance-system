import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Comp from '../../widgets/dash'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const Dashcomp = () => {
    const Navigate = useNavigate()
    const [name, setName] = useState('')
    useEffect(() => {
        setName(localStorage.getItem("loginname"));
    })
    const logoutstudent = () => {
        localStorage.removeItem("loginname");
        Navigate('/home')

    }
    return (
        <>
            <div className={styles.dashcont}>
                <p className={styles.user}>Username:@{name}</p>
                <Comp color="#fff" bgcolor="#c914e0" name="role:student"></Comp>
                <div className={styles.x}>
                    <Comp name="add complaints" bgcolor="#e8edec" ></Comp>
                    <Comp name="check status" bgcolor="#e8edec" ></Comp>
                    <Comp name="history" bgcolor="#e8edec" ></Comp>
                    <Comp name="support" bgcolor="#e8edec" ></Comp>
                    <Comp logoutstudent={logoutstudent} name="logout" bgcolor="#e08e14" ></Comp>
                </div>
            </div>
        </>
    )
}
export default Dashcomp