import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Dashcomp from '../../components/studentdshcom'
import logo from '../../assets/srimtf.png'
import Complaints from '../../components/complaints'
import Track from '../../components/Track'
import { IoEyeOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom'
import Animation from '../amimatedpage'
const Studentdash = () => {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState([]);
    const [option, setOption] = useState("");
    const inref = useRef();
    useEffect(() => {

        if (!localStorage.getItem("loginkey")) {
            navigate('/home')
        }
        fetch("http://localhost:3000/complaints", {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: localStorage.getItem("name") })

        }).then((res) => res.json()).then((res) => setComplaints(res));

    }, [complaints])
    const [className, setclass] = useState(styles.absolutecont)
    const [className1, setclass1] = useState(styles.absolutecontview)
    const click = (value) => {
        setclass(styles.absolutecont1);
        setOption(value)
    }
    const click2 = (e) => {
        setclass(styles.absolutecont);

    }
    const click2view = (e) => {
        setclass1(styles.absolutecontview)
    }
    const focus = () => {
        inref.current.style.border = "1px solid red";
    }
    const [viewcom, setViewcom] = useState("");
    const viewcomplaints = (complaints) => {
        setclass1(styles.absolutecontview1);
        setViewcom(complaints)
    }
    const display = useRef(null);
    // useEffect(() => {
    //     display.current.style.display = "block"
    // }, [])
    return (<>
        <div className={styles.studashcont}>
            {/*
            <div style={{ display: "none", position: "absolute" }} ref={display}>
                <div className={styles.absolute}>
                    <Animation></Animation>
                    <div className={styles.delete} onClick={click2} colorname="red"> X </div>
                </div></div> */}
            <img src={logo} alt="" />
        </div>
        <div className={className1}>
            <div className={styles.absolute}>
                <div className={styles.delete} onClick={click2view} colorname="red"> X </div>
                <h1>{viewcom}</h1>
            </div>
        </div>
        <div className={className}>
            <div className={styles.absolute}>
                <div className={styles.delete} onClick={click2} colorname="red"> X </div>
                {
                    (option === "status" && complaints.length != 0 ?
                        <table border="2px">
                            <thead>
                                <tr>
                                    <th style={{ width: "300px" }}>cid</th>
                                    <th style={{ width: "300px" }}>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    complaints.map((data) => {
                                        return (
                                            <tr>
                                                <td > {data.complaintsId}</td>
                                                <td>{data.resolverstatus}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table> : option === "history" ? <table border="2px">
                            <thead>
                                <tr>
                                    <th style={{ width: "300px" }}>total complaints</th>
                                    <th style={{ width: "300px" }}>complaints id</th>
                                    <th style={{ width: "300px" }}>status</th>
                                    <th style={{ width: "300px" }}>view</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    complaints.map((data, index) => {
                                        return (
                                            <tr style={{ textAlign: "center" }}>
                                                <td > {index + 1}</td>
                                                <td > {data.complaintsId}</td>
                                                <td>{data.resolverstatus}</td>
                                                <td onClick={() => viewcomplaints(data.complaints)}><IoEyeOutline></IoEyeOutline> </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table> : option === "support" ? <h1>support</h1> : <h1 onClick={() => { focus(), click2() }} >add complaints</h1>)
                }
            </div>
        </div>
        <div className={styles.dashcont}>
            <Dashcomp display={click} focus={focus}></Dashcomp>
            <Complaints inref={inref}></Complaints>
            <Track click={click} ></Track>
        </div>
    </>
    )
}
export default Studentdash;