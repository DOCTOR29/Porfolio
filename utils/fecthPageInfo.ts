
import { PageInfo } from "@/typings";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client"
import { InferGetStaticPropsType } from "next";

const query = groq`*[_type == "pageInfo"] {
    ...,
    technologies[]->
  }
  `

type Data = {
    pageInfo: PageInfo,
}



export const fetchPageInfo = async (  ) => { 
    
  
    
    const data = await client.fetch(query,
        {
            
        }
        
        );
    const pageInfo: PageInfo = data[0]
    return pageInfo;
} 
