import { Skill } from "@/typings";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client"

type Data = {
    skills: Skill[],
}

const query = groq`*[_type == "skill"]`


export const fetchSkill = async () => { 
   
    
    const data = await client.fetch(query,
        {
           
        });
    const skills: Skill[] = data
    return skills;
}