import React from 'react'
//Styles
import styles from "./Feature.module.css"

function Feature({image, alt, title, description}) {
    return (
      <>
        <div className={styles.featureItem}>
          <img src={image} alt={alt} className={styles.featureIcon} />
          <h3 className={styles.featureItemTitle}>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    );
}

export default Feature
