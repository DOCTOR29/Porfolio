import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client"
import { Skill } from "@/typings";

const query = groq`*[_type == "skill"]`

type Data = {
    skills: Skill[],
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>)
{
    const skills: Skill[] = await client.fetch(query);
    // res.status(200).json({ skills});
    return Response.json({ skills });
    }