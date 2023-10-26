import { Experience } from "@/typings";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client"


const query = groq`*[_type == "experience"] {
    ...,
    technologies[] ->
  }
  `

type Data = {
    experiences: Experience[]
}
    
export const fetchExperience = async () => { 
    
    
    const data = await client.fetch(query,
        {
            caches: 'no-store',
        });
    const experiences: Experience[] = data
    return experiences;
} 