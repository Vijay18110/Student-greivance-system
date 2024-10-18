import React from "react";
import Container from "../../components/container";
import styles from './index.module.css';
import { PiPhone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return <Container>
        <div className={styles.footerCont}>
            <div className={styles.headings}>
                <div className={styles.left}>
                    <h3>Usefull links</h3>
                    <p>
                        <span>
                            Home
                        </span>
                        <span>Contact Us</span>
                        <span>Infrastructure</span>
                        <span>About us</span>
                        <span> Our Prospectus</span>
                    </p>
                </div>
                <div className={styles.right}>
                    <h3>Contact Us </h3>
                    <div>
                        <span>NH-24, Sitapur Road, Bakshi ka Talab, Lucknow-226201</span>
                        <p>
                            <span><PiPhone /></span>
                            <span>97930-00005,6,7</span>
                        </p>
                        <p>
                            <span><MdEmail /></span>
                            <span>srgi666@gmail.com</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </Container>
};

export default Footer;
