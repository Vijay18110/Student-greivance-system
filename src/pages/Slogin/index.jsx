import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useCookies } from 'react-cookie'
import Container from '../../components/container'
import Swal from 'sweetalert2'
const Login = () => {
    const [rollno, setRollno] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [cookie, createcookie, removecookie] = useCookies();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/students").then((res) => res.json()).then((res) => setStudents(res));

    }, [])
    const login = async () => {
        const r = await fetch("https://grievance-system-f1fa6-default-rtdb.firebaseio.com/studentdata.json", {
            method: "GET",
            headers: { "content-type": "application/json" },
        });
        const data = await r.json();
        if (data) {
            const d = [];
            for (const ele in data) {
                d.push(data[ele]);
            }
            const filltereduser = d.find((stu) => stu.rollno === rollno && stu.password === password)
            if (filltereduser) {
                localStorage.setItem("token", filltereduser.rollno);
                navigate('/student/dash', { replace: true, state: filltereduser.name });
            }
            else {
                Swal.fire("Please enter valid data!");
            }
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
        <Container>
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
        </Container>
    )
}

export default Login