import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { ImForward } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'
const Comlist = (props) => {
    const [complaints, setComplaints] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/complaints').then((res) => res.json()).then((res) => setComplaints(res))
        props.setNoOFCom(complaints.length)
    }, [complaints])
    const deletecom = async (id) => {
        const re = await fetch("http://localhost:3000/complaints", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id: id })
        })
        const data = await re.json();
        alert(data.msg)
    }
    return (
        <>
            <div className={styles.dashcont}>
                {
                    complaints.map((complaint, index) => {
                        return (
                            <>
                                <div className={styles.ulcont}>
                                    <span ><span style={{ color: "white" }} className={styles.iconcont} >{index + 1}</span></span>
                                    <span className={styles.ui}> <span className={styles.username}>{complaint.name}</span><span>Uid :{complaint.uid}</span></span>
                                    <span ><span className={styles.comid}>{complaint._id}</span></span>
                                    <span className={styles.status}>{complaint.branch}</span>
                                    <span>{complaint.inchargename}</span>
                                    <span className={styles.action}>
                                        <i style={{ color: "white" }} className={styles.iconcont} onClick={() => props.click1(complaint.complaints, complaint.uid, 1)}><IoEyeOutline></IoEyeOutline></i><i className={styles.iconcont} onClick={() => { props.click1("", complaint.uid, 2) }}> <ImForward color='blue'></ImForward></i><i className={styles.iconcont}  ><MdDelete onClick={() => deletecom(complaint._id)} color='red'></MdDelete></i>
                                    </span>
                                </div>
                                <ToastContainer></ToastContainer>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Comlist