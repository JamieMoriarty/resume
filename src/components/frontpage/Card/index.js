import React from 'react';

import styles from './Card.module.scss';

const FrontPageCard = ({ title, description, children }) => {
    const [active, setActive] = React.useState(false);

    return (
        <article
            className={`${styles['card']} ${
                !active ? styles['card--interactive'] : ''
            }`}
        >
            <button
                className={
                    styles['card__header'] +
                    ' ' +
                    styles['card__no-style-button']
                }
                onClick={() => setActive(!active)}
            >
                <header>
                    <h1 className={styles['card__title']}>{title}</h1>
                    <span className={styles.card__toggle}>
                        {active ? 'collapse' : 'expand'}
                    </span>
                </header>
                {!active && (
                    <p className={styles.card__summary}>{description}</p>
                )}
            </button>
            {active && (
                <div
                    className={`${styles.card__content} ${
                        !active ? styles['card__content--hidden'] : ''
                    }`}
                >
                    {children}
                </div>
            )}
        </article>
    );
};

export default FrontPageCard;
