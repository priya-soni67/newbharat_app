import React from "react";
import smartphone from "../Image/smartphone.png";
import cpuimage from "../Image/cpu.png";
import aerochips from "../Image/aerochips.png";
import corechips from "../Image/corechips.png";
import styles from "../styles/Product.module.css"
import ProductComponent from "./productcompoents/ProductComponent";

const Product = () => {
    return (
        <div className="w-100 center">
            <div id="products" className="container max-w-container section">
                <div className="center">
                    <div className={styles.upperDiv}>
                        <h1 className="title">Products</h1>
                        <p className="sub-text">we stand at the forefront of technological evolution. Founded on a vision of shaping the digital landscape, we bring decades of expertise in chip manufacturing.</p>
                    </div>
                </div>
                <div className={styles.bottomDiv}>
                    <ProductComponent img={smartphone} text="SmartPhone" />
                    <ProductComponent img={cpuimage} text="Cpu" />
                    <ProductComponent img={aerochips} text="Aero Chips" />
                    <ProductComponent img={corechips} text="Core Chips" />
                </div>
            </div>
        </div>
    )
}

export default Product