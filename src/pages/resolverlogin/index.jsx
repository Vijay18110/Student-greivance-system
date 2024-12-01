import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Container from '../../components/container'
const Resoverlogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const login = async () => {
        const r = await fetch("https://grievance-system-f1fa6-default-rtdb.firebaseio.com/resolver.json", {
            method: "GET",
            headers: { "content-type": "application/json" },
        });
        const data = await r.json();
        const d = [];
        for (const x in data) {
            d.push(data[x]);
        }
        const filtereddata = d.find((d) => d.email === email && d.password === password);
        if (filtereddata) {
            localStorage.setItem("resolver", email)
            navigate('/resolver', { replace: true })
        }
        else {
            toast.error("please enter valid email or password", {
                position: 'top-left',
                autoClose: 8000,
                pauseOnHover: true
            })
        }
    }
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.formcont}>
                    <div className={styles.form_group}>
                        <label htmlFor="email"> email</label>
                        <div className={styles.form_controller}>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter roll' name="" id="email" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password"> password</label>
                        <div className={styles.form_controller}>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter password' name="" id="password" />
                        </div>
                    </div>
                    <div className={styles.text}>  don't have an account? <Link to="/resolver/register"> <span>register</span></Link> </div>
                    <Button colorname="#222420" boxShadow="#222420" submitdata={login} type="submit" name="login" > </Button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </Container>
    )
}

export default Resoverlogin