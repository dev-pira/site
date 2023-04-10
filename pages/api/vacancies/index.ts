import { NextApiRequest, NextApiResponse } from "next";
import { createVacancy } from "../../../apis/cms";
import Cors from 'cors'

const cors = Cors({methods:['POST']})

function middleware(
    request: NextApiRequest, 
    response: NextApiResponse,
    fn: Function) {
        return new Promise((resolve, reject) => {
            fn(request, response, (result: any) => {
                if (result instanceof Error) return reject(result)
                return resolve(result)
            })
        })
    }

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    await middleware(request, response, cors);

    let data = request.body
    await createVacancy(data)
    response.status(202).json(data)
}