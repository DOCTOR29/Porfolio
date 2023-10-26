'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'
import { fetchExperience } from '@/utils/fecthExperience'

type Props = {
  experiences: Experience[]
}

function WorkExperience() {

  const [experiences, setExperiences] = useState<Experience[] | null>(null);
  
    useEffect(() => {
       
        async function fetchAPI() {
            
            const data = await fetchExperience()
            // console.log(data);
             setExperiences(data)
        }
      fetchAPI()
        
        
        },[])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5}}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl mb-5'>Experience</h3> 
      
      <div className='scrollbar scrollbar-track-gray-400/20 scrollbar-thump-[#F7AB0A]/80 w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory snap-x mt-[8rem] md:mt-[16 rem]'>
        {experiences?.map((experience,i) => 
        (<>
        
          <ExperienceCard
          key={i}
            experience={experience} />
          </>
          )
        )}
        {/* <ExperienceCard /> */}
        
        
      </div>
    </motion.div>
  )
}

export default WorkExperience