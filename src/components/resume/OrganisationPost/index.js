import React from 'react';

import { format } from 'date-fns';
import { byPositionStartDate } from 'data/utils/sort';

import styles from './Organisations.module.scss';
import PropTypes from 'prop-types';

const OrganisationPost = ({ organisation }) => {
    const { name, positions } = organisation;
    return (
        <>
            {positions.length === 1 && <SinglePositionPost {...{ organisationName: name, ...positions[0] }} />}
            {positions.length > 1 && <MultiplePositionsPost {...organisation} />}
        </>
    );
};

OrganisationPost.propTypes = {
    organisation: PropTypes.shape({
        name: PropTypes.string,
        positions: PropTypes.array,
    }),
};

const SinglePositionPost = ({ organisationName, title, start, end, description }) => {
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
            </div>
        </section>
    );
};

SinglePositionPost.propTypes = {
    organisationName: PropTypes.string,
    title: PropTypes.string,
    start: PropTypes.object,
    end: PropTypes.object,
    description: PropTypes.string,
    keyWords: PropTypes.array,
};

const MultiplePositionsPost = ({ name, positions }) => {
    const start = positions[0].start;
    const end = positions[positions.length - 1].end;

    const sortedPositions = positions.sort(byPositionStartDate);
    return (
        <section className={styles['organisation-post']}>
            <header className={styles['organisation-post__header']}>
                <h1 className={styles['organisation-post__title']}>{name}</h1>
                <p className={styles['organisation-post__time']}>
                    {format(start, 'do MMMM y')} - {end ? format(end, 'do MMMM y') : 'now'}
                </p>
            </header>
            <div className={styles['multiple-positions']}>
                <ol className={styles['multiple-positions__list']}>
                    {sortedPositions.map(position => (
                        <li key={position.id} className={styles['multiple-positions__entry']}>
                            <p>
                                <strong>{position.description.headline}</strong>
                            </p>
                            <p>{position.description.details}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

MultiplePositionsPost.propTypes = {
    name: PropTypes.string,
    positions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            start: PropTypes.object,
            end: PropTypes.object,
            description: PropTypes.object,
            keyWords: PropTypes.array,
        })
    ),
};

export default OrganisationPost;
