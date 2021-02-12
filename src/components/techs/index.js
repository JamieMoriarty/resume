import React from 'react';

// Data:
import techExperience from 'data/techExperience.json';

// styles
import styles from './Techs.module.scss';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const Techs = () => {
    return (
        <article>
            <TechCategory title={techExperience.languages.title}>
                <ul className={styles['techs-module__category-list']}>
                    {techExperience.languages.items.map(item => (
                        <li key={`tech_category_language_${item}`} className={styles['techs-module__category-item-3']}>
                            {item}
                        </li>
                    ))}
                </ul>
            </TechCategory>
            <TechCategory title={techExperience.frameworks.title}>
                {Object.keys(techExperience.frameworks.items).map(language => (
                    <React.Fragment key={`tech_category_frameworks_${language}`}>
                        <h2>{language}</h2>
                        <ul className={styles['techs-module__category-list']}>
                            {techExperience.frameworks.items[language].map(item => (
                                <li key={`tech_category_frameworks_${language}_${item}`} className={styles['techs-module__category-item-3']}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                ))}
            </TechCategory>
        </article>
    );
};

const TechCategory = ({ title, children }) => {
    return (
        <section>
            <header>
                <h1 className={styles['techs-module__category-title']}>{capitalize(title)}</h1>
            </header>
            {children}
        </section>
    );
};

export default Techs;
