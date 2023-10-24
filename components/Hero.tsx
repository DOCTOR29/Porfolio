"use client"
import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'
import urlBuilder from '@sanity/image-url'
type Props = {
  pageInfo: PageInfo,
}

function Hero({ pageInfo }: Props) {
  // console.log(pageInfo.name )
  const [text, count] = useTypewriter({
    words: [`Call_me_${pageInfo?.name}`, 'Guy who loves tea.jsx', '<butLovestoCode />'],
    loop: true,
    delaySpeed:2000
  })

  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <Image src={urlForImage(pageInfo?.heroImage).url()} width='150' height='150' alt={'profile pic'} className='rounded-full  object-cover mt-7'>
        
      </Image>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] p-6'>{pageInfo?.role}</h2>
        
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span>{text}</span>
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