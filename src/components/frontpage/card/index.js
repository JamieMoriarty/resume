import React from 'react';

import styles from './styles.module.scss'

const FrontPageCard = ({ title, description, children }) => {
    const [active, setActive] = React.useState(false)

    return(
        <button className={styles.card} onClick={() => setActive(!active)}>
            <h3>{title}<span className={styles.card__expand}>expand</span></h3>
            <p>{description}</p>
            <div className={`${styles.card__content} ${!active? styles['card__content--hidden'] : ''}`}></div>
        </button>
    );
}

export default FrontPageCard
