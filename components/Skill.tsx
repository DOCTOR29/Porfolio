'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Skill as SkillType } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
type Props = {
    directionLeft?: boolean;
    skill:SkillType;
}

function Skill({ directionLeft, skill }: Props) {
  return (
      <motion.div
          initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
          }}
          transition={{ type: "spring", stiffness: 500,  damping: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          
          className='group relative flex cursor-pointer '>
          
          <Image className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:w-32 xl:h-32  md:h-28 md:w-28  filter group-hover:grayscale transition duration-300 ease-in-out' src={urlForImage(skill?.image).url()}
          
              alt='Tailwind logo'
              width={300} height={92} ></Image>
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 md:h-28 md:w-28 rounded-full z-0'>
              <div  className=' flex items-center justify-center h-full'>
                  <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
              </div>
          </div>
    </motion.div>
  )
}

export default Skill