'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    // console.log(pageInfo?.backgroundInformation)
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 1.5}}
          
          className='flex relative flex-col h-screen text-center md:text-left md:flex-row mx-w-7 px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl'>About</h3>  
          <motion.img
              initial={{
                  x: -200,
              opacity:0}}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 1.2}}
              src={ urlForImage(pageInfo?.profilePic).url()}
              className='-mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
          />
          <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold'>
                  Here is a <span className='underline decoration-[#F7AB0A]/40'>little</span> background</h4>
              <p className='text-base'>
                  {pageInfo?.backgroundInformation}
              </p>
          </div>
      </motion.div>
   
  )
}

export default About
