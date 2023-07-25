import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { sendContactMail } from "../../../services/contactService";
import { ValidationError } from "yup";

const cors = Cors({ methods: ["POST"] });

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await middleware(request, response, cors);

  const data = request.body;
  try {
    await sendContactMail(data);
  } catch (e) {
    if (e instanceof ValidationError) {
      response.status(400).json(e.errors);
    }
  }
  response.status(200);
}

type NextStep = (
  request: NextApiRequest,
  response: NextApiResponse,
  onResult: (result: unknown) => void
) => void;

function middleware(
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
