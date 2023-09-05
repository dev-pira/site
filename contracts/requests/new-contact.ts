import { NextApiRequest } from "next";

interface RequestBody {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

export default interface NewContactRequest extends NextApiRequest {
  body: RequestBody;
}
