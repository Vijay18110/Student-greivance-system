import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Container from '../../components/container'
const Adminregi = () => {
    const [position, setposition] = useState("");
    const [id, setid] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const toastobj = {
        position: 'bottom-right',
        pauseOnHover: true,
        autoClose: 8000,
    }

    const handlevalidation = () => {
        if (name === "") {
            toast.error("fill name field", toastobj)
            return false;
        }
        if (email === "") {
            toast.error("fill email field", toastobj)
            return false;
        } if (password === "") {
            toast.error("fill password field", toastobj)
            return false;
        }
        if (position === "") {
            toast.error("select your  position", toastobj)
            return false;
        }
        if (id === "") {
            toast.error("fill id field", toastobj)
            return false;
        }
        else return true;
    }



    const submitdata = async (e) => {


        if (handlevalidation()) {
            const res = await fetch("https://grievance-system-f1fa6-default-rtdb.firebaseio.com/admindata.json", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({ name: name, email: email, password: password, id: id, position: position })
            })
            const data = await res.json();
            navigate("/admin/login", { replace: true, state: data });
        }
    }
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.formcont}>
                    <div className={styles.form_group}>
                        <label htmlFor="name"> select position</label>
                        <div className={styles.form_controller}>
                            <input placeholder='enter your position' onChange={(e) => setposition(e.target.value)} className={styles.select} name="" id="">
                            </input>
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="name"> enter id</label>
                        <div className={styles.form_controller}>
                            <input placeholder='enter id' onChange={(e) => setid(e.target.value)} className={styles.select} name="" id="">

                            </input>
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="name">  admin name</label>
                        <div className={styles.form_controller}>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" placeholder=' enter name' id="name" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="email"> email</label>
                        <div className={styles.form_controller}>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter email' name="" id="email" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password"> password</label>

                        <div className={styles.form_controller}>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter password' name="" id="password" />
                        </div>
                    </div>

                    <div className={styles.text}>  already have an account? <Link to="/admin/login"> <span>login</span></Link> </div>
                    <Button colorname="#0af221" boxShadow="#0af221" submitdata={submitdata} type='submit' name="submit" > </Button>
                </div>
            </div >
            <ToastContainer></ToastContainer>
        </Container>
    )
}

export default Adminregi