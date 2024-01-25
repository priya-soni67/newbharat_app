import React from 'react'
import styles from "../styles/Footer.module.css";
import linkedin from "../Image/linkedin.png";
import facebook from "../Image/facebook.png";
import twitter from "../Image/twitter.png";

const Footer = () => {
    const linearGradient = "linear-gradient(322.81deg, #0054D1 11.97%, #4FA7FF 93.43%)";
    return (
        <div className="w-100 center">
            <div id='contactus' className={styles.contactus + " center container section flex-wrap"}>
                <div className={styles.upperDiv}>
                    <div className={styles.footerInfo}>
                        <span className={styles.spanstyle} style={{ backgroundImage: linearGradient, WebkitBackgroundClip: "text", color: "transparent" }}>New Bharat</span>
                        <p className={styles.aboutDescription}>we stand at the forefront of technological evolution. Founded on a vision of shaping the digital landscape, we bring decades of expertise in chip manufacturing.</p>
                    </div>
                    <div className={styles.quickLinksDiv}>
                        <h3>Quick Links</h3>
                        <div className={styles.quickLinkss}>
                            <div className={styles.quickLink}>
                                <span>Home</span>
                                <span>Products</span>
                            </div>
                            <div className={styles.quickLink}>
                                <span>Services</span>
                                <span>About Us</span>
                            </div>
                            <div className={styles.quickLink}>
                                <span>Contact Us</span>
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subscribeInfo}>
                        <h3>Subscribe</h3>
                        <div className={styles.innerSubsDiv}>
                            <input className={styles.searchInput} placeholder='Get Product Updates' type="text" name="" id="" />
                            <button className="center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className={styles.lineBreaker} />
                <div className={styles.bottomDiv}>
                    <div className={styles.socialMedia}>
                        <div className={styles.socialMediaIcon}>
                            <img src={linkedin} alt="" />
                        </div>
                        <div className={styles.socialMediaIcon}>
                            <img src={facebook} alt="" />
                        </div>
                        <div className={styles.socialMediaIcon}>
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        &#169; 2024 New Bharat. All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer