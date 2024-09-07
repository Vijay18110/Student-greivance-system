import React from 'react'
import styles from './index.module.css'
const Listitem = ({ name, getlistname, listname }) => {
    return (
        <li className={name === listname ? styles.listitem : {}} onClick={() => getlistname(name)}>{name}</li>
    )
}
export default Listitem;