import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { ImForward } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'
import { FaComments } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
const ResolverComlist = (props) => {
    const [complaints, setComplaints] = useState([]);
    const [filteredcomplaints, setFComplaints] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/complaints", {
            method: "GET",
            headers: { "content-type": "application/json" },
        }).then((res) => res.json()).then((res) => setComplaints(res)).catch((err) => console.log(err.message))
        props.setComplaints(complaints.length);
        const filteredcom = complaints.filter((data) => data.adminfwd === "true");
        setFComplaints(filteredcom);
        props.setNoOFCom(filteredcomplaints.length);
    }, [complaints]);
    return (
        <>
            <div className={styles.dashcont}>
                {/* <div style={{ position: "fixed", display: "flex", flexWrap: "nowrap", top: "50px", paddingRight: "400px" }} className={styles.ulcont}>
                    <span>Sno</span>
                    <span>Name</span>
                    <span>complaint id</span>
                    <span> branch</span>
                    <span> inchargename</span>
                    <span> view</span>
                    <span> commnets</span>
                    <span> feedback</span>
                </div> */}
                {


                    filteredcomplaints.map((complaint, index) => {
                        return (
                            <>
                                <div className={styles.ulcont}>
                                    <span ><span className={styles.sno} >{index + 1}</span></span>
                                    <span className={styles.ui}> <span className={styles.username}>{complaint.name}</span><span>Uid :{complaint.uid}</span></span>
                                    <span ><span className={styles.comid}>{complaint._id}</span></span>
                                    <span className={styles.status}>{complaint.branch}</span>
                                    <span>{complaint.inchargename}</span>
                                    <span onClick={() => props.click1(complaint.complaints, complaint.uid)} className={styles.sno}><IoEyeOutline></IoEyeOutline></span>
                                    <span className={styles.sno}><FaComments></FaComments></span>
                                    <span className={styles.sno}><VscFeedback></VscFeedback></span>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ResolverComlist