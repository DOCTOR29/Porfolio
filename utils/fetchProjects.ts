import { Project } from "@/typings";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

const query = groq`*[_type == "projectd" ]{
    ...,
    technologies[] ->
  }`

export const fetchProject = async () => { 

    
    
  const data = await client.fetch(query,
    {
      
  });
    const projects: Project[] =  data
    return projects;
} 