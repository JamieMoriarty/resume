import React from 'react';

import { parse } from 'date-fns';

// Components
import OrganisationPost from 'src/components/resume/OrganisationPost';

// Data:
import history from 'data/workHistory.json';
import { byOrganisationStartDate } from 'data/utils/sort';

const parseAndSortHistory = history => {
    const parsedHistory = history.map(entry => ({
        ...entry,
        positions: entry.positions.map(position => ({
            ...position,
            start: parse(position.start, 'dd-M-yyyy', new Date()),
            end: parse(position.end, 'dd-M-yyyy', new Date()),
        })),
    }));

    return parsedHistory.sort(byOrganisationStartDate);
};

const Resume = () => {
    return (
        <article>
            {parseAndSortHistory(history).map(organisation => (
                <OrganisationPost key={`resume_org_${organisation.id}`} organisation={organisation} />
            ))}
        </article>
    );
};

export default Resume;
