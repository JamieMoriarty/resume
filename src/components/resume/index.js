import React from 'react';

import { parse, format } from 'date-fns';

// Components
import OrganisationPost from 'src/components/resume/OrganisationPost';

import history from 'data/workHistory.json';

const mostRecentFirst = dateSelector => (firstEntry, secondEntry) => {
    return dateSelector(secondEntry) - dateSelector(firstEntry);
};

const parseAndSortHistory = history => {
    const parsedHistory = history.map(entry => ({
        ...entry,
        positions: entry.positions.map(position => ({
            ...position,
            start: parse(position.start, 'dd-M-yyyy', new Date()),
            end: parse(position.end, 'dd-M-yyyy', new Date()),
        })),
    }));

    return parsedHistory.sort(
        mostRecentFirst(entry => entry.positions[0].start)
    );
};

const Resume = () => {
    return (
        <article>
            {parseAndSortHistory(history).map(organisation => (
                <OrganisationPost
                    key={`resume_org_${organisation.id}`}
                    organisation={organisation}
                />
            ))}
        </article>
    );
};

export default Resume;
