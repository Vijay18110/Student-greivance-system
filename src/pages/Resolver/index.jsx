import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Comlist from '../../components/Admindashcomlaintslist'
import { useNavigate } from 'react-router-dom'
import Navbaradmin from '../../components/navbaradmin'
import Resolverdash from '../../components/Resolverdash'
import Resolvernavbar from '../../components/resolvernav'
import ResolverComlist from '../../components/resolvercomlist'
const Resolver = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("resolveremail")) {
            navigate('/resolver/login')
        }
    }, []);
    const [noofcom, setNoOFCom] = useState(0);
    const [uid, setUid] = useState("")
    const [complaints, setComplaints] = useState(0);
    const [complaint, setComplaint] = useState("");
    const [view, setView] = useState(false);
    const [className, setClassname] = useState(styles.absolutecont);
    const click2 = () => {
        setClassname(styles.absolutecont)
    }
    const click1 = (c, uid) => {
        setComplaint(c)
        setUid(uid)
        setClassname(styles.absolutecont1)
    }
    return (
        <>
            <div className={styles.admindashcont}>
                <Resolvernavbar />
                <div className={styles.addashcont}>
                    <Resolverdash complaints={complaints} noofcom={noofcom}></Resolverdash>
                    <ResolverComlist click1={click1} setComplaints={setComplaints} setNoOFCom={setNoOFCom}></ResolverComlist>
                </div>
                <div className={className}>
                    <div className={styles.absolute}>
                        <>
                            <div> this complaint of user id {uid}</div>
                            <div>{complaint}</div>
                            <div className={styles.delete} onClick={click2} colorname="red"> X</div>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resolver
