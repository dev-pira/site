import { render, screen } from "@testing-library/react";
import JobsContent, { JobsContentProps } from "./JobsContent";
// import theoretically from "jest-theories";
import "@testing-library/jest-dom";

describe("JobsContent deve ...", () => {
  test("apresentar todas as seções se todas as seções forem usadas", () => {
    const props: JobsContentProps = {
      jobs: [
        {
          id: "1",
          title: "Um trabalho na cidade",
          description: "Uma descrição qualquer",
          enrollmentUrl: "http://link.to.nowhere",
          location: "Piracicaba",
        },
        {
          id: "2",
          title: "Um trabalho remoto",
          description: "Uma descrição qualquer",
          enrollmentUrl: "http://link.to.nowhere",
          location: "Remoto",
        },
        {
          id: "3",
          title: "Um trabalho em outra cidade",
          description: "Uma descrição qualquer",
          enrollmentUrl: "http://link.to.nowhere",
          location: "Outro",
        },
      ],
    };
    render(<JobsContent {...props} />);
    const sectionPiracicaba = screen.queryByRole("heading", {
      name: /Piracicaba/,
    });
    const sectionsPiracicaba = screen.queryAllByRole("heading", {
      name: /Piracicaba/,
    });
    const sectionRemote = screen.queryByRole("heading", {
      name: /Remoto/,
    });
    const sectionsRemote = screen.queryAllByRole("heading", {
      name: /Remoto/,
    });
    const sectionOther = screen.queryByRole("heading", {
      name: /Outro/,
    });
    const sectionsOther = screen.queryAllByRole("heading", {
      name: /Outro/,
    });

    expect(sectionPiracicaba).toBeInTheDocument();
    expect(sectionPiracicaba).toBeVisible();
    expect(sectionsPiracicaba.length).toBe(1);

    expect(sectionRemote).toBeInTheDocument();
    expect(sectionRemote).toBeVisible();
    expect(sectionsRemote.length).toBe(1);

    expect(sectionOther).toBeInTheDocument();
    expect(sectionOther).toBeVisible();
    expect(sectionsOther.length).toBe(1);
  });

  const theories: {
    props: JobsContentProps;
    unexpected: "Piracicaba" | "Remoto" | "Outro";
  }[] = [
    {
      props: {
        jobs: [
          {
            id: "2",
            title: "Um trabalho remoto",
            description: "Uma descrição qualquer",
            enrollmentUrl: "http://link.to.nowhere",
            location: "Remoto",
          },
          {
            id: "3",
            title: "Um trabalho em outra cidade",
            description: "Uma descrição qualquer",
            enrollmentUrl: "http://link.to.nowhere",
            location: "Outro",
          },
        ],
      },
      unexpected: "Piracicaba",
    },
    {
      props: {
        jobs: [
          {
            id: "1",
            title: "Um trabalho na cidade",
            description: "Uma descrição qualquer",
            enrollmentUrl: "http://link.to.nowhere",
            location: "Piracicaba",
          },
          {
            id: "3",
            title: "Um trabalho em outra cidade",
            description: "Uma descrição qualquer",
            enrollmentUrl: "http://link.to.nowhere",
            location: "Outro",
          },
        ],
      },
      unexpected: "Remoto",
    },
    {
      props: {
        jobs: [
          {
            id: "1",
            title: "Um trabalho na cidade",
            description: "Uma descrição qualquer",
            enrollmentUrl: "http://link.to.nowhere",
            location: "Piracicaba",
          },
          {
            id: "2",
            title: "Um trabalho remoto",
            description: "Uma descrição qualquer",
            enrollmentUrl: "http://link.to.nowhere",
            location: "Remoto",
          },
        ],
      },
      unexpected: "Outro",
    },
  ];

  test.each(theories)(
    `não deve apresentar cabeçalho %unexpected`,
    ({ props, unexpected }) => {
      render(<JobsContent {...props} />);
      const unexpectedHeading = screen.queryByRole("heading", {
        name: unexpected,
      });
      expect(unexpectedHeading).not.toBeInTheDocument();
    }
  );

  it("apresentar nenhum resultado caso não haja dados", () => {
    const props: JobsContentProps = {
      jobs: [],
    };
    render(<JobsContent {...props} />);

    const sectionPiracicaba = screen.queryByRole("heading", {
      name: /Piracicaba/,
    });
    const sectionRemote = screen.queryByRole("heading", {
      name: /Remoto/,
    });
    const sectionOther = screen.queryByRole("heading", {
      name: /Outro/,
    });

    expect(sectionPiracicaba).not.toBeInTheDocument();
    expect(sectionRemote).not.toBeInTheDocument();
    expect(sectionOther).not.toBeInTheDocument();
  });
});
