import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Navbar from '../../components/Navbar'
import Admindashcom from '../../components/Admindash'
import Comlist from '../../components/Admindashcomlaintslist'
import { useNavigate } from 'react-router-dom'
import Navbaradmin from '../../components/navbaradmin'
const Admindash = () => {
    const navigate = useNavigate()
    const [updatedcom, setupdatedcom] = useState([]);
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




    const [nofwdcom, setNofwdcom] = useState(0);

    const [fwdcomplaints1, setFwdcomplaints1] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/complaints').then((res) => res.json()).then((res) => setFwdcomplaints1(res)).catch((err) => console.log(err.message))
        setNofwdcom(fwdcomplaints1.filter((item) => item.adminfwd === "true").length)
        f1();
    }, [fwdcomplaints1, nofwdcom])
    const f1 = async () => {
        await fetch('http://localhost:3000/complaints').then((res) => res.json()).then((res) => setFwdcomplaints(res))
    }
    const click2 = () => {
        setClassname(styles.absolutecont)
    }
    const click1 = (c, uid, no) => {

        Setno(no)
        setComplaints(c)
        setUid(uid)
        setClassname(styles.absolutecont1)
    }
    const ok = async (uid) => {

        const r = await fetch("http://localhost:3000/complaints", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ userid: uid })
        });
        const data = await r.json();
        setupdatedcom(data);
    }
    return (
        <>

            <div className={styles.admindashcont}>
                <Navbaradmin />
                <div className={className}>
                    <div className={styles.absolute}>
                        {
                            no == 1 ? <><div> this complaint of user id {uid}</div>
                                <div>{complaint}</div>
                                <div className={styles.delete} onClick={click2} colorname="red"> X</div>
                            </> : <><div> this complaint of user id {uid} forwarded to the resolver</div>
                                <div className={styles.delete} onClick={() => { click2(), ok(uid) }} colorname="red"> ok</div>
                            </>}
                    </div>
                </div>
                <div className={styles.addashcont}>
                    <Admindashcom nofwdcom={nofwdcom} updatedcom={updatedcom} noofcom={noofcom} ></Admindashcom>
                    <Comlist click1={click1} setNoOFCom={setNoOFCom}></Comlist>
                </div>
            </div>
        </>
    )
}

export default Admindash