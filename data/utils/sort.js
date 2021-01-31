const mostRecentFirst = dateSelector => (firstEntry, secondEntry) => dateSelector(secondEntry) - dateSelector(firstEntry);

export const byOrganisationStartDate = mostRecentFirst(org => org.positions[0].start);
export const byPositionStartDate = mostRecentFirst(position => position.start);
