import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { sendContactMail } from "../../../services/contactService";

const cors = Cors({ methods: ["POST"] });

/**
 * @swagger
 * /api/contact:
 *   post:
 *     description: Send an e-mail to DEVPIRA with data inserted on the form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/contracts/requests/new-contact'
 *     responses:
 *       200:
 *         description: e-mail sent succesfully
 */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await middleware(request, response, cors);

  const data = request.body;

  const result = await sendContactMail(data);
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
