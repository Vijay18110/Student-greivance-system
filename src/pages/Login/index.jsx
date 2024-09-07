import React from 'react'
import styles from './index.module.css'
import Button from '../../widgets/Button'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formcont}>

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
                <div className={styles.text}>  don't have an account? <Link to="/register"> <span>register</span></Link> </div>
                <Button type="submit" name="login" > </Button>
            </div>

        </div>

    )
}

export default Login