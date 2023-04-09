import { NextApiRequest, NextApiResponse } from "next";
import { createVacancy } from "../../../apis/cms";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', ['POST', 'HEAD'])
        response.status(405)
    }
    else {
        let data = request.body
        await createVacancy(data)
        response.status(202).json(data)
    }
}