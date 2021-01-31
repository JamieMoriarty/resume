import React from 'react';

import { format } from 'date-fns';
import { byPositionStartDate } from 'data/utils/sort';

import styles from './Organisations.module.scss';

const OrganisationPost = ({ organisation }) => {
    const { name, positions } = organisation;
    return (
        <>
            {positions.length === 1 && <SinglePositionPost {...{ organisationName: name, ...positions[0] }} />}
            {positions.length > 1 && <MultiplePositionsPost {...organisation} />}
        </>
    );
};

const SinglePositionPost = ({ organisationName, title, start, end, description, keyWords }) => {
    return (
        <section className={styles['organisation-post']}>
            <header className={styles['organisation-post__header']}>
                <h1 className={styles['organisation-post__title']}>{title}</h1>
                <h2 className={styles['organisation-post__subtitle']}>{organisationName}</h2>
                <p className={styles['organisation-post__time']}>
                    {format(start, 'do MMMM y')} - {end ? format(end, 'do MMMM y') : ''}
                </p>
            </header>
            <div className={styles['single-position']}>
                <p>{description}</p>
                {/*<ul>
                    {keyWords.map(word => (
                        <li key={`${organisationName}_keyword_${word}`}>{word}</li>
                    ))}
                </ul>*/}
            </div>
        </section>
    );
};

const MultiplePositionsPost = ({ id, name, positions }) => {
    const start = positions[0].start;
    const end = positions[positions.length - 1].end;

    const sortedPositions = positions.sort(byPositionStartDate);
    return (
        <section className={styles['organisation-post']}>
            <header className={styles['organisation-post__header']}>
                <h1 className={styles['organisation-post__title']}>{name}</h1>
                <p className={styles['organisation-post__time']}>
                    {format(start, 'do MMMM y')} - {end ? format(end, 'do MMMM y') : ''}
                </p>
            </header>
            <div className={styles['multiple-positions']}>
                <ol className={styles['multiple-positions__list']}>
                    {sortedPositions.map(position => (
                        <li key={`${id}_${position.title}`} className={styles['multiple-positions__entry']}>
                            <p>{position.description}</p>
                            {/*<ul>
                                {position.keyWords.map(word => (
                                    <li key={`${name}_${position.title}_keyword_${word}`}>{word}</li>
                                ))}
                            </ul>*/}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default OrganisationPost;
