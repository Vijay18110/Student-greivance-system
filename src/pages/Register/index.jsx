import React from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formcont}>
                <div className={styles.form_group}>
                    <label htmlFor="name"> name</label>
                    <div className={styles.form_controller}>
                        <input type="text" name="" placeholder=' enter name' id="name" />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email"> email</label>
                    <div className={styles.form_controller}>
                        <input type="email" placeholder='enter email' name="" id="email" />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="password"> password</label>

                    <div className={styles.form_controller}>
                        <input type="password" placeholder='enter password' name="" id="password" />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="cpassword"> confirm-password</label>

                    <div className={styles.form_controller}>
                        <input type="password" placeholder='confirm password' name="" id="cpassword" />
                    </div>
                </div>
                <div className={styles.text}>  aready have an account? <Link to="/login"> <span>login</span></Link> </div>

                <Button type="submit" name="submit" > </Button>
            </div>

        </div>

    )
}

export default Register