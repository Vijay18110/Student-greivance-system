import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { RiAdminFill } from "react-icons/ri";
import brandlogo from '../../assets/srimtf.png'
import Button from '../../widgets/Button'
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import Mobilenavbar2 from '../complaints/mobilenavbar2'
const Mobilenavbar = () => {
    const { pathname } = useLocation()
    const [click, setClick] = useState(false)
    const [className, setClassname] = useState(styles.navcont1)
    const toggle = (e) => {
        setClick(!click)
        setClassname(styles.navcont2)
    }
    return (
        <div id="nav" className={styles.navcont}>
            <>
                <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
                <div className={styles.FaBars}><span onClick={(e) => toggle(e)}> <FaBars /></span></div>
            </>
            {
                click && <>
                    <div id="nav" className={className}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "end", marginRight: "20px" }}>
                            <div style={{ color: "red", display: "flex", justifyContent: "center", fontSize: "100px", width: "50px", height: "50px", borderRadius: "50%", boxShadow: "0 0 10px" }} className={styles.FaBars}><span onClick={(e) => toggle(e)}><FaTimesCircle font="100px"></FaTimesCircle></span></div>
                        </div>
                        <div className={styles.content}>
                            <div >
                                <Link className={styles.icons} to="/home">
                                    <i>
                                        < IoMdHome />
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
            }








        </div>
    )
}

export default Mobilenavbar