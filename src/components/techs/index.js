import React from 'react';

// Data:
import techExperience from 'data/techExperience.json'

const Techs = () => {
    return (
        <article>
            {Object.keys(techExperience).map(category => (
                <React.Fragment key={`tech_category_${category}`}>
                    <h1>{category}</h1>
                    <p>
                        <ul>
                            {techExperience[category].map(item => (
                                <li key={`tech_category_${category}_${item}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </p>
                </React.Fragment>
            ))}
        </article>
    )
}

export default Techs
