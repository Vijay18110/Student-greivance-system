import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import Searchbar from '../../widgets/searchbar'
import brandlogo from '../../assets/srimtf.png'
import Button from '../../widgets/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Mobilenavbar from '../MobileNavbar'
const Resolvernavbar = () => {
    const Navigate = useNavigate()
    const { pathname } = useLocation()
    const [width1, setWidth1] = useState(window.innerWidth);
    const setwidth = () => {
        setWidth1(() => window.innerWidth);
    }
    window.addEventListener('resize', setwidth)
    const navigate = () => {
        Navigate('/home');
    }
    const logoutresolver = () => {
        localStorage.removeItem("resolver")
        Navigate('/home')
    }
    return (
        <div id="nav" className={styles.navcont}>
            {width1 >= 700 ? <> <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
                <div className={styles.searchbarcont} >
                    {/* <Searchbar></Searchbar> */}
                </div>
                <ul className=''>
                    <li onClick={navigate}>Home</li>
                    <li onClick={logoutresolver}>logout</li>

                </ul>
            </> :
                <Mobilenavbar></Mobilenavbar>
            }
        </div>
    )
}

export default Resolvernavbar