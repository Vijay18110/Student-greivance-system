import React from 'react';
import styles from './index.module.css';
import { useCookies } from 'react-cookie';
import Adsmcom from '../../widgets/adsmallcom';
import Admcom from '../../widgets/Adcom';
const Admindashcom = (props) => {
    const [cookie, createcookie, removecookie] = useCookies();
    return (
        <>
            <div className={styles.dashcont}>
                <div className={styles.x}>
                    <Adsmcom></Adsmcom>
                    <Admcom scolor2="#c27878" s1bgcolor="#d45050" stext1="complaints" stext2={props.noofcom} scolor1="#c27878"></Admcom>
                    <Admcom s1bgcolor="#78c2a4" stext1="complaints forwarded" stext2="0" scolor1="green"></Admcom>
                    <Admcom s1bgcolor="#8478c2" stext1="pending complaints" stext2="9" scolor1="blue"></Admcom>
                </div>
            </div>
        </>
    )
}
export default Admindashcom;