import { Social } from "@/typings";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client"

type Data = {
    socials: Social[],
}
const query = groq`*[_type == "social"]`
const query1 = groq`*[_id == "d92fc2fb-5ec4-4a6d-81c2-6d966f8dff24"]`
export const fetchSocials = async () => { 
   

    const data = await client.fetch(query,
        {
            
    });
    const socials: Social[] = data
    return socials;
} 