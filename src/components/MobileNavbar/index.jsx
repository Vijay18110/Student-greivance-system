import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Searchbar from '../../widgets/searchbar'
import brandlogo from '../../assets/srimtf.png'
import Button from '../../widgets/Button'
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'
import Mobilenavbar2 from '../complaints/mobilenavbar2'
const Mobilenavbar = () => {
    const { pathname } = useLocation()
    const [click, setClick] = useState(false)
    const toggle = (e) => { setClick(true) }
    return (
        <div id="nav" className={styles.navcont}>

            {
                click ? <Mobilenavbar2></Mobilenavbar2> :

                    <>
                        <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
                        <div className={styles.FaBars}><span onClick={(e) => toggle(e)}> <FaBars /></span></div>
                    </>
            }
            {/* <div className={styles.searchbarcont} >
                <Searchbar></Searchbar>
            </div> */}

            {/*
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
            </div> */}







        </div>
    )
}

export default Mobilenavbar