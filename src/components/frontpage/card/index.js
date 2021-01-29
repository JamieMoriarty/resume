import React from 'react';

import styles from './styles.module.scss'

const FrontPageCard = ({ title, description, href }) => {
    return(
        <a href={href} className={styles.card}>
            <h3>{title} &rarr;</h3>
            <p>{description}</p>
        </a>
    );
}

export default FrontPageCard
