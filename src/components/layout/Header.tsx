import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
import arrow from '../../assets/arrow.svg'
import Wrapper from '@/shared/Wrapper'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90'>
            <Wrapper>
                <div className='flex justify-between p-5 items-center'>
                    {/* logo  */}
                    <Link className='hover:text-teal-700 duration-300' href="/">
                        <div>
                            <Image src={logo} alt='logo' />
                        </div>
                    </Link>

                    {/* navigation bar  */}
                    <ul className='flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16'>
                        <li className='relative group cursor-pointer hover:text-teal-700'>
                            <div className='flex gap-x-2 items-center'>
                                <p>Coursed</p>
                                <Image className='w-3 h-3 text-gray-700 group-hover:text-teal-700 mt-0.5' src={arrow} alt='arrow' />
                            </div>
                        </li>
                        <Link className='hover:text-teal-700 duration-300' href="/"><li>Blogs</li></Link>
                        <Link className='hover:text-teal-700 duration-300' href="/"><li>Videos</li></Link>
                    </ul>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header