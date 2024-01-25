import React from 'react'
import styles from "../../styles/Product.module.css"

const ProductComponent = (props) => {
  return (
    <div className={styles.productDiv}>
      <img src={props.img}></img>
      <h3>{props.text}</h3>
    </div>
  )
}

export default ProductComponent