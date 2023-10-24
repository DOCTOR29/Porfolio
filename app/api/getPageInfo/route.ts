
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client"
import { PageInfo } from "@/typings";

const query = groq`*[_type == "pageInfo"] {
    ...,
    technologies[]->
  }
  `

type Data = {
    pageInfo: PageInfo,
}

export  async function GET(
    request: Request,
    )
{
    const revalidate = 60
    const pageInfo: PageInfo = await client.fetch(query,
        
    );
    // res.status(200).json({ pageInfo });
    // console.log(pageInfo)
    // revalidatePath(request.url)
    return Response.json(pageInfo);
}
