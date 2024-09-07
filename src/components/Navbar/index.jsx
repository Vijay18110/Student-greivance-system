import React from 'react'
import styles from './index.module.css'
import Searchbar from '../../widgets/searchbar'
import brandlogo from '../../assets/vijay1.png'
import Listitem from '../../widgets/Listitem'
import Button from '../../widgets/Button'
import { Link } from 'react-router-dom'
const Navbar = ({ getlistname, listname }) => {
    return (
        <div className={styles.navcont}>
            <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
            <div className={styles.searchbarcont} >
                <Searchbar></Searchbar>
            </div>
            <ul className=''>
                <Listitem listname={listname} getlistname={getlistname} name="home"></Listitem>
                <Link to='/register'  > <Listitem getlistname={getlistname} name="register"></Listitem></Link>
                <Link to="/login"><Listitem listname={listname} getlistname={getlistname} name="login"></Listitem></Link>
            </ul>
            <div>
                <Button name="SERVICES"></Button>
            </div>
        </div>
    )
}

export default Navbar