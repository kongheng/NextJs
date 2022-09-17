import Image from 'next/image'
import React from 'react'
import { ImUsers } from 'react-icons/im'
import SideBarItem from './SideBarItem'
import { MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import{ BsStopwatch } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/640px-Facebook_f_logo_%282019%29.svg.png' height={40} width={40} className='rounded-full cursor-pointer'></Image>
            <p className='hidden sm:inline-flex font-medium'>Konheng Long</p>
        </div>
        <SideBarItem Icon={ImUsers} value='Friends' />
        <SideBarItem Icon={MdGroups} value='Groups' />
        <SideBarItem Icon={AiOutlineShop} value='Marketplace' />
        <SideBarItem Icon={MdOutlineOndemandVideo} value='Watch' />
        <SideBarItem Icon={BsStopwatch} value='Memmories' />
        <SideBarItem Icon={MdOutlineExpandMore} value='See More' />
    </div>
  )
}

export default Sidebar