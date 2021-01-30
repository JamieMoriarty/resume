import React from 'react';

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
                    {start} - {end ? end : ''}
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
    return (
        <section>
            <header>
                <h1>{name}</h1>
                <p>
                    {start} - {end ? end : ''}
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
