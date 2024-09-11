import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useCookies } from 'react-cookie'
const Login = () => {
    const [rollno, setRollno] = useState("")
    const [password, setPassword] = useState("")
    const [cookie, createcookie, removecookie] = useCookies();

    const navigate = useNavigate();
    const { state } = useLocation();


    console.log(state)
    const login = async () => {
        const r = await fetch("http://localhost:3000/students", {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ rollno: rollno, password: password })
        });
        const data = await r.json();

        if (data.msg === true) {
            createcookie(["student"], state.name)
            navigate('/student/dash', { replace: true })
        }
        else {
            toast.error("please enter valid rollno or password", {
                position: 'top-left',
                autoClose: 8000,
                pauseOnHover: true
            })
        }
    }
    return (
        <>

            <div className={styles.container}>
                <div className={styles.formcont}>

                    <div className={styles.form_group}>
                        <label htmlFor="email"> rollno</label>
                        <div className={styles.form_controller}>
                            <input onChange={(e) => setRollno(e.target.value)} type="tel" placeholder='enter roll' name="" id="email" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password"> password</label>

                        <div className={styles.form_controller}>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter password' name="" id="password" />
                        </div>
                    </div>
                    <div className={styles.text}>  don't have an account? <Link to="/student/register"> <span>register</span></Link> </div>
                    <Button colorname="#222420" boxShadow="#222420" submitdata={login} type="submit" name="login" > </Button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Login