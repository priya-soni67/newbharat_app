import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from '../styles/Home.module.css'
import image1 from '../Image/cravvings 1.png'
import image2 from '../Image/eoffice.png'
import image3 from '../Image/icea.jpg'
import image4 from '../Image/ifci-logo.jpg'
import image5 from '../Image/mobnia.jpg'
import image6 from '../Image/negd.jpg'
import Service from "../component/Service";
import Product from "../component/Product";
import About from "../component/About";

const Home = () => {

    const localImages = [
        require('../Image/slider.png'),
        require('../Image/Rectangle.png'),
    ];

    const image = [
        { url: localImages[0] },
        { url: localImages[1] },
    ];

    return (
        <div>
            <div className={styles.heroSection}>
                <SimpleImageSlider
                    width={"100%"}
                    height={504}
                    images={image}
                    showBullets={true}
                    showNavs={true}
                />
                <div className={styles.heroTextContainer}>
                    <h6 className={styles.smallTitle}>Welcome to New Bharat</h6>
                    <p className={styles.text}>We Are Here Let’s Give<br /> The World Future</p>
                    <p className={styles.welcometext}>Welcome to New Bharat, where we <br>
                    </br>redefine the future through precision engineering<br></br> and technological innovation.</p>
                    <button className={styles.btn}>Explore Products</button>
                </div>
            </div>
            <div className="w-100 center ">
                <div className="center flex-wrap max-w-container section">
                    <img src={image4} className={styles.img} />
                    <img src={image6} className={styles.img} />
                    <img src={image3} className={styles.img} />
                    <img src={image2} className={styles.img} />
                    <img src={image1} className={styles.img} />
                    <img src={image5} style={{ padding: "1em 0" }} className={styles.img} />
                </div>
            </div>
            <Service />
            <Product />
            <About />
        </div>
    )
}

export default Home;