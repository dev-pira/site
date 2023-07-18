const eventCollection = {
  data: {
    eventCollection: {
      items: [
        {
          slug: "evento-1",
          banner: {
            url: "https://example.com/banner-1.jpg",
          },
          title: "Evento 1",
          description: "Descrição do evento 1",
          dateTime: "2023-06-30T18:00:00Z",
          subscriptionUrl: "https://example.com/evento-1/inscricao",
        },
        {
          slug: "evento-2",
          banner: {
            url: "https://example.com/banner-2.jpg",
          },
          title: "Evento 2",
          description: "Descrição do evento 2",
          dateTime: "2023-06-30T18:00:00Z",
          subscriptionUrl: "https://example.com/evento-2/inscricao",
        },
        {
          slug: "evento-3",
          banner: {
            url: "https://example.com/banner-3.jpg",
          },
          title: "Evento 3",
          description: "Descrição do evento 3",
          dateTime: "2023-06-30T18:00:00Z",
          subscriptionUrl: "https://example.com/evento-3/inscricao",
        },
        {
          slug: "evento-4",
          banner: {
            url: "https://example.com/banner-4.jpg",
          },
          title: "Evento 4",
          description: "Descrição do evento 4",
          dateTime: "2023-06-30T18:00:00Z",
          subscriptionUrl: "https://example.com/evento-4/inscricao",
        },
        // Adicione outros eventos fictícios aqui
      ],
    },
  },
};

const eventCollectionBySlug = {
  data: {
    eventCollection: {
      items: [
        {
          slug: "evento-1",
          banner: {
            url: "https://example.com/banner-1.jpg",
          },
          title: "Evento 1",
          description: "Descrição do evento 1",
          dateTime: "2023-06-30T18:00:00Z",
          subscriptionUrl: "https://example.com/evento-1/inscricao",
          longDescription: {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      data: {},
                      marks: [],
                      value: "Descrição detalhada do evento 1.",
                    },
                  ],
                },
              ],
            },
          },
          location: "Local do Evento 1",
          otherInfo: {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      data: {},
                      marks: [],
                      value: "Outras informações sobre o evento 1.",
                    },
                  ],
                },
              ],
            },
          },
          partnersCollection: {
            items: [
              {
                category: "Categoria 1",
                logo: {
                  url: "https://example.com/partner1.png",
                },
                name: "Parceiro 1",
                websiteUrl: "https://example.com/partner1",
              },
              {
                category: "Categoria 2",
                logo: {
                  url: "https://example.com/partner2.png",
                },
                name: "Parceiro 2",
                websiteUrl: "https://example.com/partner2",
              },
            ],
          },
          tracksCollection: {
            items: [
              {
                sys: {
                  id: "track-1",
                },
              },
              {
                sys: {
                  id: "track-2",
                },
              },
            ],
          },
          videoUrl: "https://example.com/evento-1/video",
          galleryCollection: {
            items: [
              {
                url: "https://example.com/evento-1/image1.jpg",
              },
              {
                url: "https://example.com/evento-1/image2.jpg",
              },
            ],
          },
        },
      ],
    },
  },
};

const talksCollection = {
  data: {
    eventTrack: {
      name: "Faixa 1",
      talksCollection: {
        items: [
          {
            title: "Palestra 1",
            speaker: {
              name: "Palestrante 1",
              job: "Cargo do Palestrante 1",
              company: "Empresa do Palestrante 1",
              portrait: {
                url: "https://example.com/speaker1.jpg",
              },
            },
          },
          // Adicione outras palestras fictícias aqui
        ],
      },
    },
  },
};

const vacancyCollection = {
  data: {
    vacancyCollection: {
      items: [
        {
          description: "Descrição da vaga 1",
          company: "Empresa 1",
          title: "Vaga 1",
          location: "Localização 1",
          enrollmentUrl: "https://example.com/vaga-1/inscricao",
          sys: {
            id: "vacancy-1",
          },
        },
        // Adicione outras vagas fictícias aqui
      ],
    },
  },
};

export async function fetchMockedGraphQl(query: string) {
  if (query.includes("eventCollection")) {
    if (query.includes("slug")) {
      // Retornar dados fictícios para a consulta eventCollection com filtro por slug
      return eventCollectionBySlug;
    } else {
      // Retornar dados fictícios para a consulta eventCollection
      return eventCollection;
    }
  } else if (query.includes("eventTrack")) {
    // Retornar dados fictícios para a consulta eventTrack
    return talksCollection;
  } else if (query.includes("vacancyCollection")) {
    // Retornar dados fictícios para a consulta vacancyCollection
    return vacancyCollection;
  }

  // Consulta não suportada
  throw new Error("Consulta não suportada");
}
