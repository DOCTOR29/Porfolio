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
            
        });
    const experiences: Experience[] = data
    return experiences;
} 