import { render, screen } from "@testing-library/react";
import JobCard, { JobCardProps } from "./JobCard";
import "@testing-library/jest-dom";

describe("JobCard deve ", () => {
  it("renderizar companhia quando informado", () => {
    const companyName = "Company";
    const props: JobCardProps = {
      id: "1",
      title: "Title",
      description: "Short Description",
      company: companyName,
      location: "Remoto",
      enrollmentUrl: "foo",
    };
    render(<JobCard {...props} />);
    const companyLabel = screen.queryByText(companyName);
    expect(companyLabel).toBeInTheDocument();
  });

  it("não renderizar companhia quando não informado", () => {
    const props: JobCardProps = {
      id: "1",
      title: "Title",
      description: "Short Description",
      location: "Remoto",
      enrollmentUrl: "foo",
    };
    render(<JobCard {...props} />);
    const companyLabel = screen.queryByText("Company");
    expect(companyLabel).not.toBeInTheDocument();
  });

  it("renderizar botão com texto 'Enviar e-mail' quando informado um email", () => {
    const props: JobCardProps = {
      id: "1",
      title: "Title",
      description: "Short Description",
      location: "Remoto",
      enrollmentUrl: "mailto:fulano@inter.net",
    };
    render(<JobCard {...props} />);
    const button = screen.queryByText("Enviar e-mail");
    expect(button).toBeInTheDocument();
  });

  it("renderizar botão com texto 'Detalhes da vaga' quando informado outro endereço", () => {
    const props: JobCardProps = {
      id: "1",
      title: "Title",
      description: "Short Description",
      location: "Remoto",
      enrollmentUrl: "http://inter.net",
    };
    render(<JobCard {...props} />);
    const button = screen.queryByText("Detalhes da vaga");
    expect(button).toBeInTheDocument();
  });
});
