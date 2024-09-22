import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useCookies } from 'react-cookie'
const Adminlog = () => {
    const [id, setid] = useState("")
    const [password, setPassword] = useState("")
    const [cookie, createcookie, removecookie] = useCookies();
    const navigate = useNavigate();
    // const toastobj=
    const login = async () => {
        const r = await fetch("http://localhost:3000/admin", {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id: id, password: password })
        });
        const data = await r.json();
        if (data.msg === true) {
            localStorage.setItem("admin", id);
            navigate('/admin/dash', { replace: true })
        }
        else {
            alert("check data base connetivity")
        }

    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.formcont}>

                    <div className={styles.form_group}>
                        <label htmlFor="email"> id</label>
                        <div className={styles.form_controller}>
                            <input onChange={(e) => setid(e.target.value)} type="tel" placeholder='enter roll' name="" id="email" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password"> password</label>

                        <div className={styles.form_controller}>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter password' name="" id="password" />
                        </div>
                    </div>
                    <div className={styles.text}>  don't have an account? <Link to="/admin/register"> <span>register</span></Link> </div>
                    <Button colorname="#222420" boxShadow="#222420" submitdata={login} type="submit" name="login" > </Button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Adminlog