'use client'
import  { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import { fetchPageInfo } from '@/utils/fecthPageInfo'




type Props = {
    pageInfo: PageInfo
}

function About() {
    const [pageInfo, setPageInfo] = useState<PageInfo>();
   
    useEffect(() => {
        setTimeout(async() => {
            const data = 
                await fetchPageInfo()
            setPageInfo(data)
            
        },0)
      },[]);
    // console.log(pageInfoData)
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 1.5}}
          
          className='flex relative flex-col h-screen text-center md:text-left md:flex-row mx-w-7 px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl '> About</h3>  
          { pageInfo?.profilePic? 
          (<motion.img
              initial={{
                  x: -200,
              opacity:0}}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 1.2}}
              src={ (urlForImage(pageInfo?.profilePic).url()) || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }
              className='-mb-20 md:mb-0 flex-shrink-0 w-40 mt-9 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
          />): (<p className='text-base'>Profile Image</p>)}
          <div className='space-y-10 px-0 md:px-10 overflow-y-scroll md:overflow-hidden 
          h-[20rem]
          md:h-[29rem]'>
              <h4 className='text-4xl font-semibold'>
                  Here is a <span className='underline decoration-[#F7AB0A]/40'>little</span> background</h4>
              {/* <p className='text-base '>
                  {/* {
                      pageInfo?.backgroundInformation.split('*')[0]

                  } */} 
                  <ul className='list-disc text-base text-left space-y-4 ml-5'>
                      {pageInfo?.backgroundInformation.split('*').map((l, i) => (
                        
                      
                          <li key={i}>
                              {l}
                          </li>
                      ))}
                  </ul>
              {/* </p> */}
          </div>
      </motion.div>
   
  )
}

export default About
