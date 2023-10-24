import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client"
import { Project, Skill } from "@/typings";

const query = groq`*[_type == "projectd" ]{
    ...,
    technologies[] ->
  }`

type Data = {
    projects: Project[],
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>)
{
    const projects: Project[] = await client.fetch(query);
    // res.status(200).json({ skills});
    return Response.json({ projects });
    }