import { NextApiRequest, NextApiResponse } from "next";
import { createJob } from "../../../services/jobService";
import Cors from "cors";

const cors = Cors({ methods: ["POST"] });

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await middleware(request, response, cors);

  const data = request.body;

  // 1. Validar os dados do formulário
  // 2. Enviar e-mails com os dados recebidos
  // 2.1: e-mail para contato@devpira.com.br
  // 2.2: e-mail para o usuário

  const result = await createJob(data);
  response.status(result.status).json(result.json);
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
