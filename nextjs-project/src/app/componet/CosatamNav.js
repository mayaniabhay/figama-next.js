"use client"

import Image from 'next/image'
import React from 'react'
import abhay from '../../../public/asset/iconsvg/3line.png'
import Link from 'next/link'

const CosatamNav = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>
            <h1 className='mx-4 p-3 font-bold text-xl cursor-pointer'>NExtJsMaterialKit</h1>
           <Link href='!#'><Image className='w-7 h-7  mx-4' src={abhay}></Image> </Link>


        </div>
    </div>
  )
}

export default CosatamNav