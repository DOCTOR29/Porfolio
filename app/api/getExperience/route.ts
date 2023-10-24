import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client"
import { Experience } from "@/typings";

const query = groq`*[_type == "experience"] {
    ...,
    technologies[] ->
  }
  `

type Data = {
    experiences: Experience[] }

export  async function GET(
    req: Request,
    res: NextApiResponse<Data>
)
{
    const experiences: Experience[] = await client.fetch(query);
    // res.status(200).json({ experiences });
    return Response.json(experiences);
    }