import React from 'react';

// data:
import personalStuff from 'data/personalStuff.json';

const PersonalStuff = () => {
    return (
        <React.Fragment>
            {personalStuff.content.map((paragraph, index) => (
                <p key={`personal_stuff_${index}`}>{paragraph}</p>
            ))}
        </React.Fragment>
    );
};

export default PersonalStuff;
