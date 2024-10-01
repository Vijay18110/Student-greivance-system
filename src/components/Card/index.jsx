import React from "react";
import styles from './index.module.css';
const Card = ({ img }) => {
    return (<div className={styles.cardcont}>
        <img src={img} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, autem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat, asperiores beatae consectetur voluptatibus nulla a ducimus possimus,
            laborum impedit illo quia accusantium molestias eum unde sint pariatur natus
            ratione? Quia.
        </p>
    </div>);
};

export default Card;
