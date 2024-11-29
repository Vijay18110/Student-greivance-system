import React from 'react'
import styles from './index.module.css'
import { IoIosSearch } from "react-icons/io";
const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <IoIosSearch color={"black"} size={30}></IoIosSearch>
            <input type="text" placeholder='type for search' />
        </div>
    )
}
export default Searchbar;