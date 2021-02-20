import React from 'react';
import PropTypes from 'prop-types';

// Data:
import techExperience from 'data/techExperience.json';

// styles
import styles from './Techs.module.scss';

const Techs = () => {
    return (
        <section>
            <TechCategory title={techExperience.languages.title}>
                <div className="container-fluid">
                    <ul className={`row ${styles['techs-module__category-list']}`}>
                        {techExperience.languages.items.map(item => (
                            <li
                                key={`tech_category_language_${item}`}
                                className={`${styles['techs-module__category-item']} col-12 col-sm-6 col-md-4`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </TechCategory>
            <TechCategory title={techExperience.frameworks.title}>
                {Object.keys(techExperience.frameworks.items).map(language => (
                    <React.Fragment key={`tech_category_frameworks_${language}`}>
                        <h2 className={styles['techs-module__category-subtitle']}>{language}</h2>
                        <div className="container">
                            <ul className={`row ${styles['techs-module__category-list']}`}>
                                {techExperience.frameworks.items[language].map(item => (
                                    <li
                                        key={`tech_category_frameworks_${language}_${item}`}
                                        className={`${styles['techs-module__category-item']} col-6 col-md-4`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </React.Fragment>
                ))}
            </TechCategory>
        </section>
    );
};

const TechCategory = ({ title, children }) => {
    const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    return (
        <React.Fragment>
            <h1 className={styles['techs-module__category-title']}>{capitalize(title)}</h1>
            {children}
        </React.Fragment>
    );
};

TechCategory.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Techs;
