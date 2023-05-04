import React from 'react'
//Styles
import styles from './Features.module.css'
//components
import Feature from '../../components/Feature/Feature'
//data
import data from "../../data/featuresData"

function Features() {
    return (
      <section className={styles.features}>
        {data.map(({ id, image, alt, title, description }) => (
          <Feature
            key={id}
            image={image}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
      </section>
    );
}

export default Features
