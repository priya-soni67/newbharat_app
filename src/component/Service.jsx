import React from "react";
import styles from "../styles/Service.module.css"
import image1 from '../Image/Rectangle 17.png'
import cpuicon from "../Image/cpuicon.png";
import laptopicon from "../Image/laptopicon.png";
import smartphoneicon from "../Image/smartphoneicon.png";

const Service = () => {
    return (
        <div className="w-100 center">
            <div id="services" className={styles.services + " center container max-w-container section flex-wrap"}>
                <div className={styles.serviceText}>
                    <h2>Our Services</h2>
                    <p className={styles.text}>Explore Our Services<br /> Which You Want</p>
                    <p className={styles.welcometext}>we offer a comprehensive range of services tailored<br />to meet the diverse needs of our clients. Our<br />commitment to quality and innovation sets us apart<br />we offer a comprehensive range of services tailored to meet the diverse needs of our clients. Our commitment to quality and innovation sets us apart in the competitive landscape of chip manufacturing. </p>
                </div>
                <div className={styles.imgdiv}>
                    <img src={image1} className={styles.img} />
                    <div className={styles.subimg_div}>
                        <div className={styles.img_div}>
                            <img src={cpuicon} className={styles.imgs} />
                            <div className={styles.spandiv}>
                                <span className={styles.texts1}>150</span>
                                <span className={styles.texts}>Computer System</span>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.img_div}>
                            <img src={laptopicon} className={styles.imgs} />
                            <div className={styles.spandiv}>
                                <span className={styles.texts1}>89</span>
                                <span className={styles.texts}>Laptop</span>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.img_div}>
                            <img src={smartphoneicon} className={styles.imgs} />
                            <div className={styles.spandiv}>
                                <span className={styles.texts1}>99</span>
                                <span className={styles.texts}>Smart Phone</span>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service;