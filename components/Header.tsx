"use client"
import { Social } from '@/typings'
import { fetchSocials } from '@/utils/fetchSocials'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from "react-social-icons"

type Props = {
  socials: Social[]
}

const Header = ({socials}: Props) => {
  
  //  console.log(socials)
  return (
  
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
    
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut"
        }}
        className='flex flex-row items-center'>
        {/* Social Icons */}
        {/* <h1>{socials[1]._id}</h1> */}
        {/* {socials.forEach((social) => {
          return <h1>hehje</h1>
        })
        } */}
        {socials.map((social) => (<SocialIcon
          key={social._id}
          url={social.url} fgColor='gray' bgColor='transparent' /> )
        )}


        {/* {socials.map((social) => {
          <div>
          <h1>sss1111111111</h1>
          <SocialIcon
            key={social._id}
            url={social.url} fgColor='gray' bgColor='transparent' />
            </div>
        })} */}
        
        
        {/* {/* <SocialIcon url="https://instagram.com/the.doctor.29" fgColor='gray' bgColor='transparent' /> */}
        
        {/* <SocialIcon url="https://instagram.com/the.doctor.29" fgColor='gray' bgColor='transparent' />  */}
        
      </motion.div>
      
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          
        }}
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        
              <SocialIcon  network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
        <Link href='#contact'>
            Get in Touch
            
            </Link>
        </p>
           
      </motion.div>
  
    </header>
  )
}





export default Header