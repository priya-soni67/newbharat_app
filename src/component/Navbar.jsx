import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    const linearGradient = "linear-gradient(322.81deg, #0054D1 11.97%, #4FA7FF 93.43%)";

    const [isNavVisible, setIsNavVisible] = useState(window.innerWidth > 768);

    return (
        <div className="container center">
            <div className={styles.subdiv + " d-flex justify-space-between flex-grow-1 max-w-container"}>
                <div className={styles.spanstyle} style={{ backgroundImage: linearGradient, WebkitBackgroundClip: "text", color: "transparent" }}>New Bharat</div>
                <div className="center">
                    <div className={styles.menuContainer + " " + (isNavVisible ? styles.visible : "") + " center "}>
                        <div className={styles.menuicon} onClick={() => setIsNavVisible(!isNavVisible)} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                        <ul className={styles.navList}>
                            <Link to="/">Home</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contactus">Contact Us</Link>
                        </ul>
                    </div>
                    <button className={styles.btn}>Let's Talk</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
