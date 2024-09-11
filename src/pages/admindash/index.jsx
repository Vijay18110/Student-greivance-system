import React from 'react'
import styles from './index.module.css'
import Navbar from '../../components/Navbar'
import Dashcom from '../../components/studentdshcom'
import Admindashcom from '../../components/Admindash'
import Admcom from '../../widgets/Adcom'
import Comlist from '../../components/Admindashcomlaintslist'
const Admindash = () => {
    return (
        <div className={styles.admindashcont}>
            <Navbar />
            <div className={styles.addashcont} >
                <Admindashcom></Admindashcom>
                <Comlist></Comlist>
            </div>


        </div>
    )
}

export default Admindash