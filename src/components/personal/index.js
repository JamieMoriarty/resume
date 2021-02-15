import React from 'react';

// data:
import personalStuff from 'data/personalStuff.json';

// scss:
import styles from './Personal.module.scss';

const PersonalStuff = () => {
    return (
        <div className={styles['personal-module']}>
            {personalStuff.content.map((paragraph, index) => (
                <p key={`personal_stuff_${index}`}>{paragraph}</p>
            ))}
        </div>
    );
};

export default PersonalStuff;
