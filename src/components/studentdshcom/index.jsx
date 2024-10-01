import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Comp from '../../widgets/dash'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const Dashcomp = (props) => {
    const Navigate = useNavigate()
    const [name1, setName1] = useState('')
    const [students, setStudents] = useState([]);
    useEffect(() => {

        setName1(localStorage.getItem("name"))
    }, [])
    const logoutstudent = () => {
        localStorage.removeItem("loginkey");
        localStorage.removeItem("name")
        Navigate('/home')
    }
    return (
        <>
            <div className={styles.dashcont}>
                <p className={styles.user}>Username:@{name1}</p>
                <Comp color="#fff" bgcolor="#c914e0" name="role:student"></Comp>
                <div className={styles.x}>
                    <Comp logoutstudent={props.focus} name="add complaints" bgcolor="#e8edec" ></Comp>
                    <Comp value="status" logoutstudent={props.display} name="check status" bgcolor="#e8edec" ></Comp>
                    <Comp value="history" logoutstudent={props.display} name="history" bgcolor="#e8edec" ></Comp>
                    <Comp value="support" logoutstudent={props.display} name="support" bgcolor="#e8edec" ></Comp>
                    <Comp logoutstudent={logoutstudent} name="logout" bgcolor="#e08e14" ></Comp>
                </div>
            </div>
        </>
    )
}
export default Dashcomp