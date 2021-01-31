import React from 'react';

import { format } from 'date-fns';

const mostRecentFirst = dateSelector => (firstEntry, secondEntry) =>
    dateSelector(secondEntry) - dateSelector(firstEntry);

const OrganisationPost = ({ organisation }) => {
    const { name, positions } = organisation;
    return (
        <>
            {positions.length === 1 && (
                <SinglePositionPost
                    {...{ organisationName: name, ...positions[0] }}
                />
            )}
            {positions.length > 1 && (
                <MultiplePositionsPost {...organisation} />
            )}
        </>
    );
};

const SinglePositionPost = ({
    organisationName,
    title,
    start,
    end,
    description,
    keyWords,
}) => {
    return (
        <section>
            <header>
                <h1>{title}</h1>
                <h2>{organisationName}</h2>
                <p>
                    {format(start, 'do MMMM y')} -{' '}
                    {end ? format(end, 'do MMMM y') : ''}
                </p>
            </header>
            <p>{description}</p>
            <ul>
                {keyWords.map(word => (
                    <li key={`${organisationName}_keyword_${word}`}>{word}</li>
                ))}
            </ul>
        </section>
    );
};

const MultiplePositionsPost = ({ id, name, positions }) => {
    const start = positions[0].start;
    const end = positions[positions.length - 1].end;

    const sortedPositions = positions.sort(
        mostRecentFirst(position => position.start)
    );
    return (
        <section>
            <header>
                <h1>{name}</h1>
                <p>
                    {format(start, 'do MMMM y')} -{' '}
                    {end ? format(end, 'do MMMM y') : ''}
                </p>
            </header>
            <ul>
                {positions.map(position => (
                    <li key={`${id}_${position.title}`}>
                        <p>{position.description}</p>
                        <ul>
                            {position.keyWords.map(word => (
                                <li
                                    key={`${name}_${position.title}_keyword_${word}`}
                                >
                                    {word}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default OrganisationPost;
