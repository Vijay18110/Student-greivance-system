import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { FaBars } from "react-icons/fa";

import { Link, useLocation } from 'react-router-dom'
import Searchbar from '../../../widgets/searchbar'
import Mobilenavbar from '../../MobileNavbar';
const Mobilenavbar2 = () => {
    const { pathname } = useLocation()
    const [click, setClick] = useState(false)
    const toggle = () => { setClick(true) }

    return (
        <div id="nav" className={styles.navcont}>

            {click ? <Mobilenavbar></Mobilenavbar>
                : <>
                    <div className={styles.nav}>
                        <div className={styles.scont}>

                            <Searchbar></Searchbar>
                        </div>
                        <ul>
                            <li className={`${pathname === "/home" ? styles.home : ""}`} >home</li>
                            <li className={styles.login}>login
                                <div className={styles.dropdown}>
                                    <Link to="/student/login">
                                        <div> student
                                            <hr /></div>
                                    </Link>
                                    <Link to='/admin/login'>
                                        <div> admin
                                            <hr />
                                        </div>
                                    </Link>
                                    <div> resolver
                                        <hr />
                                    </div>
                                </div>
                            </li>
                            <li onClick={toggle}><FaBars size="30px" color='black' /></li>
                        </ul>
                    </div>
                </>
            }





        </div>
    )
}

export default Mobilenavbar2