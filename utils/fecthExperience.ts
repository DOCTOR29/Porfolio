import { Experience } from "@/typings";

export const fetchExperience = async () => { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
        {
        cache: 'no-store'
    })
    
    const data = await res.json();
    const experiences: Experience[] = data
    return experiences;
} 