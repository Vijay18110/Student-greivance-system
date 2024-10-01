import React from 'react'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Card from '../../components/Card'
import styles from './Home.module.css'
import img1 from '../../assets/card/hands.png'
import img2 from '../../assets/card/complaints.jpeg'
import img3 from '../../assets/card/complaintsmain.jpeg'
import img4 from '../../assets/card/complaintssol.jpeg'
import Container from '../../components/container';
const Home = () => {
    return (
        <>
            <nav>
                <Navbar ></Navbar>
            </nav>
            <Main></Main>
            <div className={styles.cardcont}>
                <Card img={img1}></Card>
                <Card img={img2}></Card>
                <Card img={img3}></Card>
                <Card img={img4}> </Card>
            </div>
        </>
    )
}

export default Home