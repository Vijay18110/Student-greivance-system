import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Navbar from '../../components/Navbar'
import Admindashcom from '../../components/Admindash'
import Comlist from '../../components/Admindashcomlaintslist'
import { useNavigate } from 'react-router-dom'
const Admindash = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            navigate('/admin/login')
        }

    }, [])
    const [noofcom, setNoOFCom] = useState(0);
    const [className, setClassname] = useState(styles.absolutecont);
    const [complaint, setComplaints] = useState("");
    const [uid, setUid] = useState("");
    const [no, Setno] = useState(0);
    const [flag, setFlag] = useState(false)
    const [forwarded, setForwarded] = useState(false)


    const click2 = () => {
        setClassname(styles.absolutecont)
    }
    const click1 = (c, uid, no) => {
        Setno(no)
        setComplaints(c)
        setUid(uid)
        setClassname(styles.absolutecont1)
    }
    const ok = () => {
        setFlag(true)
        setForwarded(true)
    }
    return (
        <>

            <div className={styles.admindashcont}>
                <Navbar />
                <div className={className}>
                    <div className={styles.absolute}>
                        {
                            no == 1 ? <><div> this complaint of user id {uid}</div>
                                <div>{complaint}</div>
                                <div className={styles.delete} onClick={click2} colorname="red"> X</div>
                            </> : <><div> this complaint of user id {uid} forwarded to the resolver</div>
                                <div className={styles.delete} onClick={() => { click2(), ok() }} colorname="red"> ok</div>
                            </>}
                    </div>
                </div>
                <div className={styles.addashcont} >
                    <Admindashcom noofcom={noofcom} ></Admindashcom>
                    <Comlist click1={click1} setNoOFCom={setNoOFCom}></Comlist>
                </div>
                {/* <h1 style={{ color: "red", display: "flex", margin: "0 auto", textAlign: "center", alignItems: "center" }}>  No Complaints</h1> */}
            </div>
        </>
    )
}

export default Admindash