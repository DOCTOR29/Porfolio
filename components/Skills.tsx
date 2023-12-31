'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings'
import { fetchSkill } from '@/utils/fetchSkills'

type Props = {
    skills: SkillType[],
}

function Skills() {

    const [skills, setSkills] = useState<SkillType[] | null>(null);
  
    useEffect(() => {
       
        async function fetchAPI() {
            
            const data = await fetchSkill()
            // console.log(data);
             setSkills(data)
        }
      fetchAPI()
        
        
        },[])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}            
            className=' flex relative flex-col md:text-left  xl:flex-row max-w-[2000px] xl:px-19 min-h-screen justify-center xl:space-y-0 mx-auto px-3 items-center'>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl px-3'>Skills</h3>
            <h3 className='absolute  top-36 uppercase tracking-[3px] text-gray-500 text-sm px-6 text-center'>Hover over a skill for currency proficiency</h3>
            <div className='mt-[10rem]  grid grid-cols-4 gap-5'>
            {skills?.slice(0, skills.length/2).map(skill => (
                    <Skill
                        key={skill._id}
                        skill={skill} />))}
               
            {skills?.slice(skills.length/2, skills.length).map(skill => (
                    <Skill
                        key={skill._id}
                        skill={skill} directionLeft />))}
               
                    
               
            </div>
        </motion.div>
  )
}

export default Skills