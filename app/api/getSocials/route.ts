import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client"
import { Social } from "@/typings";

const query = groq`*[_type == "social"]`

type Data = {
    socials: Social[],
}

export  async function GET(
    req: Request,
    res: NextApiResponse<Data>)
{
    const socials: Social[] = await client.fetch(query);
    return  Response.json({ socials})
}
    

