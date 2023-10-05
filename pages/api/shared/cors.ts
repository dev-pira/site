import { NextApiRequest, NextApiResponse } from "next";

type NextStep = (
  request: NextApiRequest,
  response: NextApiResponse,
  onResult: (result: unknown) => void
) => void;

export function middleware(
  request: NextApiRequest,
  response: NextApiResponse,
  fn: NextStep
) {
  return new Promise((resolve, reject) => {
    fn(request, response, (result) => {
      if (result instanceof Error) {
        console.error("Error calling next function:", result);
        return reject(result);
      }
      return resolve(result);
    });
  });
}
