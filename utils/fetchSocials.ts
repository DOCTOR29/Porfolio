import { Social } from "@/typings";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client"

type Data = {
    socials: Social[],
}
const query = groq`*[_type == "social"]`
export const fetchSocials = async () => { 
   
    
    const data = await client.fetch(query);
    const socials: Social[] = data
    return socials;
} 