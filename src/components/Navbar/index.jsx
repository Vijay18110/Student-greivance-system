import React from 'react'
import styles from './index.module.css'
import Searchbar from '../../widgets/searchbar'
import brandlogo from '../../assets/vijay1.png'
import Listitem from '../../widgets/Listitem'
const Navbar = ({ getlistname, listname }) => {
    return (
        <div className={styles.navcont}>
            <div className={styles.logocont}><a to="#"><img src={brandlogo} alt="" /> </a></div>
            <div className={styles.searchbarcont} >
                <Searchbar></Searchbar>
            </div>
            <ul className=''>
                <Listitem listname={listname} getlistname={getlistname} name="home"></Listitem>
                <Listitem listname={listname} getlistname={getlistname} name="about"></Listitem>
                <Listitem listname={listname} getlistname={getlistname} name="contact"></Listitem>
                <Listitem listname={listname} getlistname={getlistname} name="services"></Listitem>
            </ul>
        </div>
    )
}

export default Navbar