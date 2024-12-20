import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Container from '../../components/container'
const Register = () => {
    useEffect(() => {
    }, [])
    const [departments, setDepartments] = useState(["B.tech", "M.tech", "MBA", "d-pharma(ayurved)"]);
    const [branches, setBranches] = useState(["computer science", "information technology", "artificial inteligence", "robotics", "machine learning", "mechanical", "electrical", "electronics", "biotechnology", "civil", "b-voc"])
    const [branch, setBranch] = useState("");
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [password, setPassword] = useState("");
    const [sdata, setSdata] = useState([]);
    const navigate = useNavigate();
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
        else if (email === "") {
            toast.error("fill email field", toastobj)
            return false;
        }
        else if (password === "") {
            toast.error("fill password field", toastobj)
            return false;
        }
        else if (branch === "") {
            toast.error("select your branch  ", toastobj)
            return false;
        }
        else if (department === "") {
            toast.error("select your  department", toastobj)
            return false;
        }
        else if (rollno === "") {
            toast.error("fill rollno field", toastobj);
            return false;
        }

        else return true;
    }
    const submitdata = async (e) => {
        if (handlevalidation()) {
            // http://localhost:3000/students
            const res = await fetch("https://grievance-system-f1fa6-default-rtdb.firebaseio.com/studentdata.json", {
                method: "POST",
                body: JSON.stringify({ name: name, email: email, password: password, rollno: rollno, department: department, branch: branch })
            });
        }
    }
    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.formcont}>
                    <div className={styles.form_group}>
                        <label htmlFor="name"> select department</label>
                        <div className={styles.form_controller}>
                            {/* <input type="text" name="" placeholder=' enter name' id="name" /> */}
                            <select onChange={(e) => setDepartment(e.target.value)} className={styles.select} name="" id="">
                                <option value="">select </option>
                                {
                                    departments.map((departments) => <option>{departments}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="name"> select branch</label>
                        <div className={styles.form_controller}>
                            {/* <input type="text" name="" placeholder=' enter name' id="name" /> */}
                            <select onChange={(e) => setBranch(e.target.value)} className={styles.select} name="" id="">
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
                        <label htmlFor="name"> name</label>
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
                    <div className={styles.form_group}>
                        <label htmlFor="cpassword"> rollNo</label>
                        <div className={styles.form_controller}>
                            <input onChange={(e) => setRollno(e.target.value)} type="tel" placeholder='enter roll no' name="" id="cpassword" />
                        </div>
                    </div>
                    <div className={styles.text}>  already have an account? <Link to="/student/login"> <span>login</span></Link> </div>
                    <Button colorname="#0af221" boxShadow="#0af221" submitdata={submitdata} type='submit' name="submit" > </Button>
                </div>

            </div >
            <ToastContainer></ToastContainer>
        </Container>
    )
}

export default Register