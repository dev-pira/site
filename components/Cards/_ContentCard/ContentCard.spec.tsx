import { render } from "@testing-library/react";
import ContentCard from "./Content";

describe("ContentCard deve ", () => {
  it("renderizar com altura de 364px se banner for informado", () => {
    const { container } = render(
      <ContentCard>
        <></>
      </ContentCard>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).not.toBeNull();
    expect(getComputedStyle(card).height).toBe("229px");
  });

  it("renderizar com altura de 229px se banner não for informaddo", () => {
    const { container } = render(
      <ContentCard bannerUrl="anything">
        <></>
      </ContentCard>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).not.toBeNull();
    expect(getComputedStyle(card).height).toBe("364px");
  });

  it("definir gap de 8px se banner for informado", () => {
    const { container } = render(
      <ContentCard>
        <></>
      </ContentCard>
    );
    const innerBox = container.querySelector("#card-content") as HTMLElement;
    expect(innerBox).not.toBeNull();
    expect(getComputedStyle(innerBox).gap).toBe("16px");
  });

  it("definir gap de 16px se banner não for informado", () => {
    const { container } = render(
      <ContentCard bannerUrl="anything">
        <></>
      </ContentCard>
    );
    const innerBox = container.querySelector("#card-content") as HTMLElement;
    expect(innerBox).not.toBeNull();
    expect(getComputedStyle(innerBox).gap).toBe("8px");
  });

  it("definir fundo branco de variante for primária", () => {
    const { container } = render(
      <ContentCard>
        <></>
      </ContentCard>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).not.toBeNull();
    expect(getComputedStyle(card).backgroundColor).toBe("white");
  });

  it("definir fundo azul escuro se variante for secundária", () => {
    const { container } = render(
      <ContentCard variant="secondary">
        <></>
      </ContentCard>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).not.toBeNull();
    expect(getComputedStyle(card).backgroundColor).toBe("rgb(43, 44, 62)");
  });

  it("definir sombra se variante for primária", () => {
    const { container } = render(
      <ContentCard>
        <></>
      </ContentCard>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).not.toBeNull();
    expect(getComputedStyle(card).boxShadow).toBe(
      "0px 4px 24px 0px rgba(30, 144, 255, 0.14)"
    );
  });

  it("definir nenhuma sombra se variante for secundária", () => {
    const { container } = render(
      <ContentCard variant="secondary">
        <></>
      </ContentCard>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).not.toBeNull();
    expect(getComputedStyle(card).boxShadow).toBe("none");
  });
});
