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
      h-[740px]
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
          <motion.div
              initial={{
                  y: -100,
                  opacity: 0,
  
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
              <Image className='rounded-full w-32 h-32 object-cover object-top xl:h-[200px] xl:w-[200px]' src={urlForImage(experience?.companyImage).url()} alt={experience?.company.toString()} width={320} height={320} ></Image>
          </motion.div> 
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
              <p className='font-bold text-2xl mt-1'>{experience.company}</p>
              <div className='flex flex-row flex-wrap items-center justify-center space-x-3 my-2   '>
              {/* <img src={ urlForImage(experience.technologies[0]?.image).url() } alt="" /> */}
                  {/* {experience.technologies.map((technology) => (
                      //   <h1>{technology?.image}</h1>
                      
                    //   <Image src={urlForImage(technology?.image).url()} alt='ss' width={32} height={32}></Image>
                  ))} */}
                  {experience.technologies?.map((technology )=>
                  (<Image
                      className='
                      rounded-full
                      object-cover  my-2'
                          key={ technology?._id }
                          src={urlForImage(technology?.image).url()}
                      alt='js logo' width={38} height={20}></Image>
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
              <ul className='list-disc space-y-4 ml-5 text-lg h-96 max-h-96 
                
                 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]'>
                  {experience.points?.map((point, i) => (
                      <li key={i} >{point}</li>
                  ))}
              </ul>
          </div>
      </article>
  )
}

export default ExperienceCard