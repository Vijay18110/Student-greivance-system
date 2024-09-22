import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Searchbar from '../../widgets/searchbar'
import brandlogo from '../../assets/srimtf.png'

import Button from '../../widgets/Button'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import Mobilenavbar from '../MobileNavbar'
const Navbaradmin = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const [width1, setWidth1] = useState(window.innerWidth);
    const setwidth = () => {
        setWidth1(() => window.innerWidth);
    }
    window.addEventListener('resize', setwidth)

    const logoutadmin = () => {
        localStorage.removeItem("admin");
        navigate('/home');

    }
    return (
        <div id="nav" className={styles.navcont}>
            <>     <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
                <div className={styles.searchbarcont} >
                    {/* <Searchbar></Searchbar> */}
                </div>
                <ul className={styles.ul}>
                    <Link to="/home"><li className={pathname === "/home" ? styles.home : ""}>home</li></Link>
                    <li onClick={logoutadmin}>logout</li>
                    <li>Remove users</li>
                </ul>

            </>
        </div>
    )
}

export default Navbaradmin