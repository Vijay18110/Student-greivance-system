import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
const Complaints = () => {


    const [branches, setBranches] = useState(["library", "acadmic", "canteen", "others"]);
    const [branch, setBranch] = useState("");
    const [name, setName] = useState("");
    const [uid, setUid] = useState("");
    const [inchargename, setInchargename] = useState("");
    const [complaints, setComplaints] = useState("");

    const toastobj = {
        position: 'bottom-right',
        pauseOnHover: true,
        autoClose: 8000,
    }
    const handlevalidation = async () => {
        if (name === "") {
            toast.error("fill name field", toastobj)
            return false;
        }
        if (inchargename === "") {
            toast.error("fill inchargename field", toastobj)
            return false;
        } if (complaints === "") {
            toast.error("fill complaints field", toastobj)
            return false;
        } if (branch === "") {
            toast.error("select your branch  ", toastobj)
            return false;
        }
        if (uid === "") {
            toast.error("fill uid field", toastobj)
            return false;
        }
        else return true;
    }
    const submitdata = async (e) => {
        const cid = Math.floor(Math.random() * 10000000000)
        if (handlevalidation()) {
            const res = await fetch("http://localhost:3000/complaints", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({ complaintsId: cid, name: name, uid: uid, complaints: complaints, inchargename: inchargename, branch: branch, adminfwd: "false", adminview: "false", resolverview: "false", adminstatus: "pendnig", resolverstatus: "pending" })
            })
            const data = await res.json();
            console.log(data)
            alert(data.msg)
            setBranch("")
            setName("")
            setUid("")
            setInchargename("")
            setComplaints("")
        }
    }
    return (
        <>


            <div className={styles.container}>

                <div className={styles.formcont}>
                    <div className={styles.form_group}>
                        <div className={styles.form_controller}>
                            <span> Add Complaints</span>

                        </div>
                    </div>
                    <div className={styles.form_group}>

                        <div className={styles.form_controller}>
                            {/* <input type="text" name="" placeholder=' enter name' id="name" /> */}
                            <select value={branch} onChange={(e) => setBranch(e.target.value)} className={styles.select} name="" id="">
                                <option value="">select </option>
                                {
                                    branches.map((branch) => {
                                        return (
                                            <option>{branch}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className={styles.form_group}>

                        <div className={styles.form_controller}>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" placeholder='white your name' id="name" />
                        </div>
                    </div>
                    <div className={styles.form_group}>

                        <div className={styles.form_controller}>
                            <input value={uid} onChange={(e) => setUid(e.target.value)} type="text" placeholder='UID Number' name="" id="email" />
                        </div>
                    </div>
                    <div className={styles.form_group}>


                        <div className={styles.form_controller}>
                            <input value={inchargename} onChange={(e) => setInchargename(e.target.value)} type="text" placeholder='Name of the person Incharge' name="" id="password" />
                        </div>
                    </div>
                    <div className={styles.form_group}>


                        <div className={styles.form_controller}>
                            <textarea value={complaints} className={styles.textarea} onChange={(e) => setComplaints(e.target.value)} type="password" placeholder='write your complaints here!' name="" id="password" />
                        </div>
                    </div>

                    <Button width="100%" colorname="#0af221" boxShadow="#0af221" submitdata={submitdata} type='submit' name="submit" > </Button>
                </div>

            </div >
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Complaints