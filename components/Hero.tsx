"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import urlBuilder from '@sanity/image-url'
import { fetchPageInfo } from '@/utils/fecthPageInfo'
import { useRouter } from 'next/router'

type Props = {
  pageInfo: PageInfo,
}

function Hero() {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
    const [ count1, setCount1] = useState(0)
    useEffect(() => {
       
        async function fetchAPI() {
            setCount1(count1 + 10)
            const data = await fetchPageInfo()
            // console.log(data);
             setPageInfo(data)
        }
      fetchAPI()
        
        
        },[])
        
  // console.log(pageInfo.name )
  var cdata = pageInfo?(pageInfo?.name.split(" ")):['naveed', 'islam']
  const [text, count] = useTypewriter({
  
    words: [`Call_ me_ ${cdata[0]}_${cdata[1]}`, 'Guy who loves tea.jsx', '<❤️_to_Code />'],
    loop: true,
    delaySpeed:2000
  })

  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      {/* <h1 className='text-3xl'>{pageInfo?.name} </h1> */}
      { pageInfo?
     ( <Image src={urlForImage(pageInfo?.heroImage).url()} width='150' height='150' alt={'profile pic'} className='rounded-full  object-cover mt-7'>
        
        </Image>) : ( 
          <p className='text-base'>Hero Image</p>
      )}
      <div className='z-20'>
        <h2 className='text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[15px] p-6'>{pageInfo?.role}</h2>
        
          <h1 className='md:text-5xl  text-2xl lg:text-6xl font-semibold px-10'>
        <span> {text}</span> 
        <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
          <button className='heroButton'>Skills</button></Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
     </div>
   </div>
  )
}

export default Hero