import { NextApiRequest, NextApiResponse } from "next";
import { createJob } from "../../../services/jobService";
import Cors from "cors";
import { middleware } from "../shared/cors";

const cors = Cors({ methods: ["POST"] });

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await middleware(request, response, cors);

  const data = request.body;
  const result = await createJob(data);
  response.status(result.status).json(result.json);
}
