import React from "react";

import history from "data/workHistory.json";

const Resume = () => {
  return (
    <article>
      {history.map((organisation) => (
        <section key={organisation.id}>
          <h1>{organisation.name}</h1>
        </section>
      ))}
    </article>
  );
};

export default Resume;
