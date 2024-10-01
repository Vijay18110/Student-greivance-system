import React from 'react'
import styles from './index.module.css'
import Comp from '../../widgets/dash'
import { useLocation } from 'react-router-dom'
import Card from '../../widgets/Card'
const Track = ({ click }) => {
    // const { state } = useLocation()
    return (
        <div className={styles.dashcont}>
            <Card value="status" click={click} circlename="status" cbgc="#ae15d4" pname="status" btnname="view list"></Card>
            <Card value="history" click={click} circlename="history" cbgc="#d415a1" pname="track history" btnname="view list"></Card>
        </div>
    )
}
export default Track