import React from 'react';

// Components
import OrganisationPost from 'src/components/resume/OrganisationPost';

import history from 'data/workHistory.json';

const Resume = () => {
    return (
        <article>
            {history.map(organisation => (
                <OrganisationPost
                    key={`resume_org_${organisation.id}`}
                    organisation={organisation}
                />
            ))}
        </article>
    );
};

export default Resume;
