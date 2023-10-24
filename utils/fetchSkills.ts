import { Skill } from "@/typings";

export const fetchSkill = async () => { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`,
        {
        cache: 'no-store'
    })
    
    const data = await res.json();
    const skills: Skill[] = data.skills
    return skills;
}