import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { IoMdHome } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Mobilenavbar from '../../MobileNavbar';
const Mobilenavbar2 = () => {
    const { pathname } = useLocation()
    const [click, setClick] = useState(false)
    const [className, setClassname] = (styles.navcont);
    const toggle = () => {
        setClick(true)

    }
    return (
        <>
            <div style={{ zIndex: "10" }} id="nav" className={className}>
                <div style={{ width: "100%", display: "flex", justifyContent: "end", marginRight: "20px" }}>
                    <div style={{ color: "red", display: "flex", justifyContent: "center", fontSize: "100px", width: "50px", height: "50px", borderRadius: "50%", boxShadow: "0 0 10px black" }} className={styles.FaBars}><span onClick={(e) => toggle(e)}>X</span></div>
                </div>
                <div className={styles.content}>
                    <div >
                        <Link className={styles.icons} to="/home">
                            <i>
                                <IoMdHome />
                            </i>
                            <span>
                                Home
                            </span>
                        </Link>
                    </div>
                    <div aria-disabled className={styles.icons}>
                        <span>
                            register/login
                        </span>
                    </div>

                    <div className={styles.icons}>
                        <Link className={styles.icons} to="/student/login">                            <i>
                            <PiStudent />
                        </i>
                            <span>
                                student
                            </span>
                        </Link>

                    </div>
                    <div >
                        <Link to='/admin/login' className={styles.icons}>
                            <i>
                                <RiAdminFill />
                            </i>
                            <span>
                                admin
                            </span>
                        </Link>
                    </div>
                    <div className={styles.icons}>
                        <Link className={styles.icons} to='/resolver/login'>                             <i>
                            <AiOutlineSolution />
                        </i>
                            <span>
                                resolver
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobilenavbar2