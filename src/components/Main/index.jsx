import React from 'react'
import styles from './index.module.css'
import img from '../../assets/vecteezy_blog.jpg'
import Button from '../../widgets/Button'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <>
            <div>

                <div className={styles.maincont}>
                    <img src={img} alt="" />
                    <div className={styles.content}>
                        <p style={{ fontSize: "x-large" }}>
                            grievance management system
                        </p>
                        <p className={styles.p2}>
                            <span>

                                A grievance system in a college is designed to address and resolve complaints and concerns from students, faculty, and staff. It typically involves the following steps:
                            </span>

                            <p>
                                <span> 1. *Submission*</span>: Individuals can file a grievance through a formal process, often using a designated form or online portal.
                            </p>
                            <p>
                                <span>  2. *Review*</span>: The grievance is reviewed by a committee or designated officer to determine its validity and the appropriate course of action.
                            </p>
                            <p>
                                <span>3. *Resolution*</span>: The college takes steps to resolve the grievance, which may include mediation, disciplinary actions, or other remedies.
                            </p>
                            <p>
                                <span>4. *Follow-up*</span>: The system often includes mechanisms to ensure that the resolution is effective and to address any further concerns.
                            </p>
                            <p className={styles.last}>
                                Colleges usually have specific policies and procedures outlined in their student or employee handbooks to guide this process.
                            </p>
                        </p>
                        <div className={styles.btncont}>
                            <Link to="/student/register">  <Button boxShadow="#0972e3" colorname="#0972e3" name="register"></Button></Link>
                            <Link to="/student/login">    <Button boxShadow="#6ae329" colorname="#6ae329" name="login"></Button></Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Main