import { render, screen } from "@testing-library/react";
import EventCard, { EventCardProps } from "./EventCard";
import "@testing-library/jest-dom";

describe("EventCard deve ", () => {
  it("não renderizar botão Participar quando o link de inscrição for omitido", () => {
    const props: EventCardProps = {
      slug: "test-event-1",
      color: "primary",
      title: "event",
      description: "the description",
      dateTime: new Date(2020, 1, 1),
    };
    render(<EventCard {...props} />);
    const button = screen.queryByRole("link", { name: /Participar/ });
    expect(button).not.toBeInTheDocument();
  });

  it("deve renderizar botão Participar quando o link de inscrição for informado e a data do evento estiver no futuro", () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const props: EventCardProps = {
      slug: "test-event-2",
      color: "primary",
      title: "event",
      description: "the description",
      dateTime: date,
      subscriptionUrl: "subscribelink",
    };
    render(<EventCard {...props} />);
    const button = screen.getByRole("link", { name: /Participar/ });
    expect(button).toBeInTheDocument();
  });

  it("não deve renderizar botão Participar quando o link de inscrição for informado e a data do evento estiver no passado", () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const props: EventCardProps = {
      slug: "test-event-3",
      color: "primary",
      title: "event",
      description: "the description",
      dateTime: date,
      subscriptionUrl: "subscribelink",
    };
    render(<EventCard {...props} />);
    const button = screen.queryByRole("link", { name: /Participar/ });
    expect(button).not.toBeInTheDocument();
  });
});
