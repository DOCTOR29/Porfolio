'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {Project } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import { fetchProject } from '@/utils/fetchProjects'
type Props = {
    projects: Project[]
}


function Projects() {
    // console.log(projects)
    const [projects, setProjects] = useState<Project[] | null>(null);
  
    useEffect(() => {
       
        async function fetchAPI() {
            
            const data = await fetchProject()
            
            setProjects(data)
        }
      fetchAPI()
        
        
        },[])

  return (
    //   <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
          <h3 className='absolute  uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

          <div className=' mt-[2rem] md:mt-[16rem] md:mb-[1rem] relative w-full flex overflow-x-scroll md:overflow-y-hidden sm:overflow-y-hidden overflow-y-hidden snap-x snap-mandatory  z-20 scrollbar items-center  scrollbar-track-gray-400/20 scrollbar-thump-[#F7AB0A]/80'>
              {projects?.map((project, i) => (
                  <div className=' flex w-screen flex-shrink-0 snap-center flex-col space-y-3 md:space-y-5 items-center justify-center p-5 md:p-44  sm:p-20 h-screen text-center'>
                      <motion.div
                          id={i.toString()}
                          initial={{
                          y: -300,
                          opacity: 0,
                          }}
                          transition={{ duration: 1.2 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false}}
                      >
                      <Image
                          className='md:rounded-2xl rounded-2xl  md:w-50 md:h-auto  '
                          src={urlForImage(project.image).url()} alt='Mockup' width='400' height='1800'>
                      </Image>
                   </motion.div>
                      <div className='md:space-y-10 space-y-3 px-0 md:px-10 md:max-w-6xl  '>
                          <h4 className='md:text-4xl  text-xl font-semibold text-center '>
                      <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span> {project.title}
                          </h4>
                          <div className='flex items-center space-x-3 justify-center'>
                          {project?.technologies.map(technology => (
                              <Image
                                  key={technology._id}
                                  className='flex'
                                  src={urlForImage(technology.image).url()} width={40} height={39} alt='' />
                          ) )}
                          </div>
                          <div className='overflow-y-scroll md:overflow-y-auto  scrollbar-thin scrollbar-track-black/1 scrollbar-corner-purple-900 scrollbar-thumb-red-950 h-40'>
                          <p className='text-lg text-justify px-4 md:text-left '>
                          {project.summary}
                          </p>
                          </div>
                      </div>
                      </div>
              ) )}
          </div>

          <div className='w-full absolute  top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects