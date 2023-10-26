'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
    // console.log(experience.isCurrentlyWorkingHere);
  return (
      <article className='flex flex-col  rounded-lg items-center space-y-7 flex-shrink-0
      md:h-[740px] h-auto w-[22rem] 
      md:w-[500px] xl:w-[900px] snap-center bg-[#292929] md:p-10 p-4 px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '> 
          <motion.div
              initial={{
                  y: -100,
                  opacity: 0,
  
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
              <Image className='rounded-full w-20 h-20 object-cover object-top xl:h-[200px] xl:w-[200px] md:w-32 md:h-32' src={urlForImage(experience?.companyImage).url()} alt={experience?.company.toString()} width={320} height={320} ></Image>
          </motion.div>
          <div className='px-0 md:px-10 '>
              <h4 className='md:text-4xl  text-xl font-light'>{experience.jobTitle}</h4>
              <p className='font-bold text-2xl mt-1'>{experience.company}</p>
              <div className='flex flex-row flex-wrap  items-center justify-center space-x-3 my-2   '>
              {/* <img src={ urlForImage(experience.technologies[0]?.image).url() } alt="" /> */}
                  {/* {experience.technologies.map((technology) => (
                      //   <h1>{technology?.image}</h1>
                      
                    //   <Image src={urlForImage(technology?.image).url()} alt='ss' width={32} height={32}></Image>
                  ))} */}
                  {experience.technologies?.map((technology )=>
                  (<Image
                      className='
                      rounded-full object-contain
                        md:my-2 my-1 md:h-10 md:w-10 h-4 w-4'
                          key={ technology?._id }
                          src={urlForImage(technology?.image).url()}
                      alt={technology?.titles} width={38} height={20}></Image>
                  )
                  )
                  }
                  
                  
                  
                  {/* tech Used */}
                  {/* tech Used */}
              </div>
              
              <p className='uppercase py-5 text-gray-300'>
                  { new Date(experience.dateStarted).toDateString()} - { experience.isCurrentlyWorkingHere? "Present" : new Date(experience.dateEnded).toDateString()}
              </p>
              {/* make this scrollable */}
              <ul className='list-disc space-y-4  ml-2 md:ml-5 md:text-lg text-xs h-120 md:h-96 
              overflow-y-scroll md:overflow-hidden
                
                 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]'>
                  {experience.points?.map((point, i) => (
                      <li key={i} >▸ {point}</li>
                  ))}
              </ul>
          </div>
      </article>
  )
}

export default ExperienceCard