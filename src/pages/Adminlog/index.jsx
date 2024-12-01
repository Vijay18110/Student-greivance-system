import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Container from '../../components/container'
const Adminlog = () => {
    const { state } = useLocation();
    const [id, setid] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const login = async () => {
        const r = await fetch("https://grievance-system-f1fa6-default-rtdb.firebaseio.com/admindata.json", {
            method: "GET",
        });
        const data = await r.json();
        const d = [];
        for (const x in data) {
            d.push(data[x]);
        }
        const filtereddata = d.find((it) => it.id === id && it.password === password);
        if (filtereddata) {
            localStorage.setItem("admin", filtereddata.id);
            navigate('/admin/dash', { replace: true });
        }
        else {
            console.log(state)
            toast.error("enter valid id or password", {
                position: 'bottom-right',
                pauseOnHover: true,
                autoClose: 8000
            })
        }
    }
    return (
        <Container >
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
        </Container>
    )
}
export default Adminlog