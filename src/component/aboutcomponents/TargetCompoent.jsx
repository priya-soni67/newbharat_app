import React from 'react'
import styles from "../../styles/About.module.css"

const TargetCompoent = (props) => {
  return (
    <div className={styles.targetDiv}>
      <img className={styles.targetImage} src={props.img} alt="" />
      <div className={styles.targetInfo}>
        <h5 className={styles.targetTitle}>{props.title}</h5>
        <p className={styles.targetDesc}>{props.description}</p>
      </div>
    </div>
  )
}

export default TargetCompoent