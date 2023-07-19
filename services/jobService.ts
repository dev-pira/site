import { CreateJobRequest, Job } from "../models/job";
import { callEntriesApi, fetchGraphQl } from "./cms";

export async function fetchJobsData(queryExpression?: string): Promise<Job[]> {
  queryExpression = queryExpression
    ? `(where: { 
          OR: [
            { title_contains : "${queryExpression}" },
            { description_contains: "${queryExpression}" },
            { company_contains: "${queryExpression}" },
            { location_contains: "${queryExpression}" }
          ]
      })`
    : "";
  const query = `query {
          vacancyCollection ${queryExpression} {
              items {
                  description
                  company
                  title
                  location
                  enrollmentUrl
                  sys {
                      id
                  }
              }
          }
      }`;
  const response = await fetchGraphQl(query);
  return response?.data?.vacancyCollection?.items.map(
    (job: {
      sys: { id: string };
      description: string;
      company: string;
      title: string;
      location: string;
      enrollmentUrl: string;
    }) => {
      let jobLocation = "Outros";
      if (job.location) {
        switch (job.location.toLowerCase()) {
          case "piracicaba":
            jobLocation = "Piracicaba";
            break;
          case "remoto":
            jobLocation = "Remoto";
            break;
          default:
            break;
        }
      }
      return {
        id: job.sys.id,
        title: job.title,
        company: job.company,
        description: job.description,
        location: jobLocation,
        enrollmentUrl: job.enrollmentUrl,
      };
    }
  );
}

export async function createJob(data: CreateJobRequest) {
  const bodyObj = {
    fields: {
      title: {
        "en-US": data.title,
      },
      description: {
        "en-US": data.description,
      },
      company: {
        "en-US": data.company,
      },
      details: formatDetails(data.details),
      enrollmentUrl: {
        "en-US": formatEnrollmentUrl(data.enrollmentUrl),
      },
      desirableSkills: {
        "en-US": data.desirableSkills ?? [],
      },
      location: {
        "en-US": data.location,
      },
    },
  };
  const body = JSON.stringify(bodyObj);
  return await callEntriesApi("POST", "vacancy", body);
}

function formatEnrollmentUrl(enrollmentUrl: string) {
  let result = enrollmentUrl;
  if (result?.includes("@")) result = `mailto:${result}`;
  else if (!result?.startsWith("http://") || !result?.startsWith("https://"))
    result = `http://${result}`;
  return result;
}

function formatDetails(detail?: string) {
  let result = {};
  if (detail) {
    result = {
      "en-US": {
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
                value: detail,
              },
            ],
          },
        ],
      },
    };
  }
  return result;
}
