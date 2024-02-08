import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventDetailIntro, { EventDetailIntroProps } from "./EventDetailIntro";

describe("EventDetailIntro deve ", () => {
  it("não renderizar botão Participar quando o link de inscrição for omitido", () => {
    const props: EventDetailIntroProps = {
      title: "",
      description: "",
      dateTime: new Date(),
    };
    render(<EventDetailIntro {...props} />);
    const button = screen.queryByRole("link", { name: /Inscreva-se/ });
    expect(button).not.toBeInTheDocument();
  });

  it("deve renderizar botão Participar quando o link de inscrição for informado e a data do evento estiver no futuro", () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const props: EventDetailIntroProps = {
      title: "",
      description: "",
      subscriptionUrl: "subscribelink",
      dateTime: date,
    };
    render(<EventDetailIntro {...props} />);
    const button = screen.getByRole("link", { name: /Inscreva-se/ });
    expect(button).toBeInTheDocument();
  });

  it("não deve renderizar botão Participar quando o link de inscrição for informado e a data do evento estiver no passado", () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const props: EventDetailIntroProps = {
      title: "",
      description: "",
      subscriptionUrl: "subscribelink",
      dateTime: date,
    };
    render(<EventDetailIntro {...props} />);
    const button = screen.queryByRole("link", { name: /Inscreva-se/ });
    expect(button).not.toBeInTheDocument();
  });
});
