'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {Project } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
type Props = {
    projects: Project[]
}


function Projects({ projects }: Props) {
    console.log(projects)

  return (
    //   <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
          <h3 className='absolute  uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

          <div className=' mt-[8rem] md:mt-[0rem] md:mb-[1rem] relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  z-20 scrollbar items-center  scrollbar-track-gray-400/20 scrollbar-thump-[#F7AB0A]/80'>
              {projects.map((project, i) => (
                  <div className=' flex w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen text-center'>
                      <motion.div
                          initial={{
                          y: -300,
                          opacity: 0,
                          }}
                          transition={{ duration: 1.2 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true}}
                      >
                      <Image
                          className='rounded-2xl'
                          src={urlForImage(project.image).url()} alt='Mockup' width='600' height='800'>
                      </Image>
                   </motion.div>
                      <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                          <h4 className='text-4xl font-semibold text-center'>
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
                          <p className='text-lg text-center md:text-left '>
                          {project.summary}
                          </p>
                      </div>
                      </div>
              ) )}
          </div>

          <div className='w-full absolute  top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects