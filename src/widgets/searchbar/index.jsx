import React from 'react'
import styles from './index.module.css'
import { IoIosSearch } from "react-icons/io";
const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <div className={styles.iconcont}>

                <IoIosSearch></IoIosSearch>
            </div>
            <input type="text" placeholder='type for search' />
        </div>
    )
}

export default Searchbar