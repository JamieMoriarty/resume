import React from 'react';

// Data:
import techExperience from 'data/techExperience.json'

// styles
import styles from './Techs.module.scss'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

const Techs = () => {
    return (
        <article>
            {Object.keys(techExperience).map(category => (
                <section key={`tech_category_${category}`}>
                    <h1 className={styles['techs-module__category-title']}>{capitalize(category)}</h1>
                    <ul className={styles['techs-module__category-list']}>
                        {techExperience[category].map(item => (
                            <li key={`tech_category_${category}_${item}`} className={styles[category === 'languages' ? 'techs-module__category-item-3' : 'techs-module__category-item-2']}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </article>
    )
}

export default Techs
