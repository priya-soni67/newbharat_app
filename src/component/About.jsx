import React from 'react';
import styles from "../styles/About.module.css"
import about1 from "../Image/about1.png"
import about2 from "../Image/about2.png"
import about3 from "../Image/about3.png"
import target1 from "../Image/target1.png"
import target2 from "../Image/target2.png"
import TargetCompoent from './aboutcomponents/TargetCompoent';

const About = () => {
  return (
    <div className="w-100 center" style={{ backgroundColor: '#F8F8F8' }}>
      <div id="about" className={styles.about + " center container max-w-container section"}>
        <div className={styles.leftContainer}>
          <div className={styles.leftImages}>
            <img src={about1} />
          </div>
          <div className={styles.rightImages}>
            <img className={styles.about2} src={about2} />
            <img className={styles.about3} src={about3} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <h4 className={styles.aboutHeader}>About us</h4>
          <h1 className={styles.aboutTitle}>We Like You To Know About Us</h1>
          <p className={styles.aboutDescription}>we stand at the forefront of technological evolution. Founded on a vision of shaping the digital landscape, we bring decades of expertise in chip manufacturing.</p>
          <div className={styles.rightBottomContainer}>
            <TargetCompoent img={target1} title="5m" description="Target Reach" />
            <TargetCompoent img={target2} title="200+" description="Circuit Design" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About