import React from 'react'
import styles from './index.module.css'
import Comp from '../../widgets/dash'
import { useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import Adsmcom from '../../widgets/adsmallcom'
import Admcom from '../../widgets/Adcom'
import { ImForward } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
const Comlist = () => {
    const [cookie, createcookie, removecookie] = useCookies()
    console.log(cookie["student"])
    return (
        <>
            <div className={styles.dashcont}>
                <div className={styles.ulcont}>
                    <span ><span className={styles.sno} >1</span></span>
                    <span className={styles.ui}> <span className={styles.username}>Vijay raj</span><span>Uid :111</span></span>
                    <span ><span className={styles.comid}>192988233777</span></span>
                    <span className={styles.status}>pending</span>
                    <span>no commnets yet</span>
                    <span className={styles.action}>
                        <i><IoEyeOutline></IoEyeOutline></i><i> <ImForward color='blue'></ImForward></i><i><MdDelete color='red'></MdDelete></i>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Comlist