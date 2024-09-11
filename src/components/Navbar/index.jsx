import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Searchbar from '../../widgets/searchbar'
import brandlogo from '../../assets/srimtf.png'

import Button from '../../widgets/Button'

import { Link, useLocation } from 'react-router-dom'
import Mobilenavbar from '../MobileNavbar'
const Navbar = () => {
    const { pathname } = useLocation()
    const [width1, setWidth1] = useState(window.innerWidth);
    const setwidth = () => {
        setWidth1(() => window.innerWidth);
    }

    window.addEventListener('resize', setwidth)

    return (
        <div id="nav" className={styles.navcont}>
            {width1 >= 700 ? <>     <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
                <div className={styles.searchbarcont} >
                    <Searchbar></Searchbar>
                </div>
                <ul className=''>
                    <li className={pathname === "/home" ? styles.home : ""}>home</li>
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
                </ul>
                <div>
                    <Button boxShadow="#222420" colorname="#222420" name="services" ></Button>
                </div>
            </> :
                <Mobilenavbar></Mobilenavbar>
            }




        </div>
    )
}

export default Navbar