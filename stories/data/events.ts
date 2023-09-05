const dummyMeetup = {
  description:
    "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
  detailsLink: "https://www.google.com",
  participateLink: "https://www.google.com",
  title: "Nome do evento",
  type: "Meetup",
};

const dummyLive = {
  description:
    "Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.",
  detailsLink: "https://www.google.com",
  title: "Nome do evento",
  type: "Live",
};

const eventsCollection = [];
for (let i = 0; i < 6; i++) {
  eventsCollection.push(dummyLive, dummyMeetup);
}

export const events = eventsCollection;
